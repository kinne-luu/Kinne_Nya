        function requestSettingsAccess() {
            if (settingsMode) {
                closeSettings();
                return;
            }
            const overlay = document.getElementById('passwordOverlay');
            const input = document.getElementById('settingsPasswordInput');
            const error = document.getElementById('settingsPasswordError');
            error.classList.remove('show');
            input.value = '';
            overlay.classList.add('open');
            setTimeout(() => input.focus(), 50);
        }

        function closePasswordModal() {
            document.getElementById('passwordOverlay').classList.remove('open');
            document.getElementById('settingsPasswordError').classList.remove('show');
            document.getElementById('settingsPasswordInput').value = '';
        }

        function handlePasswordOverlayClick(event) {
            if (event.target.id === 'passwordOverlay') closePasswordModal();
        }

        async function confirmSettingsPassword() {
            const input = document.getElementById('settingsPasswordInput');
            const error = document.getElementById('settingsPasswordError');
            const password = input.value;

            error.classList.remove('show');
            input.disabled = true;

        try {
                await apiFetch('/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({ username: 'kinne', password })
                });

                await loadAdminBootstrap();
                closePasswordModal();
                openSettings();
            } catch (requestError) {
                console.error(requestError);
                error.classList.add('show');
                input.select();
            } finally {
                input.disabled = false;
            }
        }

        function setInputValue(id, value) {
            const element = document.getElementById(id);
            if (element) element.value = value || '';
        }

        async function loadAdminBootstrap() {
            const result = await apiFetch('/api/admin/bootstrap');
            adminBackendData = result.data || {};

            const content = adminBackendData.content || {};
            const keyToField = {
                homeIntro: 'textIntro',
                homeSub: 'textSub',
                homeWelcome: 'textWelcome',
                galleryHint: 'textGalleryHint',
                musicHint: 'textMusicHint',
                filmHint: 'textFilmHint',
                gameHint: 'textGameHint',
                gameDescLeft: 'textGameDescLeft',
                gameDescCenter: 'textGameDescCenter',
                gameDescRight: 'textGameDescRight'
            };

            for (const lang of ['vie', 'eng', 'jp']) {
                for (const [key, prefix] of Object.entries(keyToField)) {
                    setInputValue(`${prefix}_${lang === 'vie' ? 'vi' : lang === 'eng' ? 'en' : 'jp'}`, content[lang]?.[key]);
                }
            }

            setInputValue('settingFacebookUrl', adminBackendData.social?.facebook);
            setInputValue('settingTwitterUrl', adminBackendData.social?.twitter);
            setInputValue('settingInstagramUrl', adminBackendData.social?.instagram);
            setInputValue('settingDiscord', adminBackendData.social?.discord);
            setInputValue('settingLineQrUrl', adminBackendData.social?.lineQrUrl);
            setInputValue('settingHomeMusicName', adminBackendData.homeMusic?.name);
            setInputValue('settingHomeMusicArtist', adminBackendData.homeMusic?.artist);
            setInputValue('settingHomeMusicUrl', adminBackendData.homeMusic?.youtubeId);

            settingsAlbums = adminBackendData.albums || [];
            renderSettingsAlbumList();

            settingsTracks = adminBackendData.tracks || [];
            renderSettingsTrackList(settingsTracks);

            settingsGameItems = adminBackendData.gameItems || [];
            renderSettingsGameList(0);
            renderSettingsGameList(1);
            renderSettingsGameList(2);
        }

        let settingsTracks = [];
        let editingTrackId = null;

        function renderSettingsTrackList(tracksData) {
            const list = document.getElementById('trackListMini');
            if (!tracksData || !tracksData.length) {
                list.innerHTML = '<div class="empty-hint">Chưa có bài hát nào trong playlist</div>';
                return;
            }
            list.innerHTML = tracksData.map(track => {

                const ytId = track.youtube_id || '';
                const coverImgUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '';

                return `
                    <div class="track-mini-card">
                        <div class="track-mini-thumb" ${coverImgUrl ? `style="background-image:url('${escapeHtmlLocal(coverImgUrl)}'); background-size: auto 135%; background-position: center;"` : ''}>
                            <i class="fa-solid fa-music" style="${coverImgUrl ? 'display:none;' : ''}"></i>
                        </div>
                        <div class="track-mini-info">
                            <b>${escapeHtmlLocal(track.name)}</b>
                            <span>${escapeHtmlLocal(track.artist || 'Unknown')}</span>
                        </div>
                        <div class="album-actions" style="display: flex; gap: 6px; flex-shrink: 0;">
                            <div class="icon-btn" title="Sửa" onclick="editTrack('${track.id}')"><i class="fa-solid fa-pen"></i></div>
                            <div class="icon-btn" title="Xoá" onclick="removeTrack('${track.id}')"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        async function removeTrack(trackId) {
            if(!confirm("Cậu có chắc chắn muốn xóa bài hát này khỏi playlist không?")) return;
            await apiFetch(`/api/admin/tracks/${encodeURIComponent(trackId)}`, { method: 'DELETE' });
            await loadAdminBootstrap();
            await loadPublicBootstrap(globalLang);
        }

        async function saveSettings() {
            const get = id => document.getElementById(id)?.value || '';

            const body = {
                content: {
                    vie: {
                        homeIntro: get('textIntro_vi'),
                        homeSub: get('textSub_vi'),
                        homeWelcome: get('textWelcome_vi'),
                        galleryHint: get('textGalleryHint_vi'),
                        musicHint: get('textMusicHint_vi'),
                        filmHint: get('textFilmHint_vi'),
                        gameHint: get('textGameHint_vi'),
                        gameDescLeft: get('textGameDescLeft_vi'),
                        gameDescCenter: get('textGameDescCenter_vi'),
                        gameDescRight: get('textGameDescRight_vi')
                    },
                    eng: {
                        homeIntro: get('textIntro_en'),
                        homeSub: get('textSub_en'),
                        homeWelcome: get('textWelcome_en'),
                        galleryHint: get('textGalleryHint_en'),
                        musicHint: get('textMusicHint_en'),
                        filmHint: get('textFilmHint_en'),
                        gameHint: get('textGameHint_en'),
                        gameDescLeft: get('textGameDescLeft_en'),
                        gameDescCenter: get('textGameDescCenter_en'),
                        gameDescRight: get('textGameDescRight_en')
                    },
                    jp: {
                        homeIntro: get('textIntro_jp'),
                        homeSub: get('textSub_jp'),
                        homeWelcome: get('textWelcome_jp'),
                        galleryHint: get('textGalleryHint_jp'),
                        musicHint: get('textMusicHint_jp'),
                        filmHint: get('textFilmHint_jp'),
                        gameHint: get('textGameHint_jp'),
                        gameDescLeft: get('textGameDescLeft_jp'),
                        gameDescCenter: get('textGameDescCenter_jp'),
                        gameDescRight: get('textGameDescRight_jp')
                    }
                },
                social: {
                    facebook: get('settingFacebookUrl'),
                    twitter: get('settingTwitterUrl'),
                    instagram: get('settingInstagramUrl'),
                    discord: get('settingDiscord'),
                    lineQrUrl: get('settingLineQrUrl')
                },
                homeMusic: {
                    name: get('settingHomeMusicName'),
                    artist: get('settingHomeMusicArtist'),
                    youtubeId: get('settingHomeMusicUrl')
                }
            };

            await apiFetch('/api/admin/settings', {
                method: 'PUT',
                body: JSON.stringify(body)
            });

            await loadPublicBootstrap(globalLang);
            showToast('Đã lưu tất cả thay đổi thành công!');
        }

        function showToast(message) {
            const toast = document.getElementById('toastNotification');
            if (!toast) return;
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 3000);
        }

        function openSettings() {
            settingsMode = true;
            document.getElementById('settingsOverlay').classList.add('open');
            document.getElementById('sideNav').classList.add('settings-mode');
            document.getElementById('settingsToggleBtn').classList.add('active');
            activateSettingsTab(document.querySelectorAll('.nav-item')[activeSettingsTab], activeSettingsTab);
        }

        function closeSettings() {
            settingsMode = false;
            document.getElementById('settingsOverlay').classList.remove('open');
            document.getElementById('sideNav').classList.remove('settings-mode');
            document.getElementById('settingsToggleBtn').classList.remove('active');

            const siteIndex = getCurrentSiteTabIndex();
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            const activeSiteItem = document.querySelectorAll('.nav-item')[siteIndex];
            if (activeSiteItem) activeSiteItem.classList.add('active');
            document.getElementById('navIndicator').style.transform = `translateY(${siteIndex * 42}px)`;
        }

        function activateSettingsTab(element, index) {
            activeSettingsTab = index;
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            element.classList.add('active');
            document.getElementById('navIndicator').style.transform = `translateY(${index * 42}px)`;
            document.querySelectorAll('.settings-tab-panel').forEach(panel => panel.classList.remove('active'));
            const panel = document.querySelector(`.settings-tab-panel[data-settings-tab="${index}"]`);
            if (panel) panel.classList.add('active');
            document.getElementById('settingsPanel').scrollTop = 0;
        }

        function switchSettingsLang(lang, btnEl) {
            document.querySelectorAll('#settingsLangSwitch .settings-lang-btn').forEach(btn => btn.classList.remove('active'));
            btnEl.classList.add('active');
            document.querySelectorAll('.lang-field').forEach(field => {
                field.classList.toggle('lang-active', field.dataset.lang === lang);
            });
        }

        let settingsAlbums = [];
        let editingAlbumId = null;

        function toggleAlbumForm() {
            const form = document.getElementById('albumForm');
            form.style.display = form.style.display === 'none' ? 'block' : 'none';
            if(form.style.display === 'none') cancelEditAlbum();
        }

        function editAlbum(albumId) {
            const album = settingsAlbums.find(a => a.id === albumId);
            if (!album) return;
            editingAlbumId = album.id;

            document.getElementById('albumNameInput').value = album.name || '';
            document.getElementById('albumDescInput_vi').value = album.description_vi || album.description || '';
            document.getElementById('albumDescInput_en').value = album.description_en || '';
            document.getElementById('albumDescInput_jp').value = album.description_jp || '';
            document.getElementById('albumDriveInput').value = album.drive_folder_id || '';

            document.getElementById('albumForm').style.display = 'block';
            document.getElementById('saveAlbumBtn').innerHTML = '<i class="fa-solid fa-check"></i> Cập nhật Album';
            document.getElementById('cancelEditAlbumBtn').style.display = 'inline-flex';
        }

        function cancelEditAlbum() {
            editingAlbumId = null;
            document.getElementById('albumNameInput').value = '';
            document.getElementById('albumDescInput_vi').value = '';
            document.getElementById('albumDescInput_en').value = '';
            document.getElementById('albumDescInput_jp').value = '';
            document.getElementById('albumDriveInput').value = '';
            document.getElementById('saveAlbumBtn').innerHTML = '<i class="fa-solid fa-check"></i> Lưu album';
            document.getElementById('cancelEditAlbumBtn').style.display = 'none';
        }

        async function addAlbum() {
            const name = document.getElementById('albumNameInput').value.trim();
            const desc_vi = document.getElementById('albumDescInput_vi').value.trim();
            const desc_en = document.getElementById('albumDescInput_en').value.trim();
            const desc_jp = document.getElementById('albumDescInput_jp').value.trim();
            const drive = document.getElementById('albumDriveInput').value.trim();
            if (!name || !drive) { alert('Cần ít nhất Tên album và Link Google Drive.'); return; }

            const payload = { name, description_vi: desc_vi, description_en: desc_en, description_jp: desc_jp, driveFolder: drive };
            if (editingAlbumId) payload.id = editingAlbumId;

            document.getElementById('saveAlbumBtn').innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
            document.getElementById('saveAlbumBtn').disabled = true;

            await apiFetch('/api/admin/albums', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            cancelEditAlbum();
            document.getElementById('albumForm').style.display = 'none';
            document.getElementById('saveAlbumBtn').disabled = false;

            await loadAdminBootstrap();
            await loadPublicBootstrap(globalLang);
        }

        async function removeAlbum(albumId) {
            if(!confirm("Cậu có chắc muốn xóa album này?")) return;
            await apiFetch(`/api/admin/albums/${encodeURIComponent(albumId)}`, { method: 'DELETE' });
            await loadAdminBootstrap();
            await loadPublicBootstrap(globalLang);
        }

        function renderSettingsAlbumList() {
            const list = document.getElementById('albumList');
            if (!settingsAlbums.length) {
                list.innerHTML = '<div class="empty-hint" id="albumEmptyHint">Chưa có album nào được thêm</div>';
                return;
            }
            list.innerHTML = settingsAlbums.map(album => `
                <div class="album-list-item">
                    <div class="album-info"><b>${escapeHtmlLocal(album.name)}</b><span>${escapeHtmlLocal(album.description_vi || album.description || 'Không có mô tả')}</span></div>
                    <div class="album-actions">
                        <div class="icon-btn" title="Sửa" onclick="editAlbum('${album.id}')"><i class="fa-solid fa-pen"></i></div>
                        <div class="icon-btn" title="Xoá" onclick="removeAlbum('${album.id}')"><i class="fa-solid fa-trash"></i></div>
                    </div>
                </div>
            `).join('');
        }

        function escapeHtmlLocal(value) {
            const div = document.createElement('div');
            div.textContent = value || '';
            return div.innerHTML;
        }

        let selectedLyrics = null;
        function setLyricFileLabel(text) {
            const el = document.getElementById('lyricFileName');
            if (!el) return;
            if (text) { el.textContent = text; el.style.display = 'block'; }
            else { el.textContent = ''; el.style.display = 'none'; }
        }
        async function parseSelectedLyricsFile(file) {
            if (!file || !file.name.toLowerCase().endsWith('.json')) {
                throw new Error('Chỉ nhận file .json');
            }
            const json = JSON.parse(await file.text());
            if (json.lrc_romaji || json.lrc_jp) {
                let finalRomaji = Array.isArray(json.lrc_romaji) ? json.lrc_romaji.join('\n') : (json.lrc_romaji || '');
                let finalJp = Array.isArray(json.lrc_jp) ? json.lrc_jp.join('\n') : (json.lrc_jp || '');
                selectedLyrics = { lrc: JSON.stringify({ lrc_romaji: finalRomaji, lrc_jp: finalJp }) };
            } else {
                let finalLrc = Array.isArray(json.lrc) ? json.lrc.join('\n') : (json.lrc || '');
                selectedLyrics = { lrc: finalLrc };
            }
            setLyricFileLabel(`✓ ${file.name}`);
        }

        function editTrack(trackId) {
            const track = settingsTracks.find(t => t.id === trackId);
            if (!track) return;
            editingTrackId = track.id;

            document.getElementById('trackNameInput').value = track.name || '';
            document.getElementById('trackArtistInput').value = track.artist || '';

            const ytId = track.youtube_id || '';
            document.getElementById('trackYoutubeInput').value = ytId ? `https://www.youtube.com/watch?v=${ytId}` : '';

            if (track.lyrics_json) {
                selectedLyrics = { lrc: track.lyrics_json };
                setLyricFileLabel('✓ Đang giữ file lyric cũ (kéo thả file mới nếu muốn đổi)');
            } else {
                selectedLyrics = null;
                setLyricFileLabel('');
            }

            document.getElementById('saveTrackBtn').innerHTML = '<i class="fa-solid fa-check"></i> Cập nhật bài hát';
            document.getElementById('cancelEditTrackBtn').style.display = 'inline-flex';
        }

        function cancelEditTrack() {
            editingTrackId = null;
            document.getElementById('trackNameInput').value = '';
            document.getElementById('trackArtistInput').value = '';
            document.getElementById('trackYoutubeInput').value = '';
            selectedLyrics = null;
            setLyricFileLabel('');
            document.getElementById('saveTrackBtn').innerHTML = '<i class="fa-solid fa-check"></i> Thêm vào playlist';
            document.getElementById('cancelEditTrackBtn').style.display = 'none';
        }

        async function saveTrack() {
            const name = document.getElementById('trackNameInput').value.trim();
            const artist = document.getElementById('trackArtistInput').value.trim();
            const youtube = document.getElementById('trackYoutubeInput').value.trim();

            if (!name) {
                alert('Cần nhập tên bài hát.');
                return;
            }

            document.getElementById('saveTrackBtn').innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
            document.getElementById('saveTrackBtn').disabled = true;

            const payload = {
                name,
                artist,
                youtube,
                lrc: selectedLyrics?.lrc || ''
            };

            if (editingTrackId) {
                payload.id = editingTrackId;
            }

            if (editingTrackId) {
                await apiFetch(`/api/admin/tracks/${encodeURIComponent(editingTrackId)}`, { method: 'DELETE' });
            }

            await apiFetch('/api/admin/tracks', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            cancelEditTrack();
            document.getElementById('saveTrackBtn').disabled = false;

            await loadAdminBootstrap();
            await loadPublicBootstrap(globalLang);
        }

        let settingsGameItems = [];
        let editingGameItemId = { 0: null, 1: null, 2: null };
        let pendingGameIconKey = { 0: null, 1: null, 2: null };
        let pendingGameCoverKey = { 1: null, 2: null };

        function switchGameSettingsCol(colIndex, btnEl) {
            document.querySelectorAll('.game-settings-tab-btn').forEach(b => b.classList.remove('active'));
            btnEl.classList.add('active');
            document.querySelectorAll('.game-settings-col-panel').forEach(p => p.classList.remove('active'));
            document.querySelector(`.game-settings-col-panel[data-game-col-panel="${colIndex}"]`).classList.add('active');
        }

        function toggleGameForm(col) {
            const form = document.getElementById(`gameForm${col}`);
            form.style.display = form.style.display === 'none' ? 'block' : 'none';
            if (form.style.display === 'none') cancelEditGameItem(col);
        }

        function setGameIconPreview(col, url) {
            const preview = document.getElementById(`gameIconPreview${col}`);
            if (!preview) return;
            if (url) { preview.style.backgroundImage = `url('${url}')`; preview.classList.add('show'); }
            else { preview.style.backgroundImage = ''; preview.classList.remove('show'); }
        }

        function setGameCoverPreview(col, url) {
            const preview = document.getElementById(`gameCoverPreview${col}`);
            if (!preview) return;
            if (url) { preview.style.backgroundImage = `url('${url}')`; preview.classList.add('show'); }
            else { preview.style.backgroundImage = ''; preview.classList.remove('show'); }
        }

        function setGameIconFileLabel(col, text) {
            const el = document.getElementById(`gameIconFileName${col}`);
            if (!el) return;
            if (text) { el.textContent = text; el.style.display = 'block'; }
            else { el.textContent = ''; el.style.display = 'none'; }
        }

        function setGameCoverFileLabel(col, text) {
            const el = document.getElementById(`gameCoverFileName${col}`);
            if (!el) return;
            if (text) { el.textContent = text; el.style.display = 'block'; }
            else { el.textContent = ''; el.style.display = 'none'; }
        }

        const WEBP_MAX_DIMENSION = 1600;
        const WEBP_QUALITY = 0.85;

        function convertImageToWebp(file, maxDimension = WEBP_MAX_DIMENSION, quality = WEBP_QUALITY) {
            return new Promise((resolve) => {
                if (!file || !file.type || !file.type.startsWith('image/') || file.type === 'image/gif') {
                    resolve(file);
                    return;
                }

                const objectUrl = URL.createObjectURL(file);
                const img = new Image();

                img.onload = () => {
                    try {
                        let { width, height } = img;
                        if (width > maxDimension || height > maxDimension) {
                            const scale = Math.min(maxDimension / width, maxDimension / height);
                            width = Math.round(width * scale);
                            height = Math.round(height * scale);
                        }

                        const canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);

                        canvas.toBlob((blob) => {
                            URL.revokeObjectURL(objectUrl);
                            if (!blob) { resolve(file); return; }

                            const baseName = (file.name || 'image').replace(/\.[^.]+$/, '');
                            const webpFile = new File([blob], `${baseName}.webp`, { type: 'image/webp' });
                            resolve(webpFile);
                        }, 'image/webp', quality);
                    } catch (e) {
                        URL.revokeObjectURL(objectUrl);
                        resolve(file);
                    }
                };

                img.onerror = () => {
                    URL.revokeObjectURL(objectUrl);
                    resolve(file);
                };

                img.src = objectUrl;
            });
        }

        async function uploadGameIcon(col, file) {
            if (!file || !file.type.startsWith('image/')) { alert('Chỉ nhận file ảnh.'); return; }
            setGameIconFileLabel(col, `⏳ Đang xử lý ${file.name}...`);
            try {
                const webpFile = await convertImageToWebp(file);
                setGameIconFileLabel(col, `⏳ Đang tải lên ${webpFile.name}...`);

                const formData = new FormData();
                formData.append('file', webpFile);
                if (pendingGameIconKey[col]) formData.append('old_key', pendingGameIconKey[col]);
                const response = await fetch(`${API_BASE_URL}/api/admin/game/upload`, {
                    method: 'POST', credentials: 'include', body: formData
                });
                const payload = await response.json().catch(() => ({}));
                if (!response.ok || payload.ok === false) throw new Error(payload.error || `HTTP_${response.status}`);

                pendingGameIconKey[col] = payload.key;
                setGameIconPreview(col, gameImageUrl(payload.key));
                setGameIconFileLabel(col, `✓ ${webpFile.name}`);
            } catch (e) {
                setGameIconFileLabel(col, '');
                alert('Tải icon thất bại: ' + e.message);
            }
        }

        async function uploadGameCover(col, file) {
            if (!file || !file.type.startsWith('image/')) { alert('Chỉ nhận file ảnh.'); return; }
            setGameCoverFileLabel(col, `⏳ Đang xử lý ${file.name}...`);
            try {
                const webpFile = await convertImageToWebp(file);
                setGameCoverFileLabel(col, `⏳ Đang tải lên ${webpFile.name}...`);

                const formData = new FormData();
                formData.append('file', webpFile);
                if (pendingGameCoverKey[col]) formData.append('old_key', pendingGameCoverKey[col]);
                const response = await fetch(`${API_BASE_URL}/api/admin/game/upload`, {
                    method: 'POST', credentials: 'include', body: formData
                });
                const payload = await response.json().catch(() => ({}));
                if (!response.ok || payload.ok === false) throw new Error(payload.error || `HTTP_${response.status}`);

                pendingGameCoverKey[col] = payload.key;
                setGameCoverPreview(col, gameImageUrl(payload.key));
                setGameCoverFileLabel(col, `✓ ${webpFile.name}`);
            } catch (e) {
                setGameCoverFileLabel(col, '');
                alert('Tải ảnh bìa thất bại: ' + e.message);
            }
        }

        function initGameDropzone(col) {
            const dropzone = document.getElementById(`gameIconDrop${col}`);
            const fileInput = document.getElementById(`gameIconInput${col}`);
            if (dropzone && fileInput) {
                dropzone.addEventListener('click', () => fileInput.click());
                fileInput.addEventListener('change', () => {
                    if (fileInput.files[0]) uploadGameIcon(col, fileInput.files[0]);
                });
                ['dragover', 'dragleave', 'drop'].forEach(type => {
                    dropzone.addEventListener(type, event => { event.preventDefault(); event.stopPropagation(); });
                });
                dropzone.addEventListener('dragover', () => dropzone.classList.add('drag-over'));
                dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
                dropzone.addEventListener('drop', event => {
                    dropzone.classList.remove('drag-over');
                    const file = event.dataTransfer.files[0];
                    if (file) uploadGameIcon(col, file);
                });
            }

            const coverDropzone = document.getElementById(`gameCoverDrop${col}`);
            const coverInput = document.getElementById(`gameCoverInput${col}`);
            if (coverDropzone && coverInput) {
                coverDropzone.addEventListener('click', () => coverInput.click());
                coverInput.addEventListener('change', () => {
                    if (coverInput.files[0]) uploadGameCover(col, coverInput.files[0]);
                });
                ['dragover', 'dragleave', 'drop'].forEach(type => {
                    coverDropzone.addEventListener(type, event => { event.preventDefault(); event.stopPropagation(); });
                });
                coverDropzone.addEventListener('dragover', () => coverDropzone.classList.add('drag-over'));
                coverDropzone.addEventListener('dragleave', () => coverDropzone.classList.remove('drag-over'));
                coverDropzone.addEventListener('drop', event => {
                    coverDropzone.classList.remove('drag-over');
                    const file = event.dataTransfer.files[0];
                    if (file) uploadGameCover(col, file);
                });
            }
        }

        function editGameItem(itemId) {
            const item = settingsGameItems.find(g => g.id === itemId);
            if (!item) return;
            const col = item.column;
            editingGameItemId[col] = item.id;
            pendingGameIconKey[col] = item.icon_key || null;
            if (col !== 0) pendingGameCoverKey[col] = item.cover_key || null;

            document.getElementById(`gameNameInput${col}`).value = item.name || '';
            if (col === 0) {
                document.getElementById('gameUsernameInput0').value = item.username || '';
                document.getElementById('gameUidInput0').value = item.uid || '';
            } else {
                document.getElementById(`gameLinkInput${col}`).value = item.link || '';
                document.getElementById(`gameDescInput${col}_vi`).value = item.description_vi || item.description || '';
                document.getElementById(`gameDescInput${col}_en`).value = item.description_en || '';
                document.getElementById(`gameDescInput${col}_jp`).value = item.description_jp || '';
                setGameCoverPreview(col, item.cover_key ? gameImageUrl(item.cover_key) : '');
            }
            setGameIconPreview(col, item.icon_key ? gameImageUrl(item.icon_key) : '');

            document.getElementById(`gameForm${col}`).style.display = 'block';
            document.getElementById(`saveGameBtn${col}`).innerHTML = '<i class="fa-solid fa-check"></i> Cập nhật game';
            document.getElementById(`cancelGameBtn${col}`).style.display = 'inline-flex';
        }

        function cancelEditGameItem(col) {
            editingGameItemId[col] = null;
            pendingGameIconKey[col] = null;
            document.getElementById(`gameNameInput${col}`).value = '';
            if (col === 0) {
                document.getElementById('gameUsernameInput0').value = '';
                document.getElementById('gameUidInput0').value = '';
            } else {
                pendingGameCoverKey[col] = null;
                document.getElementById(`gameLinkInput${col}`).value = '';
                document.getElementById(`gameDescInput${col}_vi`).value = '';
                document.getElementById(`gameDescInput${col}_en`).value = '';
                document.getElementById(`gameDescInput${col}_jp`).value = '';
                setGameCoverPreview(col, '');
                setGameCoverFileLabel(col, '');
            }
            setGameIconPreview(col, '');
            setGameIconFileLabel(col, '');
            document.getElementById(`saveGameBtn${col}`).innerHTML = '<i class="fa-solid fa-check"></i> Lưu game';
            document.getElementById(`cancelGameBtn${col}`).style.display = 'none';
        }

        async function saveGameItem(col) {
            const name = document.getElementById(`gameNameInput${col}`).value.trim();
            if (!name) { alert('Cần nhập tên game.'); return; }

            const payload = {
                column: col,
                name,
                icon_key: pendingGameIconKey[col] || ''
            };
            if (col === 0) {
                payload.username = document.getElementById('gameUsernameInput0').value.trim();
                payload.uid = document.getElementById('gameUidInput0').value.trim();
            } else {
                payload.link = document.getElementById(`gameLinkInput${col}`).value.trim();
                payload.description_vi = document.getElementById(`gameDescInput${col}_vi`).value.trim();
                payload.description_en = document.getElementById(`gameDescInput${col}_en`).value.trim();
                payload.description_jp = document.getElementById(`gameDescInput${col}_jp`).value.trim();
                payload.cover_key = pendingGameCoverKey[col] || '';
            }
            if (editingGameItemId[col]) payload.id = editingGameItemId[col];

            const btn = document.getElementById(`saveGameBtn${col}`);
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
            btn.disabled = true;

            try {
                await apiFetch('/api/admin/game/items', { method: 'POST', body: JSON.stringify(payload) });
                cancelEditGameItem(col);
                document.getElementById(`gameForm${col}`).style.display = 'none';
                await loadAdminBootstrap();
                await loadPublicBootstrap(globalLang);
            } finally {
                btn.disabled = false;
            }
        }

        async function removeGameItem(itemId) {
            if (!confirm('Cậu có chắc muốn xóa game này?')) return;
            await apiFetch(`/api/admin/game/items/${encodeURIComponent(itemId)}`, { method: 'DELETE' });
            await loadAdminBootstrap();
            await loadPublicBootstrap(globalLang);
        }

        function renderSettingsGameList(col) {
            const list = document.getElementById(`gameList${col}`);
            if (!list) return;
            const items = settingsGameItems.filter(g => g.column === col || g.column === String(col));
            if (!items.length) {
                list.innerHTML = '<div class="empty-hint">Chưa có game nào được thêm</div>';
                return;
            }
            list.innerHTML = items.map(item => `
                <div class="album-list-item">
                    <div class="game-list-item-icon" style="${item.icon_key ? `background-image:url('${escapeHtmlLocal(gameImageUrl(item.icon_key))}'); background-size:cover; background-position:center;` : ''}"></div>
                    <div class="album-info">
                        <b>${escapeHtmlLocal(item.name)}</b>
                        <span>${col == 0 ? escapeHtmlLocal(`${item.username ? item.username + ' · ' : ''}${item.uid ? `UID: ${item.uid}` : 'Chưa có UID'}`) : escapeHtmlLocal((item.description_vi || item.description) ? (item.description_vi || item.description).slice(0, 60) : 'Chưa có mô tả')}</span>
                    </div>
                    <div class="album-actions">
                        <div class="icon-btn" title="Sửa" onclick="editGameItem('${item.id}')"><i class="fa-solid fa-pen"></i></div>
                        <div class="icon-btn" title="Xoá" onclick="removeGameItem('${item.id}')"><i class="fa-solid fa-trash"></i></div>
                    </div>
                </div>
            `).join('');
        }

        function initSettingsUi() {
            const passwordInput = document.getElementById('settingsPasswordInput');
            passwordInput.addEventListener('keydown', event => {
                if (event.key === 'Enter') confirmSettingsPassword();
                if (event.key === 'Escape') closePasswordModal();
            });

            const dropzone = document.getElementById('lyricDropzone');
            const fileInput = document.getElementById('lyricFileInput');
            if (dropzone && fileInput) {
                dropzone.addEventListener('click', () => fileInput.click());
                fileInput.addEventListener('change', async () => {
                    if (fileInput.files[0]) {
                        try { await parseSelectedLyricsFile(fileInput.files[0]); }
                        catch(e) { alert(e.message); }
                    }
                });
                ['dragover', 'dragleave', 'drop'].forEach(type => {
                    dropzone.addEventListener(type, event => { event.preventDefault(); event.stopPropagation(); });
                });
                dropzone.addEventListener('dragover', () => dropzone.classList.add('drag-over'));
                dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
                dropzone.addEventListener('drop', async event => {
                    dropzone.classList.remove('drag-over');
                    const file = event.dataTransfer.files[0];
                    if (file) {
                        try { await parseSelectedLyricsFile(file); }
                        catch(e) { alert(e.message); }
                    }
                });
            }

            [0, 1, 2].forEach(initGameDropzone);
        }

        function syncAvatarVisibility() {
            const isMobile = window.innerWidth <= 768;
            document.querySelectorAll('.pc-avatar').forEach(el => {
                el.style.display = isMobile ? 'none' : '';
            });
            document.querySelectorAll('.mobile-avatar').forEach(el => {
                el.style.display = isMobile ? 'block' : '';
            });
        }

        let avatarResizeTimer = null;
        window.addEventListener('resize', () => {
            clearTimeout(avatarResizeTimer);
            avatarResizeTimer = setTimeout(syncAvatarVisibility, 120);
        });

