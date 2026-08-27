/* ================== CẤU HÌNH ================== */
// Toàn bộ file được bọc trong 1 hàm riêng (IIFE) để cô lập scope —
// tránh xung đột biến nếu lỡ bị nạp/dán trùng nội dung 2 lần trên trang.
(function () {
'use strict';

const API_BASE_URL = 'https://kinnebackend.luumanhkien08092006.workers.dev';
const AUTOSAVE_INTERVAL_MS = 5 * 60 * 1000; // 5 phút
const LOCAL_KEY = 'kinne_writer_local_v2';
// Lưu tách file: mỗi chương 1 file riêng (chuong-1.json, chuong-2.json...)
// + 1 file mục lục (manifest) chứa tên truyện và danh sách chương.
const GITHUB_DIR = 'Reading/Data';
const GITHUB_CHAPTERS_DIR = 'Reading/Data/chapters';
const GITHUB_MANIFEST_PATH = 'Reading/Data/manifest.json';

/* ================== STATE ================== */
// Chỉ 1 truyện duy nhất, không có khái niệm "tập"
let story = { title: '', updatedAt: null, chapters: [] };
let currentChapterId = null;
let mode = 'read'; // 'read' | 'edit'
let isDirty = false;
let isSaving = false;
let autosaveTimer = null;
// Theo dõi chương nào thực sự có thay đổi (nội dung / tiêu đề) kể từ lần lưu gần nhất
let dirtyChapterIds = new Set();
// Manifest (mục lục) chỉ cần lưu lại khi: đổi tên truyện, đổi tên chương,
// hoặc thêm/xoá chương (làm lệch thứ tự file chuong-x.json)
let manifestDirty = false;

/* ================== TIỆN ÍCH ================== */
function uid(prefix) {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getChapter(id) {
  let chap = story.chapters.find(c => c.id === id);
  // Tự phục hồi: nếu id hiện tại không khớp chương nào nhưng vẫn còn chương
  // (VD sau khi xoá chương, dữ liệu cũ lệch...), tự động chọn lại chương đầu tiên
  // thay vì hiển thị "chưa có chương nào" trong khi sidebar vẫn có chương.
  if (!chap && story.chapters.length) {
    chap = story.chapters[0];
    currentChapterId = chap.id;
  }
  return chap;
}

function saveLocal() {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(story));
  } catch (e) {
    console.error('Không lưu được vào localStorage:', e);
  }
}

function loadLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) story = JSON.parse(raw);
  } catch (e) {
    console.error('Không đọc được localStorage, dùng truyện trống:', e);
    story = { title: '', updatedAt: null, chapters: [] };
  }
}

// chapterId: nếu có, đánh dấu riêng chương đó là "cần lưu lại"
// affectsManifest: true nếu thay đổi này cũng làm mục lục (manifest.json) lỗi thời
//   (đổi tên truyện, đổi tên chương, thêm/xoá/sắp xếp lại chương)
function markDirty(chapterId, affectsManifest) {
  isDirty = true;
  if (chapterId) dirtyChapterIds.add(chapterId);
  if (affectsManifest) manifestDirty = true;
  saveLocal();
  updateSaveStatus();
}

// Dùng khi thêm/xoá chương: vị trí (index) của các chương phía sau đều bị lệch
// -> tên file chuong-x.json của chúng cũng đổi theo -> phải lưu lại toàn bộ.
function markAllChaptersDirty() {
  story.chapters.forEach(c => dirtyChapterIds.add(c.id));
  isDirty = true;
  manifestDirty = true;
  saveLocal();
  updateSaveStatus();
}

function updateSaveStatus() {
  const el = document.getElementById('saveStatus');
  if (!el) return;
  if (isSaving) {
    el.textContent = 'Đang lưu lên GitHub...';
    el.className = 'save-status saving';
  } else if (isDirty) {
    el.textContent = 'Có thay đổi chưa lưu';
    el.className = 'save-status dirty';
  } else {
    el.textContent = 'Đã lưu';
    el.className = 'save-status';
  }
}

