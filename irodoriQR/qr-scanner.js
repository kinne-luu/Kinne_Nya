(function () {
    let jsQRPromise = null;

    function loadJsQR() {
        if (typeof jsQR !== 'undefined') return Promise.resolve(window.jsQR);
        if (jsQRPromise) return jsQRPromise;
        jsQRPromise = new Promise(resolve => {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js';
            s.onload = () => resolve(window.jsQR);
            s.onerror = () => {
                const fallback = document.createElement('script');
                fallback.src = 'https://unpkg.com/jsqr@1.4.0/dist/jsQR.js';
                fallback.onload = () => resolve(window.jsQR);
                fallback.onerror = () => resolve(null);
                document.head.appendChild(fallback);
            };
            document.head.appendChild(s);
        });
        return jsQRPromise;
    }

    async function decodeCanvas(canvas) {
        const qrLib = await loadJsQR();
        if (!qrLib) return null;
        try {
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const res = qrLib(imgData.data, imgData.width, imgData.height, { inversionAttempts: 'attemptBoth' });
            return res ? res.data : null;
        } catch (e) {
            return null;
        }
    }

    async function decodeImage(img) {
        if ('BarcodeDetector' in window) {
            try {
                const detector = new BarcodeDetector({ formats: ['qr_code'] });
                const barcodes = await detector.detect(img);
                if (barcodes && barcodes.length > 0 && barcodes[0].rawValue) {
                    return barcodes[0].rawValue;
                }
            } catch (e) {}
        }

        const c = document.createElement('canvas');
        c.width = img.naturalWidth || img.width;
        c.height = img.naturalHeight || img.height;
        const ctx = c.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);

        let res = await decodeCanvas(c);
        if (res) return res;

        const maxDims = [1200, 800, 500];
        for (const maxDim of maxDims) {
            if (c.width > maxDim || c.height > maxDim) {
                const scale = maxDim / Math.max(c.width, c.height);
                const sc = document.createElement('canvas');
                sc.width = Math.round(c.width * scale);
                sc.height = Math.round(c.height * scale);
                const sctx = sc.getContext('2d', { willReadFrequently: true });
                sctx.drawImage(img, 0, 0, sc.width, sc.height);
                res = await decodeCanvas(sc);
                if (res) return res;
            }
        }
        return null;
    }

    function decodeFile(file, onSuccess, onError) {
        if (!file) return;
        const r = new FileReader();
        r.onload = e => {
            const img = new Image();
            img.onload = async () => {
                try {
                    const text = await decodeImage(img);
                    if (text) onSuccess(text);
                    else onError(new Error('noQR'));
                } catch (err) {
                    onError(err);
                }
            };
            img.onerror = () => onError(new Error('loadError'));
            img.src = e.target.result;
        };
        r.onerror = () => onError(new Error('readError'));
        r.readAsDataURL(file);
    }

    window.QRScanner = {
        decodeFile,
        decodeImage
    };
})();
