        const QR = (() => {
            const ECL = { L: 0, M: 1, Q: 2, H: 3 }, FB = [1, 0, 3, 2];
            const ECC = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]];
            const NB = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]];
            const raw = v => { let r = (16 * v + 128) * v + 64; if (v >= 2) { const a = Math.floor(v / 7) + 2; r -= (25 * a - 10) * a - 55; if (v >= 7) r -= 36 } return r };
            const dcw = (v, e) => Math.floor(raw(v) / 8) - ECC[e][v] * NB[e][v];
            function gm(x, y) { let z = 0; for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11d); z ^= ((y >>> i) & 1) * x } return z & 0xff }
            function rsd(d) { const r = new Array(d).fill(0); r[d - 1] = 1; let t = 1; for (let i = 0; i < d; i++) { for (let j = 0; j < d; j++) { r[j] = gm(r[j], t); if (j + 1 < d) r[j] ^= r[j + 1] } t = gm(t, 2) } return r }
            function rsr(data, div) { const r = div.map(() => 0); for (const b of data) { const f = b ^ r.shift(); r.push(0); div.forEach((c, i) => r[i] ^= gm(c, f)) } return r }
            function alignPos(v, size) { if (v === 1) return []; const na = Math.floor(v / 7) + 2, st = Math.floor((v * 8 + na * 3 + 5) / (na * 4 - 4)) * 2, r = [6]; for (let p = size - 7; r.length < na; p -= st)r.splice(1, 0, p); return r }
            const MK = [(x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x, y) => x % 3 === 0, (x, y) => (x + y) % 3 === 0, (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0, (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0, (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0];
            function encode(bytes, minV, score, e = 3) {
                let ver;
                for (ver = Math.max(1, minV); ver <= 40; ver++) { if (4 + (ver <= 9 ? 8 : 16) + 8 * bytes.length <= dcw(ver, e) * 8) break }
                if (ver > 40) throw new Error('tooLong');
                const cc = ver <= 9 ? 8 : 16, cap = dcw(ver, e) * 8, bits = [];
                const put = (v, n) => { for (let i = n - 1; i >= 0; i--)bits.push((v >>> i) & 1) };
                put(4, 4); put(bytes.length, cc); for (const b of bytes) put(b, 8);
                put(0, Math.min(4, cap - bits.length)); put(0, (8 - bits.length % 8) % 8);
                for (let p = 0xec; bits.length < cap; p ^= 0xec ^ 0x11)put(p, 8);
                const data = []; for (let i = 0; i < bits.length; i += 8) { let v = 0; for (let j = 0; j < 8; j++)v = (v << 1) | bits[i + j]; data.push(v) }
                const nb = NB[e][ver], el = ECC[e][ver], rc = Math.floor(raw(ver) / 8), ns = nb - (rc % nb), sl = Math.floor(rc / nb), dv = rsd(el), blocks = [];
                for (let i = 0, k = 0; i < nb; i++) { const d = data.slice(k, k + sl - el + (i < ns ? 0 : 1)); k += d.length; const ec = rsr(d, dv); if (i < ns) d.push(0); blocks.push(d.concat(ec)) }
                const cw = [], cwb = []; for (let i = 0; i < blocks[0].length; i++)blocks.forEach((b, j) => { if (i !== sl - el || j >= ns) { cw.push(b[i]); cwb.push(j) } });
                const size = ver * 4 + 17, M = Array.from({ length: size }, () => new Array(size).fill(false)), F = Array.from({ length: size }, () => new Array(size).fill(false));
                const AL = Array.from({ length: size }, () => new Array(size).fill(false));
                const CI = Array.from({ length: size }, () => new Array(size).fill(-1));
                const setF = (x, y, d) => { M[y][x] = d; F[y][x] = true };
                for (let i = 0; i < size; i++) { setF(6, i, i % 2 === 0); setF(i, 6, i % 2 === 0) }
                for (const [cx, cy] of [[3, 3], [size - 4, 3], [3, size - 4]]) for (let dy = -4; dy <= 4; dy++)for (let dx = -4; dx <= 4; dx++) { const x = cx + dx, y = cy + dy, d = Math.max(Math.abs(dx), Math.abs(dy)); if (x >= 0 && x < size && y >= 0 && y < size) setF(x, y, d !== 2 && d !== 4) }
                const ap = alignPos(ver, size), na = ap.length;
                for (let i = 0; i < na; i++)for (let j = 0; j < na; j++) { if ((i === 0 && j === 0) || (i === 0 && j === na - 1) || (i === na - 1 && j === 0)) continue; for (let dy = -2; dy <= 2; dy++)for (let dx = -2; dx <= 2; dx++) { setF(ap[i] + dx, ap[j] + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1); if (!(i === na - 1 && j === na - 1)) AL[ap[j] + dy][ap[i] + dx] = true } }
                const drawF = m => {
                    const d = (FB[e] << 3) | m; let r = d; for (let i = 0; i < 10; i++)r = (r << 1) ^ ((r >>> 9) * 0x537); const b = ((d << 10) | r) ^ 0x5412, g = i => ((b >>> i) & 1) !== 0;
                    for (let i = 0; i <= 5; i++)setF(8, i, g(i)); setF(8, 7, g(6)); setF(8, 8, g(7)); setF(7, 8, g(8)); for (let i = 9; i < 15; i++)setF(14 - i, 8, g(i));
                    for (let i = 0; i < 8; i++)setF(size - 1 - i, 8, g(i)); for (let i = 8; i < 15; i++)setF(8, size - 15 + i, g(i)); setF(8, size - 8, true)
                };
                drawF(0);
                if (ver >= 7) { let r = ver; for (let i = 0; i < 12; i++)r = (r << 1) ^ ((r >>> 11) * 0x1f25); const b = (ver << 12) | r; for (let i = 0; i < 18; i++) { const bit = ((b >>> i) & 1) !== 0, a = size - 11 + (i % 3), c = Math.floor(i / 3); setF(a, c, bit); setF(c, a, bit) } }
                let i = 0; for (let right = size - 1; right >= 1; right -= 2) { if (right === 6) right = 5; for (let v = 0; v < size; v++)for (let j = 0; j < 2; j++) { const x = right - j, up = ((right + 1) & 2) === 0, y = up ? size - 1 - v : v; if (!F[y][x] && i < cw.length * 8) { M[y][x] = ((cw[i >>> 3] >>> (7 - (i & 7))) & 1) !== 0; CI[y][x] = i >>> 3; i++ } } }
                const apply = m => { for (let y = 0; y < size; y++)for (let x = 0; x < size; x++)if (!F[y][x] && MK[m](x, y)) M[y][x] = !M[y][x] };
                let best = 0, bs = Infinity;
                for (let m = 0; m < 8; m++) { apply(m); const s = score ? score(M, F, size) : m; if (s < bs) { bs = s; best = m } apply(m) }
                apply(best); drawF(best);
                return { size, version: ver, modules: M, isFunc: F, isAlign: AL, CI, cwb, t: Math.floor(el / 2) }
            }
            return { encode }
        })();
