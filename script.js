const I18N_CACHE = {};
        let I18N = {};

        const API_BASE_URL = 'https://kinnebackend.luumanhkien08092006.workers.dev';
        let publicBackendData = null;
        let adminBackendData = null;

        async function apiFetch(path, options = {}) {
            const response = await fetch(`${API_BASE_URL}${path}`, {
                ...options,
                credentials: 'include',
                headers: {
                    ...(options.body ? { 'Content-Type': 'application/json' } : {}),
                    ...(options.headers || {})
                }
            });

            const payload = await response.json().catch(() => ({}));
            if (!response.ok || payload.ok === false) {
                const error = new Error(payload.error || `HTTP_${response.status}`);
                error.status = response.status;
                throw error;
            }
            return payload;
        }

        function setTextById(id, value, allowHtml = false) {
            const element = document.getElementById(id);
            if (!element) return;
            if (allowHtml) element.innerHTML = value || '';
            else element.textContent = value || '';
        }

        function renderPublicAlbums(albums = []) {
            const grid = document.getElementById('albumGrid');
            if (!grid) return;

            grid.innerHTML = albums.map(album => `
                <div class="album-card fly-cluster">
                    <div class="album-meta-row">
                        <div class="album-name-box">
                            <span class="album-name-text">${escapeHtmlLocal(album.name)}</span>
                        </div>
                        <div class="album-desc-box">
                            <span class="album-desc-text">${escapeHtmlLocal(album.description || '')}</span>
                        </div>
                    </div>
                    <div class="album-image">
                        <div class="album-image-scroll">
                            ${(album.images || []).map(image => `
                                <div class="photo-slot" onclick="openLightbox('${escapeHtmlLocal(image.url)}')">
                                    <img
                                        src="${escapeHtmlLocal(image.url)}"
                                        alt="${escapeHtmlLocal(image.name || album.name)}"
                                        loading="lazy"
                                        style="width:100%;height:100%;object-fit:cover;border-radius:4px;display:block;"
                                    >
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function openLightbox(url) {
            document.getElementById('lightboxImage').src = url;
            document.getElementById('lightboxOverlay').classList.add('open');
        }
        function closeLightbox() {
            document.getElementById('lightboxOverlay').classList.remove('open');
            setTimeout(() => { document.getElementById('lightboxImage').src = ''; }, 300);
        }

        function openSocialLink(key) {
            const value = publicBackendData?.social?.[key];
            if (!value) return;

            if (key === 'discord') {
                copyDiscordUsername(value);
                return;
            }

            window.open(value, '_blank', 'noopener,noreferrer');
        }

        function copyDiscordUsername(value) {
            const doCopy = async () => {
                try {
                    await navigator.clipboard.writeText(value);
                } catch (e) {
                    const tempInput = document.createElement('textarea');
                    tempInput.value = value;
                    tempInput.style.position = 'fixed';
                    tempInput.style.opacity = '0';
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
                showToast('Đã copy Username Discord!');
            };
            doCopy();
        }

        function applySocialData(social = {}) {
            const qr = document.getElementById('lineQrImage');
            if (qr) {
                qr.src = social.lineQrUrl || '';
                qr.style.display = social.lineQrUrl ? 'block' : 'none';
            }
        }

        const LANGUAGE_FILES = { vie: 'Vie.json', eng: 'Eng.json', jp: 'Jp.json' };

        async function loadLanguageFile(langCode) {
            if (I18N_CACHE[langCode]) return I18N_CACHE[langCode];
            const fileName = LANGUAGE_FILES[langCode];
            if (!fileName) throw new Error(`Ngôn ngữ không hợp lệ: ${langCode}`);
            const res = await fetch(`./Language/${fileName}`);
            if (!res.ok) throw new Error(`Không tải được ./Language/${fileName}`);
            const data = await res.json();
            I18N_CACHE[langCode] = data;
            return data;
        }

        function t(key) { return (I18N && I18N[key]) || key; }

        function applyI18nToDom() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (I18N[key] !== undefined) el.textContent = I18N[key];
            });
            document.querySelectorAll('[data-i18n-html]').forEach(el => {
                const key = el.getAttribute('data-i18n-html');
                if (I18N[key] !== undefined) el.innerHTML = I18N[key];
            });
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                if (I18N[key] !== undefined) el.title = I18N[key];
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (I18N[key] !== undefined) el.placeholder = I18N[key];
            });
        }

