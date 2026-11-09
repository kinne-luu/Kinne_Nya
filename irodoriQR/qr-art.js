        const PAL = {
            gb: [[15, 56, 15], [48, 98, 48], [139, 172, 15], [155, 188, 15]],
            cyber: [[10, 10, 20], [30, 20, 60], [120, 20, 140], [240, 40, 180], [0, 240, 255], [40, 120, 220], [255, 230, 0], [255, 255, 255]],
            pico: [[0, 0, 0], [29, 43, 83], [126, 37, 83], [0, 135, 81], [171, 82, 54], [95, 87, 79], [194, 195, 199], [255, 241, 232], [255, 0, 77], [255, 163, 0], [255, 236, 39], [0, 228, 54], [41, 173, 255], [131, 118, 156], [255, 119, 168], [255, 204, 170]]
        };
        const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

        const lumOf = (r, g, b) => .299 * r + .587 * g + .114 * b;
        function sampleArt(W, S) {
            const c = document.createElement('canvas'); c.width = c.height = W;
            const g = c.getContext('2d', { willReadFrequently: true });
            g.fillStyle = '#888'; g.fillRect(0, 0, W, W);
            if (artImg) {
                const iw = artImg.naturalWidth || artImg.width, ih = artImg.naturalHeight || artImg.height, side = Math.min(iw, ih) / (S.zoom / 100);
                g.imageSmoothingQuality = 'high';
                const sx = (iw - side) / 2 + S.px / 100 * side / 2, sy = (ih - side) / 2 + S.py / 100 * side / 2, T = Math.round(W * 3);
                if (side > T) { const m = document.createElement('canvas'); m.width = m.height = T; const mg = m.getContext('2d'); mg.imageSmoothingQuality = 'high'; mg.drawImage(artImg, sx, sy, side, side, 0, 0, T, T); g.drawImage(m, 0, 0, T, T, 0, 0, W, W) }
                else g.drawImage(artImg, sx, sy, side, side, 0, 0, W, W);
            }
            const d = g.getImageData(0, 0, W, W).data, out = new Float32Array(W * W * 3), pal = PAL[S.pal], k = S.con / 100, b = S.bri / 100 * 255;
            if (S.sharp > 0) {
                const a = S.sharp / 100 * 1.6, src = Uint8ClampedArray.from(d);
                for (let y = 0; y < W; y++)for (let x = 0; x < W; x++)for (let ch = 0; ch < 3; ch++) {
                    let t = 0, c = 0; for (let j = -1; j <= 1; j++)for (let i = -1; i <= 1; i++) { const xx = x + i, yy = y + j; if (xx >= 0 && yy >= 0 && xx < W && yy < W) { t += src[(yy * W + xx) * 4 + ch]; c++ } }
                    const v = src[(y * W + x) * 4 + ch]; d[(y * W + x) * 4 + ch] = v + a * (v - t / c)
                }
            }
            for (let i = 0; i < W * W; i++) {
                const x = i % W, y = (i / W) | 0, off = S.dith && pal ? (BAYER[(y & 3) * 4 + (x & 3)] - 7.5) * 3 : 0;
                let r = (d[i * 4] - 128) * k + 128 + b + off, gg = (d[i * 4 + 1] - 128) * k + 128 + b + off, bl = (d[i * 4 + 2] - 128) * k + 128 + b + off;
                r = Math.max(0, Math.min(255, r)); gg = Math.max(0, Math.min(255, gg)); bl = Math.max(0, Math.min(255, bl));
                if (pal) { let m = 1e9, p = pal[0]; for (const c of pal) { const e = (r - c[0]) ** 2 + (gg - c[1]) ** 2 + (bl - c[2]) ** 2; if (e < m) { m = e; p = c } } [r, gg, bl] = p }
                out[i * 3] = r; out[i * 3 + 1] = gg; out[i * 3 + 2] = bl;
            }
            return out;
        }

        function localMean(art, W, R) {
            const T = new Float64Array((W + 1) * (W + 1)), m = new Float32Array(W * W);
            for (let y = 0; y < W; y++) { let r = 0; for (let x = 0; x < W; x++) { const i = y * W + x; r += lumOf(art[i * 3], art[i * 3 + 1], art[i * 3 + 2]); T[(y + 1) * (W + 1) + x + 1] = T[y * (W + 1) + x + 1] + r } }
            for (let y = 0; y < W; y++)for (let x = 0; x < W; x++) {
                const x0 = Math.max(0, x - R), x1 = Math.min(W, x + R + 1), y0 = Math.max(0, y - R), y1 = Math.min(W, y + R + 1);
                m[y * W + x] = (T[y1 * (W + 1) + x1] - T[y0 * (W + 1) + x1] - T[y1 * (W + 1) + x0] + T[y0 * (W + 1) + x0]) / ((x1 - x0) * (y1 - y0))
            }
            return m;
        }
        function modLum(art, W, n, B, Q) {
            const L = new Float32Array(n * n);
            for (let my = 0; my < n; my++)for (let mx = 0; mx < n; mx++) {
                let s = 0;
                for (let j = 0; j < B; j++)for (let i = 0; i < B; i++) { const p = ((my + Q) * B + j) * W + (mx + Q) * B + i; s += lumOf(art[p * 3], art[p * 3 + 1], art[p * 3 + 2]) }
                L[my * n + mx] = s / (B * B) - 128
            }
            return L;
        }
        function skipSet(q, L, frac) {
            const n = q.size, cand = [], sk = new Uint8Array(n * n), gl = (x, y) => L[Math.max(0, Math.min(n - 1, y)) * n + Math.max(0, Math.min(n - 1, x))];
            for (let y = 0; y < n; y++)for (let x = 0; x < n; x++)if (!q.isFunc[y][x]) { const c = (q.modules[y][x] ? 1 : -1) * L[y * n + x]; if (c > 25) { const g = (Math.abs(gl(x + 1, y) - gl(x - 1, y)) + Math.abs(gl(x, y + 1) - gl(x, y - 1))) / 2; cand.push([c / (1 + g / 24), x, y]) } }
            cand.sort((a, b) => b[0] - a[0]);
            const cap = Math.floor(q.t * frac * .6), used = {}, seen = new Set();
            for (const [, x, y] of cand) {
                const k = q.CI[y][x]; if (k < 0) continue;
                if (seen.has(k)) { sk[y * n + x] = 1; continue }
                const b = q.cwb[k]; if ((used[b] || 0) >= cap) continue;
                used[b] = (used[b] || 0) + 1; seen.add(k); sk[y * n + x] = 1
            }
            return sk;
        }
        const S2L = new Float32Array(256), L2S = new Uint8ClampedArray(4096);
        for (let i = 0; i < 256; i++) { const v = i / 255; S2L[i] = v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4) }
        for (let i = 0; i < 4096; i++) { const x = i / 4095; L2S[i] = 255 * (x <= .0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - .055) + .5 }
        const lin = x => L2S[x <= 0 ? 0 : x >= 1 ? 4095 : Math.round(x * 4095)];
        function labRGB(L, a, b, o) {
            const l = L + .3963377774 * a + .2158037573 * b, m = L - .1055613458 * a - .0638541728 * b, s = L - .0894841775 * a - 1.2914855480 * b;
            const l3 = l * l * l, m3 = m * m * m, s3 = s * s * s;
            o[0] = lin(4.0767416621 * l3 - 3.3077115913 * m3 + .2309699292 * s3);
            o[1] = lin(-1.2684380046 * l3 + 2.6097574011 * m3 - .3413193965 * s3);
            o[2] = lin(-.0041960863 * l3 - .7034186147 * m3 + 1.7076147010 * s3);
        }
        function pushLab(c, dark, Ld, Ll, s, o) {
            const l = lumOf(c[0], c[1], c[2]);
            let T;
            if (dark && l > Ld) T = l - s * (l - Ld);
            else if (!dark && l < Ll) T = l + s * (Ll - l);
            else { o[0] = c[0]; o[1] = c[1]; o[2] = c[2]; return }
            const R = S2L[Math.round(c[0])], G = S2L[Math.round(c[1])], B = S2L[Math.round(c[2])];
            const l_ = Math.cbrt(.4122214708 * R + .5363325363 * G + .0514459929 * B), m_ = Math.cbrt(.2119034982 * R + .6806995451 * G + .1073969566 * B), s_ = Math.cbrt(.0883024619 * R + .2817188376 * G + .6299787005 * B);
            const L0 = .2104542553 * l_ + .7936177850 * m_ - .0040720468 * s_, a = 1.9779984951 * l_ - 2.4285922050 * m_ + .4505937099 * s_, b = .0259040371 * l_ + .7827717662 * m_ - .8086757660 * s_;
            let lo = dark ? 0 : L0, hi = dark ? L0 : 1;
            for (let i = 0; i < 9; i++) {
                const mid = (lo + hi) / 2;
                labRGB(mid, a, b, o);
                if (lumOf(o[0], o[1], o[2]) < T) lo = mid; else hi = mid;
            }
            labRGB((lo + hi) / 2, a, b, o);
        }
        function push(c, dark, Ld, Ll, s, o) {
            const l = lumOf(c[0], c[1], c[2]);
            if (dark && l > Ld) { const f = 1 - s * (1 - Ld / Math.max(l, 1)); o[0] = c[0] * f; o[1] = c[1] * f; o[2] = c[2] * f; return }
            if (!dark && l < Ll) { const t = s * (Ll - l) / (255 - l); o[0] = c[0] + (255 - c[0]) * t; o[1] = c[1] + (255 - c[1]) * t; o[2] = c[2] + (255 - c[2]) * t; return }
            o[0] = c[0]; o[1] = c[1]; o[2] = c[2];
        }
        function build(q, art, mean, B, Q, S, level, sk) {
            const n = q.size, W = (n + 2 * Q) * B, img = new ImageData(W, W), D = img.data;
            const C = { 3: 1, 4: 2, 5: 1, 6: 2, 8: 2 }[B], cc = (B - 1) / 2, sT = S.tim / 100, delta = level * .8, halo = S.halo / 100, cd = .6 + .8 * S.dep / 100, jt = S.jit && B >= 5, pal = !!PAL[S.pal], f = Math.min(.8, level * .008), o = [0, 0, 0], c = [0, 0, 0];
            for (let y = 0; y < W; y++)for (let x = 0; x < W; x++) {
                const i = y * W + x; c[0] = art[i * 3]; c[1] = art[i * 3 + 1]; c[2] = art[i * 3 + 2];
                const mx = ((x / B) | 0) - Q, my = ((y / B) | 0) - Q, out = mx < 0 || my < 0 || mx >= n || my >= n;
                const dark = out ? false : q.modules[my][mx], fn = out || (q.isFunc[my][mx] && !q.isAlign[my][mx]);
                const px = x % B, py = y % B, hh = jt ? ((mx * 73856093) ^ (my * 19349663)) >>> 0 : 0, ox = jt ? (hh >>> 3) % 3 - 1 : 0, oy = jt ? (hh >>> 9) % 3 - 1 : 0, d = Math.max(Math.abs(px - cc - ox), Math.abs(py - cc - oy)), core = d < C / 2, ring = B >= 5 && !core && d < C / 2 + 1, tm = !out && fn && (mx === 6 || my === 6) && !((mx < 8 && my < 8) || (mx >= n - 8 && my < 8) || (mx < 8 && my >= n - 8)), strong = (fn && !tm) || core;
                if (!out && !fn && sk[my * n + mx]) { o[0] = c[0]; o[1] = c[1]; o[2] = c[2] }
                else if (fn && !tm && !out && S.fnd === 'classic') { o[0] = o[1] = o[2] = dark ? 20 : 255 }
                else if (pal) {
                    const k = strong ? (tm ? f * sT : (core && !fn ? Math.min(.9, f * cd) : f)) : (ring ? f * .45 : 0);
                    for (let j = 0; j < 3; j++)o[j] = dark ? c[j] * (1 - k) : c[j] + (255 - c[j]) * k
                }
                else { const dl = core && !fn ? delta * cd : delta, mid = Math.max(dl + 8, Math.min(247 - dl, mean[i])); (S.lab ? pushLab : push)(c, dark, mid - dl, mid + dl, strong ? (tm ? sT : 1) : (ring ? Math.max(halo, .45) : halo), o) }
                if (S.blend > 0 && !out && (core || fn)) {
                    const b = S.blend / 100, mu = mean[i], L0 = lumOf(o[0], o[1], o[2]), L = mu + (L0 - mu) * (1 - .4 * b), Lc = lumOf(c[0], c[1], c[2]);
                    if (Lc > 2) { const k = L / Lc, r = Math.min(255, c[0] * k), g = Math.min(255, c[1] * k), bl = Math.min(255, c[2] * k); o[0] = o[0] * (1 - b) + r * b; o[1] = o[1] * (1 - b) + g * b; o[2] = o[2] * (1 - b) + bl * b }
                }
                D[i * 4] = o[0]; D[i * 4 + 1] = o[1]; D[i * 4 + 2] = o[2]; D[i * 4 + 3] = 255;
            }
            return img;
        }

        function attempt(S, e, bytes) {
            const Q = S.qz, B = S.blk, q0 = QR.encode(bytes, S.ver, null, e), n = q0.size, W = (n + 2 * Q) * B, art = sampleArt(W, S), L = modLum(art, W, n, B, Q);
            const score = S.mask ? (M, F, n2) => { let t = 0; for (let y = 0; y < n2; y++)for (let x = 0; x < n2; x++)if (!F[y][x]) { const l = L[y * n2 + x]; t += M[y][x] ? Math.max(0, l) : Math.max(0, -l) } return t } : null;
            const q = QR.encode(bytes, S.ver, score, e), mean = localMean(art, W, B * 2);
            const scale = Math.max(2, Math.ceil(900 / W)), tmp = document.createElement('canvas'); tmp.width = tmp.height = W;
            const tc = tmp.getContext('2d'), sk = skipSet(q, L, S.skip / 100), cnt = sk.reduce((a, v) => a + v, 0);
            tc.putImageData(build(q, art, mean, B, Q, S, S.lev, sk), 0, 0);
            cv.width = cv.height = W * scale; cx.imageSmoothingEnabled = false; cx.drawImage(tmp, 0, 0, W * scale, W * scale);
            return { level: S.lev, q, W, cnt, e, scale, B };
        }