/* ================== GỌI BACKEND ================== */
async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.headers || {})
    }
  });
  let payload = {};
  try {
    payload = await response.json();
  } catch (e) {
    throw new Error(`Phản hồi không phải JSON (HTTP ${response.status})`);
  }
  if (!response.ok || payload.ok === false) {
    const error = new Error(payload.error || `HTTP_${response.status}`);
    error.status = response.status;
    error.detail = payload.detail;
    throw error;
  }
  return payload;
}

/* ================== TITLE (dùng chung) ================== */
function renderTitles() {
  const name = story.title || 'Chưa đặt tên';
  document.getElementById('brandTitle').textContent = name;
  document.getElementById('readStoryTitle').textContent = name;
}

/* ================== RENDER SIDEBAR (CHƯƠNG) ================== */
function renderChapterList() {
  const list = document.getElementById('chapterList');
  list.innerHTML = '';
  if (!story.chapters.length) {
    list.innerHTML = mode === 'edit'
      ? '<div class="empty-hint">Chưa có chương nào. Nhấn "+" để tạo chương đầu tiên.</div>'
      : '<div class="empty-hint">Chưa có chương nào.</div>';
    return;
  }
  story.chapters.forEach(chap => {
    const item = document.createElement('div');
    item.className = 'chapter-item' + (chap.id === currentChapterId ? ' active' : '');
    const delBtn = mode === 'edit'
      ? '<span class="del-btn" title="Xoá chương"><i class="fa-solid fa-trash"></i></span>'
      : '';
    item.innerHTML = `<span class="chap-name">${escapeHtml(chap.title || 'Chương chưa đặt tên')}</span>${delBtn}`;
    item.addEventListener('click', (e) => {
      if (e.target.closest('.del-btn')) return;
      if (mode === 'edit') {
        selectChapter(chap.id);
      } else {
        selectReadChapter(chap.id);
      }
      closeMobileSidebar();
    });
    const del = item.querySelector('.del-btn');
    if (del) {
      del.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Xoá chương "${chap.title || ''}"?`)) {
          story.chapters = story.chapters.filter(c => c.id !== chap.id);
          if (currentChapterId === chap.id) {
            currentChapterId = story.chapters[0]?.id || null;
          }
          markAllChaptersDirty();
          renderChapterList();
          renderEditor();
        }
      });
    }
    list.appendChild(item);
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

/* ================== RENDER EDITOR ================== */
function blocksToHtml(blocks) {
  if (!blocks || !blocks.length) return '';
  return blocks.map(b => {
    const tag = b.type === 'heading' ? 'h2' : (b.type === 'quote' ? 'blockquote' : 'p');
    return `<${tag}>${sanitizeInline(b.html || '')}</${tag}>`;
  }).join('');
}

function htmlToBlocks(container) {
  const blocks = [];
  container.childNodes.forEach(node => {
    if (node.nodeType !== 1) {
      if (node.textContent.trim()) blocks.push({ type: 'paragraph', html: escapeHtml(node.textContent) });
      return;
    }
    const tag = node.tagName.toLowerCase();
    const type = tag === 'h2' ? 'heading' : (tag === 'blockquote' ? 'quote' : 'paragraph');
    blocks.push({ type, html: sanitizeInline(node.innerHTML) });
  });
  return blocks;
}

function sanitizeInline(html) {
  const allowed = ['B', 'STRONG', 'I', 'EM', 'U', 'BR', 'SPAN'];
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  (function clean(node) {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === 1) {
        if (!allowed.includes(child.tagName)) {
          const text = document.createTextNode(child.textContent);
          child.replaceWith(text);
          return;
        } else {
          [...child.attributes].forEach(attr => child.removeAttribute(attr.name));
          clean(child);
        }
      }
    });
  })(tmp);
  return tmp.innerHTML;
}

function renderEditor() {
  const chap = getChapter(currentChapterId);
  const area = document.getElementById('editorArea');
  const chapTitleInput = document.getElementById('chapterTitleInput');
  const storyTitleInput = document.getElementById('storyTitleInput');

  storyTitleInput.value = story.title || '';

  if (!chap) {
    area.innerHTML = '';
    area.setAttribute('data-placeholder', 'Tạo 1 chương ở thanh bên trái để bắt đầu viết...');
    area.contentEditable = false;
    chapTitleInput.value = '';
    chapTitleInput.disabled = true;
    return;
  }
  area.contentEditable = true;
  chapTitleInput.disabled = false;
  chapTitleInput.value = chap.title || '';
  area.innerHTML = blocksToHtml(chap.blocks) || '<p><br></p>';
  area.setAttribute('data-placeholder', 'Bắt đầu viết ở đây...');
}

function commitEditorToState() {
  const chap = getChapter(currentChapterId);
  if (!chap) return;
  const area = document.getElementById('editorArea');
  chap.blocks = htmlToBlocks(area);
}

/* ================== RENDER GIAO DIỆN ĐỌC ================== */
function renderReadView() {
  const chap = getChapter(currentChapterId);
  const empty = document.getElementById('readEmpty');
  const content = document.getElementById('readContent');
  const titleTop = document.getElementById('readChapterTitleTop');

  if (!chap) {
    empty.hidden = false;
    content.hidden = true;
    titleTop.textContent = '';
    return;
  }
  empty.hidden = true;
  content.hidden = false;
  // trigger lại animation khi đổi chương
  content.classList.remove('read-content');
  void content.offsetWidth;
  content.classList.add('read-content');

  const title = chap.title || 'Chương chưa đặt tên';
  document.getElementById('readChapterTitle').textContent = title;
  titleTop.textContent = title;
  document.getElementById('readChapterBody').innerHTML = blocksToHtml(chap.blocks) || '<p><br></p>';
  try { document.getElementById('readArea').scrollTop = 0; } catch (e) { /* bỏ qua */ }
}

function selectReadChapter(id) {
  currentChapterId = id;
  renderChapterList();
  renderReadView();
}

/* ================== HÀNH ĐỘNG CHÍNH (VIẾT) ================== */
function selectChapter(id) {
  commitEditorToState();
  currentChapterId = id;
  renderChapterList();
  renderEditor();
}

function createChapter() {
  commitEditorToState();
  const chap = { id: uid('chap'), title: `Chương ${story.chapters.length + 1}`, blocks: [{ type: 'paragraph', html: '' }] };
  story.chapters.push(chap);
  currentChapterId = chap.id;
  markDirty(chap.id, true);
  renderChapterList();
  renderEditor();
  document.getElementById('editorArea').focus();
}

/* ================== CHUYỂN CHẾ ĐỘ ĐỌC / VIẾT ================== */
function setMode(newMode) {
  if (mode === 'edit' && newMode === 'read') {
    commitEditorToState();
  }
  mode = newMode;
  const app = document.getElementById('app');
  app.classList.toggle('mode-read', mode === 'read');
  app.classList.toggle('mode-edit', mode === 'edit');

  const toggleIcon = document.querySelector('#modeToggleBtn .mode-toggle-icon i');
  const toggleLabel = document.querySelector('#modeToggleBtn .mode-toggle-label');
  if (mode === 'edit') {
    toggleIcon.className = 'fa-solid fa-book-open';
    toggleLabel.textContent = 'Về chế độ đọc';
    if (!currentChapterId && story.chapters.length) currentChapterId = story.chapters[0].id;
    renderChapterList();
    renderEditor();
  } else {
    toggleIcon.className = 'fa-solid fa-pen';
    toggleLabel.textContent = 'Chỉnh sửa truyện';
    if (!currentChapterId && story.chapters.length) currentChapterId = story.chapters[0].id;
    renderChapterList();
    renderReadView();
  }

  const activeWrap = mode === 'edit' ? document.getElementById('editorWrap') : document.getElementById('readWrap');
  activeWrap.classList.remove('view-fade');
  void activeWrap.offsetWidth;
  activeWrap.classList.add('view-fade');
}

/* ================== SIDEBAR MOBILE ================== */
function openMobileSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarBackdrop').classList.add('open');
}
function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('open');
}
function toggleMobileSidebar() {
  const open = document.getElementById('sidebar').classList.contains('open');
  if (open) closeMobileSidebar(); else openMobileSidebar();
}

/* ================== TOOLBAR ================== */
function initToolbar() {
  document.querySelectorAll('.toolbar button[data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.execCommand(btn.dataset.cmd, false, null);
      document.getElementById('editorArea').focus();
      markDirty(currentChapterId);
    });
  });
  document.querySelectorAll('.toolbar button[data-block]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.execCommand('formatBlock', false, btn.dataset.block);
      document.getElementById('editorArea').focus();
      markDirty(currentChapterId);
    });
  });
}

/* ================== LƯU LÊN GITHUB (qua Worker) ================== */
// Tên file theo thứ tự hiện tại của chương: chuong-1.json, chuong-2.json, ...
function chapterFileName(index) {
  return `chuong-${index + 1}.json`;
}

function setSaveStatusText(text, cls) {
  const el = document.getElementById('saveStatus');
  if (!el) return;
  el.textContent = text;
  el.className = 'save-status' + (cls ? ' ' + cls : '');
}

async function pushStoryToGithub({ silent = false } = {}) {
  // Không có gì thay đổi -> khỏi gọi API
  if (!isDirty && !dirtyChapterIds.size && !manifestDirty) {
    if (!silent) setSaveStatusText('Không có gì để lưu', '');
    return;
  }

  isSaving = true;
  updateSaveStatus();
  try {
    const total = story.chapters.length;
    // manifest luôn cần danh sách đầy đủ (để trỏ đúng file cho mọi chương),
    // nhưng việc XÂY danh sách này chỉ diễn ra ở phía trình duyệt — không tốn API call.
    const manifestChapters = [];
    // Chỉ những chương nằm trong dirtyChapterIds mới thực sự được ghi lên GitHub
    const chaptersToSave = story.chapters
      .map((chap, i) => ({ chap, index: i }))
      .filter(({ chap }) => dirtyChapterIds.has(chap.id));

    for (let n = 0; n < chaptersToSave.length; n++) {
      const { chap, index } = chaptersToSave[n];
      const fileName = chapterFileName(index);
      const filePath = `${GITHUB_CHAPTERS_DIR}/${fileName}`;
      setSaveStatusText(`Đang lưu chương ${n + 1}/${chaptersToSave.length}...`, 'saving');

      const chapPayload = {
        path: filePath,
        message: `Cập nhật ${fileName} — ${chap.title || '(chưa đặt tên)'}`,
        content: JSON.stringify({
          id: chap.id,
          title: chap.title || '',
          order: index + 1,
          updatedAt: new Date().toISOString(),
          blocks: chap.blocks || []
        }, null, 2)
      };
      console.log('[Lưu truyện] Gửi chương lên Worker:', filePath);
      await apiFetch('/api/story/save', { method: 'POST', body: JSON.stringify(chapPayload) });
    }

    // Danh sách chương cho manifest luôn tính trên toàn bộ story (không tốn API),
    // để trỏ đúng "file" ngay cả với những chương không đổi.
    for (let i = 0; i < total; i++) {
      const chap = story.chapters[i];
      const fileName = chapterFileName(i);
      manifestChapters.push({ id: chap.id, title: chap.title || '', order: i + 1, file: `chapters/${fileName}` });
    }

    // 2) Chỉ lưu file mục lục khi có gì đó ảnh hưởng tới nó
    //    (đổi tên truyện/chương, thêm/xoá/sắp xếp lại chương)
    if (manifestDirty) {
      setSaveStatusText('Đang lưu mục lục...', 'saving');
      const manifestPayload = {
        path: GITHUB_MANIFEST_PATH,
        message: `Cập nhật mục lục truyện: ${story.title || '(chưa đặt tên)'}`,
        content: JSON.stringify({
          title: story.title || '',
          updatedAt: new Date().toISOString(),
          chapters: manifestChapters
        }, null, 2)
      };
      console.log('[Lưu truyện] Gửi mục lục lên Worker:', manifestPayload.path);
      const result = await apiFetch('/api/story/save', { method: 'POST', body: JSON.stringify(manifestPayload) });
      console.log('[Lưu truyện] Thành công:', result);
    }

    isDirty = false;
    dirtyChapterIds.clear();
    manifestDirty = false;
    story.updatedAt = new Date().toISOString();
    saveLocal();
  } catch (e) {
    console.error('[Lưu truyện] Lỗi:', e, e.detail || '');
    if (!silent) alert('Lưu lên GitHub thất bại: ' + (e.message || 'unknown') + (e.detail ? ('\n' + e.detail) : ''));
    setSaveStatusText('Lưu thất bại — xem console (F12)', 'error');
    isSaving = false;
    return;
  }
  isSaving = false;
  updateSaveStatus();
}

async function saveNow(opts) {
  commitEditorToState();
  await pushStoryToGithub(opts);
}

function startAutosave() {
  if (autosaveTimer) clearInterval(autosaveTimer);
  autosaveTimer = setInterval(() => {
    if (isDirty && !isSaving) saveNow({ silent: true });
  }, AUTOSAVE_INTERVAL_MS);
}

/* ================== KHỞI ĐỘNG ================== */
function boot() {
  loadLocal();
  currentChapterId = story.chapters[0]?.id || null;

  renderTitles();
  renderChapterList();
  try {
    renderReadView(); // mặc định mở thẳng vào chế độ đọc, chương 1 + tên chương
  } catch (e) {
    console.error('[Khởi động] Lỗi khi hiển thị chương đọc:', e);
    // vẫn cố hiển thị lại 1 lần nữa để không bị kẹt ở trạng thái rỗng mặc định
    try { renderReadView(); } catch (e2) { /* bỏ cuộc, đã log ở trên */ }
  }
  initToolbar();
  startAutosave();

  document.getElementById('newChapterBtn').addEventListener('click', createChapter);

  document.getElementById('modeToggleBtn').addEventListener('click', () => {
    setMode(mode === 'edit' ? 'read' : 'edit');
    closeMobileSidebar();
  });

  document.getElementById('hamburgerRead').addEventListener('click', toggleMobileSidebar);
  document.getElementById('hamburgerEdit').addEventListener('click', toggleMobileSidebar);
  document.getElementById('sidebarBackdrop').addEventListener('click', closeMobileSidebar);

  document.getElementById('saveNowBtn').addEventListener('click', () => {
    console.log('[Lưu truyện] Bấm nút Lưu ngay');
    saveNow({ silent: false });
  });

  document.getElementById('storyTitleInput').addEventListener('input', (e) => {
    story.title = e.target.value;
    markDirty(null, true);
    renderTitles();
  });

  document.getElementById('chapterTitleInput').addEventListener('input', (e) => {
    const chap = getChapter(currentChapterId);
    if (!chap) return;
    chap.title = e.target.value;
    markDirty(currentChapterId, true);
    renderChapterList();
  });

  document.getElementById('editorArea').addEventListener('input', () => {
    markDirty(currentChapterId);
  });

  window.addEventListener('beforeunload', (e) => {
    if (isDirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', boot);

})();