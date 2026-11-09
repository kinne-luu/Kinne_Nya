
        const I18N = {
            vi: { "tabImg": "Tải ảnh QR", "tabTxt": "Dán chuỗi", "dropQR": "Kéo thả hoặc bấm để chọn ảnh QR", "paste": "Ctrl + V để dán ảnh", "rawPh": "Chuỗi Irodori QR hoặc đường link", "hQR": "Mã QR", "hArt": "Ảnh nền", "hPix": "Pixel và độ bám mã", "lgHigh": "Ảnh hưởng lớn", "lgMid": "Vừa", "lgLow": "Nhỏ", "dropArt": "Bấm hoặc kéo thả để chọn ảnh nền", "zoom": "Phóng to", "px": "Dịch ngang", "py": "Dịch dọc", "con": "Tương phản", "bri": "Độ sáng", "sharp": "Độ nét", "warnSharp": "Trên 50% có thể khó quét.", "blk": "Kích thước ô", "pal": "Bảng màu", "palNone": "Giữ nguyên", "palPico": "16 màu retro", "palCyber": "Neon tím", "palGb": "Game Boy", "lev": "Độ bám mã", "dep": "Độ đậm chấm", "blend": "Độ hòa chấm và mắt định vị", "halo": "Vùng quanh chấm", "ver": "Mật độ mã", "verMin": "Nhỏ nhất", "ver8": "Tối thiểu v8", "ver12": "Tối thiểu v12", "fnd": "Ba mắt định vị", "fndBlend": "Hòa theo ảnh", "fndClassic": "Đen trắng", "qz": "Viền trống", "tim": "Đường kẻ chấm", "ecl": "Sửa lỗi", "skip": "Bỏ ô xung đột", "dl": "Tải PNG", "cp": "Sao chép ảnh", "rs": "Đặt lại", "copied": "Đã sao chép", "cpFail": "Không sao chép được, hãy dùng Tải PNG.", "noQR": "Không tìm thấy mã QR trong ảnh.", "notice": "Công cụ không đo được độ nhạy quét. Hãy dùng app ngân hàng quét thử và để ý tốc độ quét.", "tooLong": "Nội dung quá dài", "content": "Nội dung: ", "acct": "STK ", "memo": "ND: ", "badInfo": "Không đọc được cấu trúc Irodori QR", "loc": "vi-VN", unit: n => ' ô', stat: (l, c) => 'Bám ' + l + '% · bỏ ' + c + ' ô' },
            en: { "tabImg": "Upload QR image", "tabTxt": "Paste text", "dropQR": "Drop a QR image here, or click to choose", "paste": "Press Ctrl + V to paste an image", "rawPh": "Irodori QR string or link", "hQR": "QR code", "hArt": "Background image", "hPix": "Pixels & code strength", "lgHigh": "Big effect on scanning", "lgMid": "Medium", "lgLow": "Small", "dropArt": "Drop a background image here, or click to choose", "zoom": "Zoom", "px": "Horizontal offset", "py": "Vertical offset", "con": "Contrast", "bri": "Brightness", "sharp": "Sharpness", "warnSharp": "Above 50%, the code may be hard to scan.", "blk": "Cell size", "pal": "Palette", "palNone": "Original colors", "palPico": "16-color retro", "palCyber": "Neon purple", "palGb": "Game Boy", "lev": "Code strength", "dep": "Dot darkness", "blend": "Dot & finder blending", "halo": "Halo around dots", "ver": "Code density", "verMin": "Smallest", "ver8": "At least v8", "ver12": "At least v12", "fnd": "Finder patterns", "fndBlend": "Blend with image", "fndClassic": "Black & white", "qz": "Quiet zone", "tim": "Timing lines", "ecl": "Error correction", "skip": "Skip conflicting cells", "dl": "Download PNG", "cp": "Copy image", "rs": "Reset", "copied": "Copied", "cpFail": "Couldn't copy. Please use Download PNG.", "noQR": "No QR code found in the image.", "notice": "This tool can't measure how well the code scans. Try it with your banking app and pay attention to the scan speed.", "tooLong": "The content is too long", "content": "Content: ", "acct": "Acct ", "memo": "Memo: ", "badInfo": "Couldn't read the Irodori QR structure", "loc": "en-US", unit: n => n === 1 ? ' cell' : ' cells', stat: (l, c) => 'Strength ' + l + '% · ' + c + (c === 1 ? ' cell' : ' cells') + ' skipped' },
            ja: { "tabImg": "QR画像を読み込む", "tabTxt": "文字列を貼り付け", "dropQR": "QR画像をドロップ、またはクリックして選択", "paste": "Ctrl + V で画像を貼り付け", "rawPh": "Irodori QRの文字列またはリンク", "hQR": "QRコード", "hArt": "背景画像", "hPix": "ピクセルとコードの強さ", "lgHigh": "読み取りへの影響：大", "lgMid": "中", "lgLow": "小", "dropArt": "背景画像をドロップ、またはクリックして選択", "zoom": "拡大", "px": "横位置", "py": "縦位置", "con": "コントラスト", "bri": "明るさ", "sharp": "シャープ", "warnSharp": "50%を超えると読み取りにくくなることがあります。", "blk": "セルサイズ", "pal": "カラーパレット", "palNone": "元の色のまま", "palPico": "レトロ16色", "palCyber": "ネオンパープル", "palGb": "ゲームボーイ風", "lev": "コードの強さ", "dep": "ドットの濃さ", "blend": "ドットと位置検出パターンのなじみ具合", "halo": "ドット周囲の補正", "ver": "コード密度", "verMin": "最小", "ver8": "v8以上", "ver12": "v12以上", "fnd": "位置検出パターン", "fndBlend": "画像になじませる", "fndClassic": "白黒", "qz": "余白（クワイエットゾーン）", "tim": "タイミングライン", "ecl": "誤り訂正", "skip": "競合するセルをスキップ", "dl": "PNGを保存", "cp": "画像をコピー", "rs": "リセット", "copied": "コピーしました", "cpFail": "コピーできませんでした。PNG保存をご利用ください。", "noQR": "画像からQRコードが見つかりませんでした。", "notice": "このツールでは読み取りやすさは測れません。実際の銀行アプリでスキャンして、読み取り速度を確認してください。", "tooLong": "内容が長すぎます", "content": "内容：", "acct": "口座 ", "memo": "メモ：", "badInfo": "Irodori QRの構造を読み取れませんでした", "loc": "ja-JP", unit: n => 'マス', stat: (l, c) => '強度 ' + l + '% · ' + c + 'マスをスキップ' }
        };
        let lang = 'vi';
        try { const sv = localStorage.getItem('lang'); if (I18N[sv]) lang = sv } catch (e) { }
        const T = (k, ...a) => { const v = I18N[lang][k]; return typeof v === 'function' ? v(...a) : v };
        const SAMPLE = '00020101021138560010A0000007270126000697042201128608092006680208QRIBFTTA53037045802VN6304135a';
        const BANKS = { 970436: 'Vietcombank', 970422: 'MB Bank', 970407: 'Techcombank', 970415: 'VietinBank', 970418: 'BIDV', 970405: 'Agribank', 970423: 'TPBank', 970432: 'VPBank', 970441: 'VIB', 970403: 'Sacombank', 970416: 'ACB', 970454: 'BVBank' };
        const $ = id => document.getElementById(id);
        let qrData = SAMPLE, artImg = null, timer = 0, meta = { scale: 1, B: 4 };
        const cv = $('cv'), cx = cv.getContext('2d');
        const DEF = { zoom: 100, px: 0, py: 0, con: 110, bri: 0, lev: 60, halo: 8, blk: '4', sharp: 30, pal: '', ver: '1', fnd: 'blend', ecl: '1', skip: 20, qz: 1, tim: 40, dep: 50, blend: 0 };

        const tlv = s => { const o = {}; for (let i = 0; i + 4 <= s.length;) { const l = +s.substr(i + 2, 2); o[s.substr(i, 2)] = s.substr(i + 4, l); i += 4 + l } return o };
        function showInfo(s) {
            const el = $('info');
            if (!s.startsWith('000201')) { el.textContent = T('content') + s.slice(0, 120) + (s.length > 120 ? '…' : ''); return }
            try {
                const t = tlv(s), acc = t['38'] ? tlv(t['38'])['01'] : null, b = acc ? tlv(acc) : {}, add = t['62'] ? tlv(t['62']) : {};
                const L = [BANKS[b['00']] || ('BIN ' + (b['00'] || '?')), b['01'] && (T('acct') + b['01']), t['54'] && (Number(t['54']).toLocaleString(T('loc')) + ' VND'), add['08'] && (T('memo') + add['08'])];
                el.textContent = L.filter(Boolean).join('  |  ');
            } catch (e) { el.textContent = T('badInfo') }
        }


        function readState() {
            const S = {};
            for (const k of ['zoom', 'px', 'py', 'con', 'bri', 'lev', 'halo', 'skip', 'sharp', 'qz', 'tim', 'dep', 'blend']) S[k] = +$(k).value;
            for (const k of ['blk', 'pal', 'ver', 'fnd', 'ecl']) S[k] = $(k).value;
            S.blk = +S.blk; S.ver = +S.ver; S.ecl = +S.ecl; S.dith = S.jit = S.lab = S.mask = true;
            $('vZoom').textContent = S.zoom + '%'; $('vPx').textContent = S.px; $('vPy').textContent = S.py;
            $('vCon').textContent = (S.con / 100).toFixed(2) + 'x'; $('vBri').textContent = S.bri;
            $('vLev').textContent = S.lev + '%'; $('vHalo').textContent = S.halo + '%'; $('vSkip').textContent = S.skip + '%'; $('vSharp').textContent = S.sharp + '%'; $('vQz').textContent = S.qz + T('unit', S.qz); $('vTim').textContent = S.tim + '%'; $('vDep').textContent = S.dep + '%'; $('vBlend').textContent = S.blend + '%'; $('warnSharp').classList.toggle('hide', S.sharp <= 50);
            return S;
        }

        function render() { clearTimeout(timer); timer = setTimeout(doRender, 60) }
        function doRender() {
            if (!qrData) return;
            const S = readState(), bytes = new TextEncoder().encode(qrData);
            try {
                let r, e = S.ecl;
                r = attempt(S, e, bytes);
                meta = { scale: r.scale, B: S.blk };
                $('sSize').textContent = r.W + '×' + r.W + ' px';
                $('sVer').textContent = 'v' + r.q.version + ' · ' + 'LMQH'[r.e];
                $('sLev').textContent = T('stat', r.level, r.cnt);
                $('st').className = 'status';
                $('st').textContent = T('notice');
            } catch (err) { $('st').className = 'status bad'; $('st').textContent = err.message === 'tooLong' ? T('tooLong') : err.message }
        }

        function setQR(s) { qrData = s; $('raw').value = s; showInfo(s); render() }
        function loadArt(url) {
            const i = new Image();
            i.crossOrigin = 'anonymous';
            i.onload = () => { artImg = i; render(); };
            i.onerror = () => {
                if (i.crossOrigin) {
                    const fallback = new Image();
                    fallback.onload = () => { artImg = fallback; render(); };
                    fallback.src = url;
                }
            };
            i.src = url;
        }
        function readFile(f, cb) { const r = new FileReader(); r.onload = e => cb(e.target.result); r.readAsDataURL(f) }

        function decodeQRFile(f) {
            if (!f) return;
            if (window.QRScanner) {
                QRScanner.decodeFile(f, setQR, () => alert(T('noQR')));
            }
        }

        const drop = $('drop');
        drop.onclick = () => $('fQR').click();
        $('fQR').onclick = e => { e.target.value = ''; };
        $('fQR').onchange = e => e.target.files[0] && decodeQRFile(e.target.files[0]);
        drop.ondragover = e => { e.preventDefault(); drop.classList.add('over') };
        drop.ondragleave = () => drop.classList.remove('over');
        drop.ondrop = e => { e.preventDefault(); drop.classList.remove('over'); e.dataTransfer.files[0] && decodeQRFile(e.dataTransfer.files[0]) };
        const dropArt = $('dropArt');
        dropArt.onclick = () => $('fArt').click();
        $('fArt').onclick = e => { e.target.value = ''; };
        dropArt.ondragover = e => { e.preventDefault(); dropArt.classList.add('over') };
        dropArt.ondragleave = () => dropArt.classList.remove('over');
        dropArt.ondrop = e => { e.preventDefault(); dropArt.classList.remove('over'); e.dataTransfer.files[0] && readFile(e.dataTransfer.files[0], loadArt) };
        let zone = null;
        for (const el of document.querySelectorAll('[data-zone]')) { el.onmouseenter = () => zone = el; el.onmouseleave = () => { if (zone === el) zone = null } }
        document.addEventListener('paste', e => {
            const targetZone = zone || ($('t1').classList.contains('on') ? $('drop') : $('dropArt'));
            const it = [...(e.clipboardData ? e.clipboardData.items : [])].find(i => i.type.startsWith('image/')), f = it && it.getAsFile();
            if (!f || !targetZone) return;
            e.preventDefault();
            if (targetZone.dataset.zone === 'qr') decodeQRFile(f); else readFile(f, loadArt);
            targetZone.classList.remove('pop'); void targetZone.offsetWidth; targetZone.classList.add('pop');
        });
        const pl = $('petals');
        for (let i = 0; i < 14; i++) {
            const p = document.createElement('div'), big = Math.random() < .4;
            p.className = 'petal';
            p.style.width = big ? '27px' : '18px'; p.style.height = big ? '24px' : '16px';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = 16 + Math.random() * 16 + 's';
            p.style.animationDelay = -Math.random() * 32 + 's';
            pl.appendChild(p);
        }
        $('raw').oninput = e => { qrData = e.target.value.trim(); showInfo(qrData); render() };
        $('fArt').onchange = e => e.target.files[0] && readFile(e.target.files[0], loadArt);
        for (const k of Object.keys(DEF)) $(k).oninput = $(k).onchange = render;
        $('t1').onclick = () => { $('t1').className = 'on'; $('t2').className = ''; $('p1').classList.remove('hide'); $('p2').classList.add('hide') };
        $('t2').onclick = () => { $('t2').className = 'on'; $('t1').className = ''; $('p2').classList.remove('hide'); $('p1').classList.add('hide') };
        $('bDl').onclick = () => { const a = document.createElement('a'); a.download = 'irodori-qr-' + Date.now() + '.png'; a.href = cv.toDataURL('image/png'); a.click() };
        $('bCp').onclick = () => cv.toBlob(async b => { try { await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })]); $('bCp').textContent = T('copied'); setTimeout(() => $('bCp').textContent = T('cp'), 1500) } catch (e) { alert(T('cpFail')) } });
        $('bRs').onclick = () => { for (const k in DEF) $(k).value = DEF[k]; render() };

        function applyLang() {
            document.documentElement.lang = lang;
            for (const el of document.querySelectorAll('[data-i]')) el.textContent = T(el.dataset.i);
            for (const el of document.querySelectorAll('[data-ph]')) el.placeholder = T(el.dataset.ph);
            for (const b of document.querySelectorAll('#langs button')) b.classList.toggle('on', b.dataset.l === lang);
            showInfo(qrData);
            render();
        }
        for (const b of document.querySelectorAll('#langs button')) b.onclick = () => { lang = b.dataset.l; try { localStorage.setItem('lang', lang) } catch (e) { } applyLang() };

        const DEFAULT_BG = 'https://raw.githubusercontent.com/kinne-luu/IrodoriQR/refs/heads/main/image/Image%202026-11-09%2008.11.09.png';
        window.addEventListener('DOMContentLoaded', () => { applyLang(); setQR(SAMPLE); loadArt(DEFAULT_BG); });
