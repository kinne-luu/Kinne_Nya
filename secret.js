const SECRET_DOTS_TARGET_CLICKS = 5;
const SECRET_DOTS_MAX_GAP_MS = 800;
const READING_APP_PATH = 'Reading/index.html';

let secretDotsClickCount = 0;
let secretDotsResetTimer = null;

function handleSecretDotsClick() {
    clearTimeout(secretDotsResetTimer);
    secretDotsClickCount++;

    if (secretDotsClickCount >= SECRET_DOTS_TARGET_CLICKS) {
        secretDotsClickCount = 0;
        openReadingOverlay();
        return;
    }

    secretDotsResetTimer = setTimeout(() => {
        secretDotsClickCount = 0;
    }, SECRET_DOTS_MAX_GAP_MS);
}

function openReadingOverlay() {
    const overlay = document.getElementById('readingOverlay');
    const frame = document.getElementById('readingFrame');
    if (!overlay || !frame) return;
    if (!frame.getAttribute('src')) {
        frame.setAttribute('src', READING_APP_PATH);
    }

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (window.location.hash !== '#reading') {
        history.pushState({ reading: true }, '', '#reading');
    }
}

function closeReadingOverlay(options) {
    const skipHistoryBack = options && options.skipHistoryBack;
    const overlay = document.getElementById('readingOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;

    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (!skipHistoryBack && window.location.hash === '#reading') {
        history.back();
    }
}
window.addEventListener('hashchange', () => {
    if (window.location.hash === '#reading') {
        openReadingOverlay();
    } else {
        closeReadingOverlay({ skipHistoryBack: true });
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeReadingOverlay();
});

window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'kinne-reading-close') closeReadingOverlay();
});

window.addEventListener('load', () => {
    const dotsBtn = document.getElementById('navMoreItem');
    if (dotsBtn) dotsBtn.addEventListener('click', handleSecretDotsClick);

    if (window.location.hash === '#reading') openReadingOverlay();
});