async function setLanguage(langCode) {
            I18N = await loadLanguageFile(langCode);
            globalLang = langCode;
            applyI18nToDom();

            if (typeof renderTimeline === 'function' && typeof animeData !== 'undefined' && animeData.length) renderTimeline();
            if (typeof renderAnimeGrid === 'function' && typeof animeData !== 'undefined' && animeData.length) renderAnimeGrid();

            if (musicCurrentTrackIndex !== -1 && demoTracks[musicCurrentTrackIndex]) {
                const track = demoTracks[musicCurrentTrackIndex];
                let rawLrc = track.lrc || genericLrc;
                try {
                    if (rawLrc.trim().startsWith('{')) {
                        const parsedLrc = JSON.parse(rawLrc);
                        rawLrc = (langCode === 'jp') ? (parsedLrc.lrc_jp || parsedLrc.lrc_romaji || '') : (parsedLrc.lrc_romaji || parsedLrc.lrc_jp || '');
                    }
                } catch(e) {}
                musicLyricsData = parseLRC(rawLrc);
                renderLyrics();
                musicActiveLineIndex = -1;
            }
        }

        let currentTabId = 'section-home';
        let globalLang = 'vie';

        function formatTimeGlobal(seconds) {
            if (!isFinite(seconds) || seconds < 0) seconds = 0;
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        function applyRandomStagger(elements) {
            let maxDelay = 0;
            elements.forEach(el => {
                let randomDelay = Math.random() * 0.12;
                el.style.transitionDelay = randomDelay.toFixed(2) + 's';
                if (randomDelay > maxDelay) maxDelay = randomDelay;
            });
            return maxDelay;
        }

        function toggleMobileDrawer(forceState) {
            const controls = document.getElementById('mobileBottomControls');
            const toggle = document.getElementById('mobileDrawerToggle');
            if (!controls || !toggle) return;

            const shouldExpand = typeof forceState === 'boolean' ? forceState : !controls.classList.contains('expanded');
            controls.classList.toggle('expanded', shouldExpand);
            toggle.classList.toggle('expanded', shouldExpand);

            hideMobileDrawerHint();
        }

        function collapseMobileDrawer() {
            toggleMobileDrawer(false);
        }

        let mobileDrawerHintTimer = null;
        function hideMobileDrawerHint() {
            const hint = document.getElementById('mobileDrawerHint');
            if (!hint) return;
            hint.classList.remove('show');
            if (mobileDrawerHintTimer) { clearTimeout(mobileDrawerHintTimer); mobileDrawerHintTimer = null; }
        }

        function showMobileDrawerHintOnLoad() {
            if (window.innerWidth > 768) return;
            const hint = document.getElementById('mobileDrawerHint');
            if (!hint) return;
            requestAnimationFrame(() => hint.classList.add('show'));
            mobileDrawerHintTimer = setTimeout(hideMobileDrawerHint, 4500);
        }

        function activateNav(element, index) {
            const tabs = ['section-home', 'section-gallery', 'section-music', 'section-film', 'section-more'];
            const targetTabId = tabs[index];
            if (!targetTabId || !document.getElementById(targetTabId)) return;
            if (currentTabId === targetTabId) return;

            document.querySelectorAll('.nav-item').forEach(opt => opt.classList.remove('active'));
            element.classList.add('active');
            document.getElementById('navIndicator').style.transform = `translateY(${index * 42}px)`;

            switchTab(currentTabId, targetTabId);
            currentTabId = targetTabId;
        }

        const FLY_CLIP_SELECTOR = '.phim-scroll-wrap, .phim-scroll-inner';

        function releaseClipping(section) {
            const clippers = section.querySelectorAll(FLY_CLIP_SELECTOR);
            clippers.forEach(el => {
                el.dataset.prevOverflow = el.style.overflow || '';
                el.dataset.prevOverflowY = el.style.overflowY || '';
                el.style.overflow = 'visible';
                el.style.overflowY = 'visible';
            });
            return clippers;
        }

        function restoreClipping(clippers) {
            clippers.forEach(el => {
                el.style.overflow = el.dataset.prevOverflow || '';
                el.style.overflowY = el.dataset.prevOverflowY || '';
                delete el.dataset.prevOverflow;
                delete el.dataset.prevOverflowY;
            });
        }

        function switchTab(fromId, toId) {
            const fromSection = document.getElementById(fromId);
            const toSection = document.getElementById(toId);
            const outElements = fromSection.querySelectorAll('.fly-cluster');
            const inElements = toSection.querySelectorAll('.fly-cluster');

            const outClippers = releaseClipping(fromSection);

            const maxDelayOut = applyRandomStagger(outElements);
            outElements.forEach(el => {

                el.classList.add(el.classList.contains('fly-reverse') ? 'fly-hidden-bottom' : 'fly-hidden-top');
            });

            setTimeout(() => {
                fromSection.classList.remove('active');
                toSection.classList.add('active');

                restoreClipping(outClippers);

                const inClippers = releaseClipping(toSection);

                inElements.forEach(el => {
                    el.style.transition = 'none';
                    el.classList.add('fly-hidden-bottom');
                    el.classList.remove('fly-hidden-top');
                });

                void toSection.offsetWidth;

                inElements.forEach(el => el.style.transition = '');
                const maxDelayIn = applyRandomStagger(inElements);
                inElements.forEach(el => el.classList.remove('fly-hidden-bottom'));

                setTimeout(() => {
                    restoreClipping(inClippers);
                }, (maxDelayIn + 0.55) * 1000);

            }, (maxDelayOut + 0.35) * 1000);
        }

        function changeGlobalLang(element, index, langCode) {
            document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
            element.classList.add('active');
            document.getElementById('indicator').style.transform = `translateY(${index * 32}px)`;

            persistLangChoice(langCode);

            setLanguage(langCode)
                .then(() => loadPublicBootstrap(langCode))
                .then(() => {
                    if (currentModalId && document.getElementById('animeOverlay').classList.contains('open')) {
                        openAnimeModal(currentModalId);
                    }
                })
                .catch(error => console.error('Đổi ngôn ngữ thất bại:', error));
        }

        const LANG_ORDER = ['vie', 'eng', 'jp'];

        function updateLangSwitchUI(langCode) {
            const index = LANG_ORDER.indexOf(langCode);
            if (index === -1) return;
            const options = document.querySelectorAll('.lang-option');
            options.forEach(opt => opt.classList.remove('active'));
            if (options[index]) options[index].classList.add('active');
            const indicator = document.getElementById('indicator');
            if (indicator) indicator.style.transform = `translateY(${index * 32}px)`;
        }

        function persistLangChoice(langCode) {
            try { localStorage.setItem('preferredLang', langCode); } catch (e) {}
            try { history.replaceState(null, '', '#' + langCode); } catch (e) {}
        }

        async function detectLangFromGeo() {
            try {
                const res = await fetch(`${API_BASE_URL}/api/geo`);
                const data = await res.json();
                const country = (data.country || '').toUpperCase();
                if (country === 'VN') return 'vie';
                if (country === 'JP') return 'jp';
                return 'eng';
            } catch (e) {
                return 'vie';
            }
        }

        async function initLanguage() {
            const hashLang = window.location.hash.replace('#', '').toLowerCase();
            let langCode;

            if (LANG_ORDER.includes(hashLang)) {
                langCode = hashLang;
            } else {
                let stored = null;
                try { stored = localStorage.getItem('preferredLang'); } catch (e) {}
                if (stored && LANG_ORDER.includes(stored)) {
                    langCode = stored;
                } else {
                    langCode = await detectLangFromGeo();
                }
            }

            persistLangChoice(langCode);
            updateLangSwitchUI(langCode);
            await setLanguage(langCode);
            await loadPublicBootstrap(langCode);
        }

        let YT_VIDEO_ID = '';
        let youtubeApiReady = false;
        let ytPlayer = null;
        let ytReady = false;
        let homeProgressTimer = null;

        let ytMusicPlayer = null;
        let ytMusicReady = false;

        const ytScript = document.createElement('script');
        ytScript.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(ytScript);

        function onYouTubeIframeAPIReady() {
            youtubeApiReady = true;
            createOrLoadHomePlayer();
            createOrLoadMusicPlayer();
        }

        function createOrLoadMusicPlayer() {
            if (!youtubeApiReady || ytMusicPlayer) return;
            ytMusicPlayer = new YT.Player('ytMusicPlayer', {
                height: '0', width: '0',
                playerVars: { autoplay: 0, controls: 0, disablekb: 1 },
                events: {
                    onReady: () => { ytMusicReady = true; },
                    onStateChange: (e) => { if (typeof onMusicPlayerStateChange === 'function') onMusicPlayerStateChange(e); }
                }
            });
        }

        let loadedHomeVideoId = '';
        function createOrLoadHomePlayer() {
            if (!youtubeApiReady || !YT_VIDEO_ID) return;

            if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {

                if (loadedHomeVideoId !== YT_VIDEO_ID) {
                    ytPlayer.cueVideoById(YT_VIDEO_ID);
                    loadedHomeVideoId = YT_VIDEO_ID;
                    const thumb = document.getElementById('musicThumb');
                    if (thumb) thumb.style.backgroundImage = `url('https://img.youtube.com/vi/${YT_VIDEO_ID}/hqdefault.jpg')`;
                }
                return;
            }

            loadedHomeVideoId = YT_VIDEO_ID;
            ytPlayer = new YT.Player('ytPlayer', {
                height: '0',
                width: '0',
                videoId: YT_VIDEO_ID,
                playerVars: { autoplay: 0, controls: 0, disablekb: 1, modestbranding: 1 },
                events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange }
            });
        }

        function onPlayerReady(event) {
            ytReady = true;
            const data = event.target.getVideoData();

            document.getElementById('musicTitle').textContent = publicBackendData?.homeMusic?.name || data.title || 'Không rõ tên bài';
            document.getElementById('musicArtist').textContent = publicBackendData?.homeMusic?.artist || data.author || 'YouTube';
            const thumb = document.getElementById('musicThumb');
            thumb.classList.add('has-image');
            thumb.style.backgroundImage = `url('https://img.youtube.com/vi/${YT_VIDEO_ID}/hqdefault.jpg')`;
            document.getElementById('musicTimeDuration').textContent = formatTimeGlobal(event.target.getDuration());
        }

        function onPlayerStateChange(event) {
            const playIcon = document.getElementById('icon-play');
            const pauseIcon = document.getElementById('icon-pause');
            if (event.data === YT.PlayerState.PLAYING) {
                playIcon.style.display = 'none'; pauseIcon.style.display = 'inline'; startHomeProgressLoop();
            } else {
                playIcon.style.display = 'inline'; pauseIcon.style.display = 'none'; stopHomeProgressLoop();
            }
        }

        function startHomeProgressLoop() {
            stopHomeProgressLoop();
            homeProgressTimer = setInterval(() => {
                if (!ytPlayer || !ytReady) return;
                const current = ytPlayer.getCurrentTime();
                const duration = ytPlayer.getDuration();
                const pct = duration ? (current / duration) * 100 : 0;
                document.getElementById('musicProgress').style.width = pct + '%';
                document.getElementById('musicTimeCurrent').textContent = formatTimeGlobal(current);
                document.getElementById('musicTimeDuration').textContent = formatTimeGlobal(duration);
            }, 500);
        }

        function stopHomeProgressLoop() { if (homeProgressTimer) clearInterval(homeProgressTimer); homeProgressTimer = null; }
        function toggleHomePlay() {
            if (!ytReady) return;
            if (ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
                ytPlayer.pauseVideo();
            } else {
                ytPlayer.playVideo();
                if (typeof ytMusicReady !== 'undefined' && ytMusicReady && ytMusicPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
                    ytMusicPlayer.pauseVideo();
                }
            }
        }
        function toggleHomeMute() {
            if (!ytReady) return;
            const unmuteIcon = document.getElementById('icon-unmute'); const muteIcon = document.getElementById('icon-mute');
            if (ytPlayer.isMuted()) { ytPlayer.unMute(); unmuteIcon.style.display = 'inline'; muteIcon.style.display = 'none'; }
            else { ytPlayer.mute(); unmuteIcon.style.display = 'none'; muteIcon.style.display = 'inline'; }
        }

        const LANYARD_USER_ID = '838041121090830366';
        function updateLanyardBadge(status) {
            const visual = document.getElementById('lanyardVisual'); const text = document.getElementById('lanyardText');
            if (!visual || !text) return;
            const isOnline = status === 'online' || status === 'idle' || status === 'dnd';
            if (isOnline) {
                visual.classList.remove('status-off'); visual.classList.add('status-on');
                text.setAttribute('data-i18n', 'status_online'); text.textContent = t('status_online');
            } else {
                visual.classList.remove('status-on'); visual.classList.add('status-off');
                text.setAttribute('data-i18n', 'status_offline'); text.textContent = t('status_offline');
            }
        }
        async function fetchLanyardStatus() {
            try {
                const res = await fetch(`https://api.lanyard.rest/v1/users/${LANYARD_USER_ID}`);
                const json = await res.json();
                if (json && json.success && json.data) updateLanyardBadge(json.data.discord_status);
                else updateLanyardBadge('offline');
            } catch (err) { updateLanyardBadge('offline'); }
        }
        fetchLanyardStatus(); setInterval(fetchLanyardStatus, 20000);

        function handleScroll(el) {
            const arrowTop = document.getElementById('arrowTop'); const arrowBottom = document.getElementById('arrowBottom'); const threshold = 15;
            if (el.scrollTop > threshold) { arrowTop.style.opacity = "0.8"; arrowTop.style.filter = "blur(0px)"; }
            else { const ratio = el.scrollTop / threshold; arrowTop.style.opacity = (ratio * 0.8).toString(); arrowTop.style.filter = `blur(${(1 - ratio) * 2}px)`; }
            if (el.scrollHeight - el.scrollTop - el.clientHeight > threshold) { arrowBottom.style.opacity = "0.8"; arrowBottom.style.filter = "blur(0px)"; }
            else { const ratio = (el.scrollHeight - el.scrollTop - el.clientHeight) / threshold; arrowBottom.style.opacity = (ratio * 0.8).toString(); arrowBottom.style.filter = `blur(${(1 - ratio) * 2}px)`; }
        }

        (function () {
            const box = document.getElementById('doroSecretBox'); const plush = document.getElementById('eggPlush'); const lid = document.getElementById('eggLid'); const plushContainer = document.getElementById('eggContent');
            if (!box || !plush || !lid) return;
            let isBoxOpen = false;
            function getPointer(e) { if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY }; return { x: e.clientX, y: e.clientY }; }
            function isOverlapping(el) { const rect = el.getBoundingClientRect(); const boxRect = box.getBoundingClientRect(); const overlapX = Math.max(0, Math.min(rect.right, boxRect.right) - Math.max(rect.left, boxRect.left)); const overlapY = Math.max(0, Math.min(rect.bottom, boxRect.bottom) - Math.max(rect.top, boxRect.top)); return (overlapX * overlapY) > (rect.width * rect.height * 0.15); }
            function setupInteractable(el, type) {
                let dragging = false, hasMoved = false, startX = 0, startY = 0, lastX = 0, lastY = 0, dragOffsetX = 0, dragOffsetY = 0, fallAnim = null, vx = 0, vy = 0, rotation = 0;
                function startDrag(e) {
                    if (!isBoxOpen) return; e.preventDefault(); e.stopPropagation();
                    if (fallAnim) { cancelAnimationFrame(fallAnim); fallAnim = null; }
                    if (el.returned) { el.returned = false; const currentRect = el.getBoundingClientRect(); document.body.appendChild(el); el.style.position = 'fixed'; el.style.left = currentRect.left + 'px'; el.style.top = currentRect.top + 'px'; el.style.width = currentRect.width + 'px'; el.style.height = currentRect.height + 'px'; }
                    const rect = el.getBoundingClientRect(); const pt = getPointer(e); startX = pt.x; startY = pt.y; lastX = pt.x; lastY = pt.y; vx = 0; vy = 0; dragOffsetX = pt.x - rect.left; dragOffsetY = pt.y - rect.top; hasMoved = false; el.style.zIndex = '10000'; el.classList.add('dragging');
                    if (type === 'plush') { rotation = 0; el.style.transform = 'rotate(0deg)'; }
                    dragging = true; document.addEventListener('mousemove', onDrag); document.addEventListener('mouseup', endDrag); document.addEventListener('touchmove', onDrag, { passive: false }); document.addEventListener('touchend', endDrag);
                }
                function onDrag(e) {
                    if (!dragging) return; e.preventDefault(); const pt = getPointer(e);
                    if (Math.abs(pt.x - startX) > 5 || Math.abs(pt.y - startY) > 5) hasMoved = true;
                    vx = pt.x - lastX; vy = pt.y - lastY; lastX = pt.x; lastY = pt.y;
                    el.style.left = (pt.x - dragOffsetX) + 'px'; el.style.top = (pt.y - dragOffsetY) + 'px';
                }
                function endDrag() {
                    if (!dragging) return; dragging = false; el.classList.remove('dragging'); document.removeEventListener('mousemove', onDrag); document.removeEventListener('mouseup', endDrag); document.removeEventListener('touchmove', onDrag); document.removeEventListener('touchend', endDrag);
                    if (hasMoved) checkReturn(); else startPhysics(vy !== 0 ? vy : (Math.random() - 0.5) * 4, vx !== 0 ? vx : (Math.random() - 0.5) * 4);
                }
                function checkReturn() {
                    if (isOverlapping(el)) {
                        el.returned = true;
                        if (type === 'plush') { plushContainer.appendChild(el); el.style.position = 'relative'; el.style.left = 'auto'; el.style.top = 'auto'; el.style.width = '76%'; el.style.zIndex = '2'; el.style.transform = 'rotate(0deg)'; }
                        checkCloseBox();
                    } else startPhysics(vy, vx);
                }
                function startPhysics(initVy = 0, initVx = 0) {
                    const rect = el.getBoundingClientRect(); let x = rect.left, y = rect.top; vy = Math.max(-40, Math.min(40, initVy !== 0 ? initVy : 0)); vx = Math.max(-40, Math.min(40, initVx !== 0 ? initVx : (Math.random() - 0.5) * 2));
                    const gravity = 0.85, bounceLoss = 0.55, floor = window.innerHeight - rect.height - 8, leftBound = 4, rightBound = window.innerWidth - rect.width - 4;

                    let spinSpeed = type === 'plush' ? (vx * 2.5 || (Math.random() > 0.5 ? 15 : -15)) : 0;

                    function step() {
                        vy += gravity; y += vy; x += vx;

                        if (type === 'plush') {
                            rotation += spinSpeed;
                            el.style.transform = `rotate(${rotation}deg)`;

                            spinSpeed *= 0.96;
                        }

                        if (y >= floor) {
                            y = floor;
                            vy = -vy * bounceLoss;
                            vx *= 0.65;

                            if (type === 'plush' && Math.abs(vy) > 1.5) {
                                spinSpeed = (Math.random() - 0.5) * 20;
                            }

                            if (Math.abs(vy) < 2 && Math.abs(vx) < 0.2) {
                                el.style.top = floor + 'px';
                                el.style.left = x + 'px';

                                if (type === 'plush') {
                                    let resetRotation = () => {

                                        let normRot = ((rotation % 360) + 360) % 360;
                                        if (normRot > 180) normRot -= 360;

                                        if (Math.abs(normRot) > 0.5) {
                                            normRot *= 0.8;
                                            rotation = normRot;
                                            el.style.transform = `rotate(${rotation}deg)`;
                                            fallAnim = requestAnimationFrame(resetRotation);
                                        } else {
                                            rotation = 0;
                                            el.style.transform = 'rotate(0deg)';
                                            fallAnim = null;
                                        }
                                    };
                                    fallAnim = requestAnimationFrame(resetRotation);
                                } else {
                                    fallAnim = null;
                                }
                                return;
                            }
                        }
                        if (x < leftBound) { x = leftBound; vx = -vx * bounceLoss; if (type === 'plush') spinSpeed = -spinSpeed * 0.8; }
                        if (x > rightBound) { x = rightBound; vx = -vx * bounceLoss; if (type === 'plush') spinSpeed = -spinSpeed * 0.8; }
                        el.style.top = y + 'px'; el.style.left = x + 'px'; fallAnim = requestAnimationFrame(step);
                    }
                    if (fallAnim) cancelAnimationFrame(fallAnim); fallAnim = requestAnimationFrame(step);
                }
                el.addEventListener('mousedown', startDrag); el.addEventListener('touchstart', startDrag, { passive: false }); el.startPhysics = startPhysics;
            }
            function checkCloseBox() {
                if (plush.returned && lid.returned) {
                    isBoxOpen = false; box.classList.remove('opened'); plushContainer.appendChild(plush); box.appendChild(lid);
                    plush.style = ''; lid.style = ''; plush.returned = false; lid.returned = false; plush.classList.remove('draggable', 'popped', 'dragging'); lid.classList.remove('draggable', 'dragging');
                } else if (lid.returned) { lid.returned = false; lid.style.display = 'flex'; lid.startPhysics(-6, (Math.random() > 0.5 ? 1 : -1) * 4); }
            }
            function openBox() {
                if (isBoxOpen) return; isBoxOpen = true; box.classList.add('opened');
                const lidRect = lid.getBoundingClientRect(); document.body.appendChild(lid); lid.style.position = 'fixed'; lid.style.left = lidRect.left + 'px'; lid.style.top = lidRect.top + 'px'; lid.style.width = lidRect.width + 'px'; lid.style.height = lidRect.height + 'px'; lid.style.zIndex = '10000'; lid.returned = false; lid.style.display = 'flex'; lid.classList.add('draggable'); lid.startPhysics(-11, (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 3 + 4));
                const plushRect = plush.getBoundingClientRect(); document.body.appendChild(plush); plush.style.position = 'fixed'; plush.style.left = plushRect.left + 'px'; plush.style.top = plushRect.top + 'px'; plush.style.width = plushRect.width + 'px'; plush.style.height = plushRect.height + 'px'; plush.style.zIndex = '9999'; plush.returned = false; plush.style.display = 'block'; plush.classList.add('draggable', 'popped');
            }
            plush.addEventListener('animationend', function() { if (plush.classList.contains('popped')) plush.classList.remove('popped'); });
            setupInteractable(plush, 'plush'); setupInteractable(lid, 'lid'); box.addEventListener('click', openBox);
        })();

        let demoTracks = [];

        const genericLrc = `[00:00.50] (Đang phát nhạc...)
[00:05.00] Bài hát này chưa có lyric`;

        let musicCurrentTrackIndex = -1;
        let musicLyricsData = [];
        let musicLyricTime = 0;
        let musicActiveLineIndex = -1;
        let musicLyricTimer;
        let musicIsPlaying = false;
        let musicTrackDuration = 100;
        let musicIsShuffle = false;

        const lyricsScrollContainer = document.getElementById('lyricsScroll');
        lyricsScrollContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const seekAmount = e.deltaY * 0.08;
            musicLyricTime += seekAmount;
            musicLyricTime = Math.max(0, Math.min(musicLyricTime, musicTrackDuration));
            const percent = (musicLyricTime / musicTrackDuration) * 100;
            progressBar.style.width = percent + '%';
            currentTimeTxt.innerText = formatTimeGlobal(musicLyricTime);
        }, { passive: false });

        let isDraggingTimeline = false;
        let isDraggingVolume = false;

        const timelineTrack = document.getElementById('timelineTrack');
        const progressBar = document.getElementById('progressBar');
        const currentTimeTxt = document.getElementById('currentTimeTxt');

        function updateMusicTimeline(e, finalize = false) {
            const rect = timelineTrack.getBoundingClientRect();
            let percent = (e.clientX - rect.left) / rect.width;
            percent = Math.max(0, Math.min(1, percent));
            progressBar.style.width = (percent * 100) + '%';
            musicLyricTime = percent * musicTrackDuration;
            currentTimeTxt.innerText = formatTimeGlobal(musicLyricTime);
            if (finalize && typeof ytMusicReady !== 'undefined' && ytMusicReady) ytMusicPlayer.seekTo(musicLyricTime, true);
        }

        timelineTrack.addEventListener('mousedown', (e) => { isDraggingTimeline = true; updateMusicTimeline(e, false); });
        document.addEventListener('mousemove', (e) => { if (isDraggingTimeline) updateMusicTimeline(e, false); });
        document.addEventListener('mouseup', (e) => {
            if (isDraggingTimeline) { updateMusicTimeline(e, true); isDraggingTimeline = false; }
            if (isDraggingVolume) isDraggingVolume = false;
        });

        const volumeTrack = document.getElementById('volumeTrack');
        const volumeLevel = document.getElementById('volumeLevel');
        const volBtn = document.querySelector('.dock-right-volume .volume-btn');
        const volIcon = volBtn.querySelector('i');
        let currentVol = 0.7;

        function updateMusicVolumeUI(percent) {
            volumeLevel.style.width = (percent * 100) + '%';
            if (percent === 0) volIcon.className = 'fa-solid fa-volume-xmark';
            else if (percent < 0.5) volIcon.className = 'fa-solid fa-volume-low';
            else volIcon.className = 'fa-solid fa-volume-high';
        }

        function updateMusicVolume(e) {
            const rect = volumeTrack.getBoundingClientRect();
            let percent = (e.clientX - rect.left) / rect.width;
            percent = Math.max(0, Math.min(1, percent));
            currentVol = percent;
            updateMusicVolumeUI(percent);
            if (typeof ytMusicReady !== 'undefined' && ytMusicReady) ytMusicPlayer.setVolume(percent * 100);
        }

        volumeTrack.addEventListener('mousedown', (e) => { isDraggingVolume = true; updateMusicVolume(e); });
        document.addEventListener('mousemove', (e) => { if (isDraggingVolume) updateMusicVolume(e); });

        volBtn.addEventListener('click', () => {
            if (parseFloat(volumeLevel.style.width) === 0) updateMusicVolumeUI(currentVol > 0 ? currentVol : 0.5);
            else updateMusicVolumeUI(0);
        });

        function parseLRC(lrcText) {
            const lines = lrcText.split('\n');
            const parsed = [];
            lines.forEach(line => {
                const match = line.match(/\[(\d{2}):(\d{2}\.\d{2,3})\](.*)/);
                if (match) {
                    const minutes = parseInt(match[1]);
                    const seconds = parseFloat(match[2]);
                    const time = minutes * 60 + seconds;
                    const text = match[3].trim();
                    if (text) parsed.push({ time, text });
                }
            });
            return parsed;
        }

function renderLyrics() {
            const wrapper = document.getElementById('lyricsWrapper');
            wrapper.innerHTML = '';
            musicLyricsData.forEach((item, index) => {
                const p = document.createElement('p');
                p.className = 'lyric-line';
                p.id = 'lyric-line-' + index;

                p.innerHTML = `
                    <span class="lyric-text-content" style="display: block;">${escapeHtmlLocal(item.text)}</span>
                `;

                p.onclick = () => {
                    musicLyricTime = item.time;
                    progressBar.style.width = (musicLyricTime / musicTrackDuration * 100) + '%';
                    if (typeof ytMusicReady !== 'undefined' && ytMusicReady) {
                        ytMusicPlayer.seekTo(item.time, true);
                    }
                };
                wrapper.appendChild(p);
            });
            wrapper.style.transform = `translateY(0px)`;
        }

        function startLyricsSimulation() {
            clearInterval(musicLyricTimer);
            musicLyricTime = 0;
            musicActiveLineIndex = -1;

            const container = document.getElementById('lyricsScroll');
            const wrapper = document.getElementById('lyricsWrapper');

            musicLyricTimer = setInterval(() => {
                if (!musicIsPlaying) return;

                if (typeof ytMusicReady !== 'undefined' && ytMusicReady && ytMusicPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
                    musicLyricTime = ytMusicPlayer.getCurrentTime();
                    const dur = ytMusicPlayer.getDuration();
                    if (dur) musicTrackDuration = dur;
                }

                if (!isDraggingTimeline) {
                    let percent = (musicLyricTime / musicTrackDuration) * 100;
                    progressBar.style.width = Math.min(percent, 100) + '%';
                    currentTimeTxt.innerText = formatTimeGlobal(musicLyricTime);
                }

                let newIndex = -1;
                for (let i = 0; i < musicLyricsData.length; i++) {
                    if (musicLyricTime >= musicLyricsData[i].time) newIndex = i;
                    else break;
                }

                if (newIndex !== musicActiveLineIndex && newIndex !== -1) {
                    musicActiveLineIndex = newIndex;
                    const lines = wrapper.querySelectorAll('.lyric-line');

                    lines.forEach((line, idx) => {
                        const distance = Math.abs(idx - musicActiveLineIndex);
                        if (idx === musicActiveLineIndex) {
                            line.classList.add('active');
                            line.style.opacity = '1';
                            line.style.filter = 'blur(0px)';
                            line.style.transform = 'scale(1.08)';
                        } else {
                            line.classList.remove('active');
                            const opacity = Math.max(0.05, 0.45 - (distance * 0.12));
                            const blur = Math.min(6, distance * 1.5);
                            const scale = Math.max(0.85, 1 - (distance * 0.04));
                            line.style.opacity = opacity.toString();
                            line.style.filter = `blur(${blur}px)`;
                            line.style.transform = `scale(${scale})`;
                        }
                    });

                    const activeEl = document.getElementById('lyric-line-' + musicActiveLineIndex);
                    if (activeEl && container && wrapper) {
                        const containerCenter = container.offsetHeight / 2;
                        const elementCenter = activeEl.offsetTop + (activeEl.offsetHeight / 2);
                        const translateY = containerCenter - elementCenter;
                        wrapper.style.transform = `translateY(${translateY}px)`;
                    }
                }

                if (musicLyricTime >= musicTrackDuration) {
                    clearInterval(musicLyricTimer);
                    if (musicIsShuffle) {
                        let randomIndex;
                        do { randomIndex = Math.floor(Math.random() * demoTracks.length); }
                        while (randomIndex === musicCurrentTrackIndex && demoTracks.length > 1);
                        selectTrack(randomIndex);
                    } else {
                        let nextIndex = (musicCurrentTrackIndex + 1) % demoTracks.length;
                        selectTrack(nextIndex);
                    }
                }
            }, 100);
        }

        function selectTrack(index, autoplay = true) {
            const track = demoTracks[index];
            if (!track) return;
            if (index === musicCurrentTrackIndex) {
                if (autoplay) toggleMusicPlay();
                return;
            }
            musicCurrentTrackIndex = index;

            document.querySelectorAll('.track-card').forEach(card => {
                card.classList.toggle('active-track', parseInt(card.dataset.index) === index);
            });

            if (typeof ytMusicReady !== 'undefined' && ytMusicReady && track.youtubeId) {
                if (autoplay) {
                    ytMusicPlayer.loadVideoById(track.youtubeId);
                    if (ytReady && ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
                } else {
                    ytMusicPlayer.cueVideoById(track.youtubeId);
                }
            }

            musicIsPlaying = autoplay;
            const playBtn = document.querySelector('.play-trigger');
            playBtn.classList.toggle('active', autoplay);
            playBtn.querySelector('i').className = autoplay ? 'fa-solid fa-pause' : 'fa-solid fa-play';

            const thumb = document.getElementById('mainThumb');
            const title = document.getElementById('mainTitle');
            const artist = document.getElementById('mainArtist');
            const lyricsBox = document.getElementById('lyricsScroll');

            thumb.style.opacity = 0; thumb.style.transform = 'scale(0.95)';
            title.style.opacity = 0; artist.style.opacity = 0; lyricsBox.style.opacity = 0;

            setTimeout(() => {
                title.innerText = track.name;
                artist.innerText = track.artist || "Unknown Artist";

                const isYt = !!track.youtubeId;
                const coverImg = isYt ? `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg` : (track.coverUrl || '');
                if (coverImg) {
                    thumb.style.backgroundImage = `url('${escapeHtmlLocal(coverImg)}')`;
                    thumb.style.backgroundSize = isYt ? '135% auto' : 'cover';
                    thumb.classList.add('has-image');
                } else {
                    thumb.style.backgroundImage = '';
                    thumb.style.backgroundSize = 'cover';
                    thumb.classList.remove('has-image');
                }

                thumb.style.opacity = 1; thumb.style.transform = 'scale(1)';
                title.style.opacity = 1; artist.style.opacity = 1;
                let rawLrc = track.lrc || genericLrc;
                try {
                    if (rawLrc.trim().startsWith('{')) {
                        const parsedLrc = JSON.parse(rawLrc);
                        rawLrc = (globalLang === 'jp') ? (parsedLrc.lrc_jp || parsedLrc.lrc_romaji || '') : (parsedLrc.lrc_romaji || parsedLrc.lrc_jp || '');
                    }
                } catch(e) {}

                musicLyricsData = parseLRC(rawLrc);
                musicTrackDuration = musicLyricsData.length ? musicLyricsData[musicLyricsData.length - 1].time + 5 : 20;
                document.getElementById('durationTxt').innerText = formatTimeGlobal(musicTrackDuration);

                renderLyrics();
                lyricsBox.style.opacity = 1;
                startLyricsSimulation();
            }, 300);
        }

        function initPlaylist() {
            const container = document.getElementById('playlistContainer');

            if (!demoTracks.length) {
                container.innerHTML = '';
                document.getElementById('mainTitle').textContent = '—';
                document.getElementById('mainArtist').textContent = '—';
                document.getElementById('lyricsWrapper').innerHTML = '';
                return;
            }

            container.innerHTML = demoTracks.map((track, index) => {
                const isYt = !!track.youtubeId;
                const coverImg = isYt ? `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg` : (track.coverUrl || '');
                const bgStyle = coverImg ? ` style="background-image:url('${escapeHtmlLocal(coverImg)}');${isYt ? ' background-size: 135% auto;' : ''}"` : '';
                return `
                <div class="track-card" data-index="${index}">
                    <div class="track-thumb ${coverImg ? 'has-image' : ''}"${bgStyle}></div>
                    <div class="track-info">
                        <div class="track-name">${escapeHtmlLocal(track.name)}</div>
                        <div class="track-artist">${escapeHtmlLocal(track.artist || 'Unknown Artist')}</div>
                    </div>
                </div>
                `;
            }).join('');

            container.querySelectorAll('.track-card').forEach(card => {
                card.addEventListener('click', () => selectTrack(Number(card.dataset.index)));
            });

            setupMusicScrollAnimation();

            if (musicCurrentTrackIndex === -1) {
                selectTrack(0, false);
            } else {
                document.querySelectorAll('.track-card').forEach(card => {
                    card.classList.toggle('active-track', parseInt(card.dataset.index) === musicCurrentTrackIndex);
                });
            }
        }

        function setupMusicScrollAnimation() {
            const container = document.getElementById('playlistContainer');
            container.addEventListener('scroll', () => {
                const cards = container.querySelectorAll('.track-card');
                const containerRect = container.getBoundingClientRect();
                const isAtTop = container.scrollTop <= 2;
                const isAtBottom = Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight - 2;

                cards.forEach(card => {
                    const cardRect = card.getBoundingClientRect();
                    const distToTop = cardRect.top - containerRect.top;
                    const distToBottom = containerRect.bottom - cardRect.bottom;
                    const fadeZone = 75;

                    if (isAtTop && distToTop < fadeZone) { card.style.opacity = "1"; card.style.transform = "scale(1)"; }
                    else if (isAtBottom && distToBottom < fadeZone) { card.style.opacity = "1"; card.style.transform = "scale(1)"; }
                    else if (distToTop < fadeZone && distToTop >= -cardRect.height) { let linearFactor = Math.max(0, distToTop / fadeZone); card.style.opacity = 0.25 + (linearFactor * 0.75); card.style.transform = `scale(${0.88 + (linearFactor * 0.12)})`; }
                    else if (distToBottom < fadeZone && distToBottom >= -cardRect.height) { let linearFactor = Math.max(0, distToBottom / fadeZone); card.style.opacity = 0.25 + (linearFactor * 0.75); card.style.transform = `scale(${0.88 + (linearFactor * 0.12)})`; }
                    else { card.style.opacity = "1"; card.style.transform = "scale(1)"; }
                });
            });
            container.dispatchEvent(new Event('scroll'));
        }

        function toggleMusicPlay() {
            if (typeof ytMusicReady === 'undefined' || !ytMusicReady) {

                musicIsPlaying = !musicIsPlaying;
                const playBtn = document.querySelector('.play-trigger');
                playBtn.classList.toggle('active', musicIsPlaying);
                playBtn.querySelector('i').className = musicIsPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
                return;
            }
            const state = ytMusicPlayer.getPlayerState();
            if (state === YT.PlayerState.PLAYING) {
                ytMusicPlayer.pauseVideo();
            } else {
                ytMusicPlayer.playVideo();
                if (ytReady && ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
            }
        }

        function onMusicPlayerStateChange(event) {
            const playBtn = document.querySelector('.play-trigger');
            const icon = playBtn.querySelector('i');
            if (event.data === YT.PlayerState.PLAYING) {
                musicIsPlaying = true;
                playBtn.classList.add('active');
                icon.className = 'fa-solid fa-pause';
            } else if (event.data === YT.PlayerState.PAUSED) {
                musicIsPlaying = false;
                playBtn.classList.remove('active');
                icon.className = 'fa-solid fa-play';
            } else if (event.data === YT.PlayerState.ENDED) {
                if (musicIsShuffle) {
                    let randomIndex;
                    do { randomIndex = Math.floor(Math.random() * demoTracks.length); } while (randomIndex === musicCurrentTrackIndex && demoTracks.length > 1);
                    selectTrack(randomIndex);
                } else {
                    selectTrack((musicCurrentTrackIndex + 1) % demoTracks.length);
                }
            }
        }

        function getTitleByLang(titleObj) {
            if (globalLang === 'jp') return titleObj.native || titleObj.romaji;
            else return titleObj.english ? `${titleObj.romaji} · ${titleObj.english}` : titleObj.romaji;
        }

        const ANILIST_QUERY = `
            query { MediaListCollection(userName: "kienmanhluu", type: ANIME, status: COMPLETED) { lists { name entries { media { id title { romaji english native } coverImage { large } genres averageScore popularity episodes duration season seasonYear } } } } }
        `;

        const ANILIST_DETAIL_QUERY = `
            query ($id: Int) { Media(id: $id) { id title { romaji english native } coverImage { large } description(asHtml: false) genres averageScore popularity episodes duration format status season seasonYear studios(isMain: true) { nodes { name } } } }
        `;

        function seasonLabels() { return { WINTER: t('season_winter'), SPRING: t('season_spring'), SUMMER: t('season_summer'), FALL: t('season_fall') }; }
        let animeData = [];
        let activeTimelineType = 'all';
        let activeTimelineValue = 'all';
        let activeGenre = 'all';
        let hotIds = new Set();
        let currentModalId = null;

        async function loadAnimeList() {
            const grid = document.getElementById('animeGrid');
            try {
                const res = await fetch('https://graphql.anilist.co', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({ query: ANILIST_QUERY })
                });
                if (!res.ok) throw new Error('Network error');
                const json = await res.json();

                const lists = json.data.MediaListCollection.lists || [];
                const rawData = lists.flatMap(l => (l.entries || []).map(e => e.media));
                const uniqueDataMap = new Map();
                rawData.forEach(m => { if (!uniqueDataMap.has(m.id)) uniqueDataMap.set(m.id, m); });
                animeData = Array.from(uniqueDataMap.values());

                computeHotTrending();
                renderTimeline();
                renderGenreChips();
                renderAnimeGrid();
            } catch (err) {
                grid.innerHTML = `<div class="anime-error">${t('film_error_load')}</div>`;
                console.error(err);
            }
        }

        function computeHotTrending() {
            const withPop = animeData.filter(m => typeof m.popularity === 'number');
            const sorted = [...withPop].sort((a, b) => a.popularity - b.popularity);
            const n = sorted.length;
            if (!n) return;
            const hotCut = Math.ceil(n * 0.85);
            sorted.forEach((m, i) => { if (i >= hotCut) hotIds.add(m.id); });
        }

        function renderTimeline() {
            const strip = document.getElementById('timelineStrip');
            const yearsMap = new Map();
            animeData.forEach(m => {
                if (!m.seasonYear) return;
                if (!yearsMap.has(m.seasonYear)) yearsMap.set(m.seasonYear, new Set());
                if (m.season) yearsMap.get(m.seasonYear).add(m.season);
            });

            const sortedYears = Array.from(yearsMap.keys()).sort((a, b) => b - a);
            const seasonOrder = { SPRING: 1, SUMMER: 2, FALL: 3, WINTER: 4 };

            const SEASON_LABELS = seasonLabels();
            let html = `<div class="season-chip active filter-time-btn" data-type="all" onclick="selectTimeline('all', 'all', this)">${t('filter_all')}</div>`;
            if (sortedYears.length > 3) document.getElementById('timelineStrip').style.justifyContent = 'flex-start';
            else document.getElementById('timelineStrip').style.justifyContent = 'center';

            sortedYears.forEach(year => {
                const seasons = Array.from(yearsMap.get(year)).sort((a, b) => seasonOrder[a] - seasonOrder[b]);
                html += `<div class="year-group"><div class="year-chip filter-time-btn" onclick="selectTimeline('YEAR', ${year}, this)">${year}</div>`;
                seasons.forEach(season => {
                    const key = season + '-' + year;
                    const label = SEASON_LABELS[season] || season;
                    html += `<div class="season-chip filter-time-btn" onclick="selectTimeline('SEASON', '${key}', this)">${label}</div>`;
                });
                html += `</div>`;
            });
            strip.innerHTML = html;
        }

        function selectTimeline(type, value, el) {
            activeTimelineType = type; activeTimelineValue = value;
            document.querySelectorAll('.filter-time-btn').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            renderAnimeGrid();
        }

        function renderGenreChips() {
            const freq = new Map();
            animeData.forEach(m => (m.genres || []).forEach(g => freq.set(g, (freq.get(g) || 0) + 1)));
            const topGenres = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15).map(e => e[0]);
            const box = document.getElementById('genreChips');

            if (topGenres.length > 5) box.style.justifyContent = 'flex-start';
            else box.style.justifyContent = 'center';

            box.innerHTML = `<div class="genre-chip active" data-genre="all" onclick="selectGenre('all', this)">${t('filter_all')}</div>` + topGenres.map(g => `<div class="genre-chip" data-genre="${escapeHtml(g)}" onclick="selectGenre('${escapeHtml(g)}', this)">${escapeHtml(g)}</div>`).join('');
        }

        function selectGenre(genre, el) {
            activeGenre = genre;
            document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            renderAnimeGrid();
        }

        function getFilteredData() {
            return animeData.filter(m => {
                if (activeTimelineType === 'YEAR') { if (m.seasonYear != activeTimelineValue) return false; }
                else if (activeTimelineType === 'SEASON') { const key = m.season + '-' + m.seasonYear; if (key !== activeTimelineValue) return false; }
                if (activeGenre !== 'all') { if (!(m.genres || []).includes(activeGenre)) return false; }
                return true;
            });
        }

        function renderAnimeGrid() {
            const grid = document.getElementById('animeGrid');
            const filtered = getFilteredData();
            const currentSystemYear = new Date().getFullYear();

            if (!filtered.length) { grid.innerHTML = `<div class="anime-loading">${t('film_no_match')}</div>`; return; }

            grid.innerHTML = filtered.map(m => {
                let badge = '';
                if (hotIds.has(m.id)) {
                    if (m.seasonYear === currentSystemYear) badge = `<span class="anime-badge hot">🔥 ${t('film_hot_trend')}</span>`;
                    else if (m.seasonYear) badge = `<span class="anime-badge hot">🔥 ${t('film_hot_trend')} - ${m.seasonYear}</span>`;
                    else badge = `<span class="anime-badge hot">🔥 ${t('film_hot_trend')}</span>`;
                }
                let scoreBadge = m.averageScore ? `<span class="anime-score-badge">★ ${m.averageScore / 10}</span>` : '';

                return `<div class="anime-card" onclick="openAnimeModal(${m.id})"><div class="anime-poster">${badge}${scoreBadge}<img src="${m.coverImage.large}" alt="${escapeHtml(m.title.romaji)}" loading="lazy"></div><div class="anime-title-label" title="${escapeHtml(getTitleByLang(m.title))}">${escapeHtml(getTitleByLang(m.title))}</div></div>`;
            }).join('');
        }

        function escapeHtml(str) { const div = document.createElement('div'); div.textContent = str || ''; return div.innerHTML; }

        async function openAnimeModal(id) {
            currentModalId = id;
            const overlay = document.getElementById('animeOverlay');
            const body = document.getElementById('animeModalBody');
            body.innerHTML = `<div class="anime-modal-loading">${t('loading_wait')}</div>`;
            overlay.classList.add('open');

            try {
                const res = await fetch('https://graphql.anilist.co', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ query: ANILIST_DETAIL_QUERY, variables: { id } }) });
                if (!res.ok) throw new Error('Network error');
                const json = await res.json();
                renderModalDetail(json.data.Media);
            } catch (err) { body.innerHTML = `<div class="anime-modal-loading">${t('film_error_detail')}</div>`; }
        }

        function renderModalDetail(m) {
            const body = document.getElementById('animeModalBody');
            const cleanDesc = (m.description || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '');
            const studio = (m.studios && m.studios.nodes && m.studios.nodes[0]) ? m.studios.nodes[0].name : null;
            const seasonLabelsMap = seasonLabels();
            const seasonLabel = m.season ? `${seasonLabelsMap[m.season] || m.season} ${m.seasonYear || ''}` : null;
            body.innerHTML = `<div class="anime-modal-poster"><img src="${m.coverImage.large}" alt=""></div><div class="anime-modal-info"><div class="anime-modal-title">${escapeHtml(m.title.romaji)}</div><div class="anime-modal-subtitle">${escapeHtml(m.title.english || '')}${m.title.native ? ' · ' + escapeHtml(m.title.native) : ''}</div><div class="anime-modal-extra">${studio ? `<span><strong>${t('film_studio')}:</strong> ${escapeHtml(studio)}</span>` : ''}${m.format ? `<span><strong>${t('film_format')}:</strong> ${escapeHtml(m.format)}</span>` : ''}${m.episodes ? `<span><strong>${t('film_episodes')}:</strong> ${m.episodes}</span>` : ''}${m.duration ? `<span><strong>${t('film_duration')}:</strong> ${m.duration} ${t('film_minutes')}</span>` : ''}${seasonLabel ? `<span><strong>${t('film_season')}:</strong> ${seasonLabel}</span>` : ''}</div><div class="anime-modal-tags">${(m.genres || []).slice(0, 5).map(g => `<span class="anime-modal-tag">${escapeHtml(g)}</span>`).join('')}${m.averageScore ? `<span class="anime-modal-tag score">★ ${m.averageScore / 10}</span>` : ''}</div><div class="anime-modal-desc">${escapeHtml(cleanDesc)}</div></div>`;
        }

        function closeAnimeModal() { document.getElementById('animeOverlay').classList.remove('open'); }
        function handleOverlayClick(e) { if (e.target.id === 'animeOverlay') closeAnimeModal(); }

        function applyPublicBackendData(data) {
            publicBackendData = data;

            setTextById('homeIntroText', data.content?.homeIntro);
            setTextById('homeSubText', data.content?.homeSub);
            setTextById('homeWelcomeText', data.content?.homeWelcome, true);
            setTextById('homeWelcomeTextMobile', data.content?.homeWelcome, true);
            setTextById('galleryHintText', data.content?.galleryHint);
            setTextById('filmHintText', data.content?.filmHint);
            setTextById('musicHintText', data.content?.musicHint);

            applySocialData(data.social);
            renderPublicAlbums(data.albums || []);

            demoTracks = Array.isArray(data.tracks) ? data.tracks : [];

            initPlaylist();

            YT_VIDEO_ID = data.homeMusic?.youtubeId || '';
            createOrLoadHomePlayer();
        }

        async function loadPublicBootstrap(langCode = globalLang || 'vie') {
            try {
                const result = await apiFetch(`/api/public/bootstrap?lang=${encodeURIComponent(langCode)}`);
                applyPublicBackendData(result.data || {});
            } catch (error) {
                console.error('Không tải được dữ liệu backend:', error);

                applyPublicBackendData({ content: {}, social: {}, homeMusic: {}, albums: [], tracks: [] });
            }
        }

        let settingsMode = false;
        let activeSettingsTab = 0;

        function getCurrentSiteTabIndex() {
            const tabs = ['section-home', 'section-gallery', 'section-music', 'section-film', 'section-more'];
            const index = tabs.indexOf(currentTabId);
            return index < 0 ? 0 : index;
        }

        function handleNavClick(element, index) {
            collapseMobileDrawer();
            if (settingsMode) activateSettingsTab(element, index);
            else activateNav(element, index);
        }

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
                filmHint: 'textFilmHint'
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
                        <div class="track-mini-thumb" ${coverImgUrl ? `style="background-image:url('${escapeHtmlLocal(coverImgUrl)}'); background-size: cover;"` : ''}>
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
                        filmHint: get('textFilmHint_vi')
                    },
                    eng: {
                        homeIntro: get('textIntro_en'),
                        homeSub: get('textSub_en'),
                        homeWelcome: get('textWelcome_en'),
                        galleryHint: get('textGalleryHint_en'),
                        musicHint: get('textMusicHint_en'),
                        filmHint: get('textFilmHint_en')
                    },
                    jp: {
                        homeIntro: get('textIntro_jp'),
                        homeSub: get('textSub_jp'),
                        homeWelcome: get('textWelcome_jp'),
                        galleryHint: get('textGalleryHint_jp'),
                        musicHint: get('textMusicHint_jp'),
                        filmHint: get('textFilmHint_jp')
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

        window.addEventListener('load', async () => {
            initSettingsUi();
            syncAvatarVisibility();
            showMobileDrawerHintOnLoad();

            await initLanguage();

            const preloader = document.getElementById('pagePreloader');
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                setTimeout(() => preloader.remove(), 600);
            }

            const playBtn = document.querySelector('.play-trigger');
            playBtn.addEventListener('click', toggleMusicPlay);
            const shuffleBtn = document.getElementById('shuffleBtn');
            shuffleBtn.addEventListener('click', () => {
                musicIsShuffle = !musicIsShuffle;
                shuffleBtn.classList.toggle('active', musicIsShuffle);
            });

            loadAnimeList();
            document.querySelectorAll('.filter-strip').forEach(strip => {
                let isDown = false; let startX; let scrollLeft;
                strip.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - strip.offsetLeft; scrollLeft = strip.scrollLeft; });
                strip.addEventListener('mouseleave', () => { isDown = false; });
                strip.addEventListener('mouseup', () => { isDown = false; });
                strip.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const walk = (e.pageX - strip.offsetLeft - startX) * 1.5; strip.scrollLeft = scrollLeft - walk; });
                strip.addEventListener('wheel', (e) => { if (e.deltaY !== 0) { e.preventDefault(); strip.scrollLeft += e.deltaY * 1.2; } }, { passive: false });
            });

            const clusters = document.querySelectorAll('#section-home .fly-cluster');
            clusters.forEach(el => { el.style.transition = 'none'; el.classList.remove('fly-hidden-bottom', 'fly-hidden-top'); });
            void document.body.offsetHeight;
            clusters.forEach(el => el.style.transition = '');

            document.body.addEventListener('mousemove', (e) => {
                const target = e.target.closest('.photo-slot');

                if (window.lastTiltTarget && window.lastTiltTarget !== target) {
                    window.lastTiltTarget.style.transform = '';
                }
                window.lastTiltTarget = target;

                if (!target) return;

                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -20;
                const rotateY = ((x - centerX) / centerX) * 20;

                target.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
            });

            document.body.addEventListener('mouseout', (e) => {
                 if (window.lastTiltTarget && !window.lastTiltTarget.contains(e.relatedTarget)) {
                     window.lastTiltTarget.style.transform = '';
                     window.lastTiltTarget = null;
                 }
            });
        });