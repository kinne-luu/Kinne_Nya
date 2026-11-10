const I18N_CACHE = {};
        let I18N = {};

        const API_BASE_URL = 'https://kinnebackend.luumanhkien08092006.workers.dev';
        const STATIC_BACKEND_DATA = {
  "content": {
    "homeIntro": "Chúc mừng cậu đã tìm được nơi này <3\n\nTớ là Kinne, một thằng con trai đam mê rất nhìu thứ XD\n\nTớ có niềm đam mê rất lớn với Anime, Manga, Light Novel, Visual Novel và mấy con game gacha, game 3A và hàng chục thứ kèm theo đó là một tá sở thích:\nnào là 3D, nào là vibe code, nào là design, cả vẽ nữa, vân vân và mây mây, nhưng không cái nào master cả 🥀",
    "homeSub": "tớ thích đi fes nữa, ngắm các bạn coser xinh lắm nhưng tớ ở nơi rất ít fes nên cũng ít cơ hội được ngắm <(\")",
    "homeWelcome": "\"nơi này là ngôi nhà của tớ, chứa tất tần tật những gì cậu có thể biết về tớ, có thể có vài kỉ niệm?, những project tớ đã từng làm, và cả những dự án lên kế hoạch nhưng chưa biết bao giờ xong nữa =))\n\ncậu cứ từ từ tận hưởng nhé, hướng đi nằm ở bên phải cậu đó",
    "galleryHint": "Đây là nơi tớ chia sẻ những tác phẩm của chính tớ, nó không đẹp nhưng tớ rất yêu những tác phẩm này",
    "musicHint": "Đây là nơi chứa những bản nhạc mà tớ cực kì yêu thích, cậu có thể nghe thử xem có hợp gu hay không.",
    "filmHint": "Đây là tất cả những bộ Anime tớ đã xem, tớ còn rất thích đọc Manga, Light Novel và cả Visual Novel nữa, tuy nhiên vì không nhiều bằng Anime nên list ở đây chỉ là phim thôi :P",
    "gameHint": "Đây là mấy tựa game tớ đã và đang chơi, biết đâu chúng mình lại chung sở thích",
    "gameDescLeft": "Tớ đã dành rất rất nhiều thời gian cho chúng,vài game hiện tớ không hoặc rất ít chơi",
    "gameDescCenter": "Vài con game tớ đã chơi qua, có khi trùng mấy con game cậu thích đấy",
    "gameDescRight": "Visual Novel, đọc truyện nhưng ở 1 trải nghiệm hoàn toàn mới xD"
  },
  "social": {
    "facebook": "https://web.facebook.com/kienmanhluu/",
    "twitter": "https://x.com/kienmanhluu",
    "instagram": "https://www.instagram.com/kinne_luu/",
    "discord": "kienmanhluu",
    "lineQrUrl": "https://raw.githubusercontent.com/kinne-luu/Kinne_Nya/refs/heads/main/image/Line_QR.jpg"
  },
  "homeMusic": {
    "youtubeId": "JnEfMkF_awg",
    "name": " What Awaits Beyond the Radiance",
    "artist": "Wuthering Waves"
  },
  "albums": [
    {
      "id": "album_1784173236652",
      "name": "3D Background",
      "description": "tớ thích làm background style anime bằng Blender",
      "images": [
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOHzfc6Lg2Fzz--_5_vOcrYfvIuzPoXlP3RgsTfpA79zaXxrCdkxP9cyl4r3lH6aChXKPQyZgoGEPD5Tvl6F17KVeP_dsUfW2ebtMs=s220",
          "fullUrl": "/api/image/1LMf9jbcym6f9ss2ppa8zw_uqnsaniwzO",
          "name": "Untitled149_20261017161712.png"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN5tjv2n76UOZGXhSYkyM03r1tb6BYnZVsJlnreY1eZtLMr6uGvI29cnkxgCejzHq3RddUDxUNGR9sOeJPuITGqVbbHZVubgB0tUHQ=s220",
          "fullUrl": "/api/image/1U7ojfdm8ZMNtY1ra7WuKbQSPRA8uZ8FS",
          "name": "1000087992.jpeg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPpof7MDy_juNHFpiab3-t3oXl2ybzyVYukZi6DDQmJ0ou4FN4UD7EUi6FzpPzVOKyFldgdYnFcwLLX82MtN1MvDFGBSTCrP1wwj38=s220",
          "fullUrl": "/api/image/1iJ2o4o-k1B0LVPfHc9sBXuzbeL1MBrtN",
          "name": "New Project 202 [077604F].png"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBP42R-p1LwBNhuRB_qQ6fgVJskIRg9P--cOVxZAXI33tw00qiHgjHREbVzz3BDIopy6JpHwy5EWU0ekfv4GJ7FGFZEMIBn7YOu_N00=s220",
          "fullUrl": "/api/image/1D7TOtmmzD27OH2yxC4faJE9PD48R-SCh",
          "name": "final_00000.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN_x2ANssn9pdGADCGlpynmUTDN-zx_T4rikYifrXCvp2HDLZCJWCWQPRKfc0WM_KC0EHWFJDyAYJwTxhLqsdyP8ekiKa6klN0zuVU=s220",
          "fullUrl": "/api/image/1HwIlstNFsuQHzWVOW1J7psjNb5QcdbPY",
          "name": "Untitled48_20260202164344.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOgXhBtUcalYFOHPvpKf7Medqj3Q-MCV9Hc3U3F6th9so8pDCaEMQLI9-rhitrY3M594d2uQyVRvUL_3GymB0Lgoi_N37ESb7R5KgU=s220",
          "fullUrl": "/api/image/1hD4KgFz4XB9rW7OOpO5zcx6y90BbLqm0",
          "name": "kaltis scene (1).png"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBO0KFmp5pmmrUEtY1foRkBYV3eE3kN2fmZdHaapHebyIQURuumbl7EwH_gynwPfhJXMbJZdM8F42SX_gCjEKa9ugAwcRqIoujV5aOo=s220",
          "fullUrl": "/api/image/1D8v61tyXlKfVuV6hbtwHATbHH8L9TByg",
          "name": "20250709_004547.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPepbVump8B51_zH0CaSG2hYSls_obpaUYO8PrbW00RNG-9o_Lq5EwQZij9ck5OwymqrXTk9LJiLcXN65Z5KFTt4lb76opUm_9xcSE=s220",
          "fullUrl": "/api/image/1D8uMd6F3nWe1kTPMqlaquqBeZ2oKdXtL",
          "name": "20250709_004559.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMCR4yvZAsahxTFxDf82G_eCyv1H9kI1YUEtQ09YJ1OPdagCZ_ZVxY1xg2CMALRjHTcRqqXKo06-ry_Accr-IP3GJP26ie0CG-bd98=s220",
          "fullUrl": "/api/image/1ACauXQpozK7cBOvfu-zMIecALSzCbHC2",
          "name": "IMG_20250617_190900.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN8CHqg-NnBqrV5X5PjCw_WGZVgg3M1Zj-NUZlo0awwBwBUgdk4INkmdeJEZPuiTiHip_z55coaippQp3sOH7zDBjjb9Z8CPUzHT7I=s220",
          "fullUrl": "/api/image/1ACagyhd1g3edjxeGQZOlPml9ZUxpkYvt",
          "name": "New Project 43 [4C9E502].png"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOwm3He0BvXhqnyFOwxi-pbAg29qs43DpFIDsiCOQmhdzfEFn1gR3EYzi_73ZsjvWUSgI-cRSfjbrzOzXYLsOZXiKAcQTj_1lj9_SE=s220",
          "fullUrl": "/api/image/1GDgWWx6UGUfDM_g0mrJpP_tI66_Fi47I",
          "name": "Untitled118_20250206171053.jpg"
        }
      ]
    },
    {
      "id": "album_1784167639544",
      "name": "Drawing",
      "description": "mấy bức vẽ của tớ, dở ẹc vì tớ đang học vẽ",
      "images": [
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOnFq2FvJlUJWNflsZq7v0Rg0dO9nqk6Ly1iDXZ_dyxA2yJqqS9FAdFu9KTPIuv4e1XL16U2sNfXpXT1Tjk7XHsUlTHng744NGDeT9B=s220",
          "fullUrl": "/api/image/1OhnqWXw6IA0vveQKBNxRecK0tyP4E5mO",
          "name": "New Project 207 [E7484AE].png"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOJHIY4Ia2At17Gl5WjW08q1YDnnznZHPiyB4ZErxK_Hta09x_Hzczor1TVO6eH5DLc0zj2tZ92r0MVd6ZegHbO0bRRv0JhYnq2xqHP=s220",
          "fullUrl": "/api/image/1JWbtIEvvL2p-TYcVSE1dfEHDl-KQtnkj",
          "name": "Untitled115_20260519102644.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBM4R2aGqavLf0Hbj5JeH98Q3W1l0WoXWAiOEwIkWTya1x0MOqo7slZEacIs_TrTbI7Gtj5Hh3CJM8AIAl6v08RhxGVHnTzxBuYce5Q0=s220",
          "fullUrl": "/api/image/1QHAARFWi0VeoaWk7DaedhMu8P1U7qD0u",
          "name": "IMG_20260516_210119.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMjjG6mjQbtBU8qQXQt9-PazPW-zbsfWlg_EE2HmCsFErutYp6CJ_lOEKWV9Iuo0nubRfqH8Un_PoRWHBmsb9IPOKr_DF0ljGEdwFk1=s220",
          "fullUrl": "/api/image/11Ub9BV3qDq5rD9d5fVbfeJP_vLog7sgU",
          "name": "IMG_20260422_162731.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNEhapLN5NxuLaLPiFh8kbVMQYHL-ALeDexri1HAgtsaooFMvSUN3bUBVWLA0XZ4cgB5ESdbBDBCiGA6q3MH7k1OHX5GQsGAb5iN2OB=s220",
          "fullUrl": "/api/image/1J7lCJ7OLJK2sSpw3nuAfhlHiRF_m81fH",
          "name": "Untitled68_0002-46-51_20260302173559.jpg"
        },
        {
          "url": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMc1ft0WWq37arHyKar3FVMuqRh0E6gufTFZnJSLCLL6qwzUMbUCJkppF6iNihKqXQXnpeA1-fAOxsAMm_3_zAZFccUTyPruCsmXGuI=s220",
          "fullUrl": "/api/image/1RIhNtS9Rk1eL2oCyqwBv7mKV_DwVx0O-",
          "name": "Untitled71_0009-26-14_20260307145623.png"
        }
      ]
    }
  ],
  "tracks": [
    {
      "id": "track_1784184164014",
      "name": "魔法の絵日記",
      "artist": "Visual Art / Key",
      "youtubeId": "kUdjS5J4Qv4",
      "coverUrl": "https://img.youtube.com/vi/kUdjS5J4Qv4/hqdefault.jpg",
      "lrc": "{\"lrc_romaji\":\"[00:00.00] ♪\\n[00:12.07] Semi to niwatori no ohayou\\n[00:18.01] Omoide ga hajimaru\\n[00:23.89] Tegaki no mirai nagamete\\n[00:29.80] Tokuige ni waratta\\n[00:35.74] Kore wa mahou no enikki\\n[00:47.64] Tezukuri ehon (otoosan saku)\\n[00:53.56] Damashibune no origami (fushigi doushite)\\n[00:59.52] Ketsarukoatoru (kukee kee kukee)\\n[01:05.39] Issho ni taberu chaahan\\n[01:11.38] Mata ichi peeji (tanoshii)\\n[01:17.21] Natsu wo kasaneteku (ashita mo)\\n[01:23.16] Ashiato mutsu (issho)\\n[01:29.53] ♪\\n[01:59.38] Genkan aketara sugu ni\\n[02:05.36] Koboreru you na egao\\n[02:11.34] Kyou wa nani wo shiou ka\\n[02:20.71] Aoi sora narande tobu\\n[02:26.64] Kamihikoouki mittsu\\n[02:32.54] Minna ichiban datta\\n[02:44.37] Puuru ni outa (minna nakayoku)\\n[02:50.35] Kakurenbo de ohirune (ohiza no ue de)\\n[02:56.26] Takusan asobi (ofuro haitte)\\n[03:02.11] Onaji futon oyasumi\\n[03:08.32] Omoide nokosu (shashin mo)\\n[03:14.32] Natsumatsuri no yoru (hanabi mo)\\n[03:20.29] Sannin zutto (issho)\",\"lrc_jp\":\"[00:00.00] ♪\\n[00:12.07] セミとニワトリのおはよう\\n[00:18.01] 思い出が始まる\\n[00:23.89] 手書きの未来眺めて\\n[00:29.80] 得意げに笑った\\n[00:35.74] これは魔法の絵日記\\n[00:47.64] 手作り絵本（おとーさんさく）\\n[00:53.56] だましぶねのおりがみ（ふしぎどうして）\\n[00:59.52] ケツァルコアトル（くけーけぇーくけー）\\n[01:05.39] ��緒に食べる チャーハン\\n[01:11.38] また１ページ（たのしい）\\n[01:17.21] 夏を重ねてく（あしたも）\\n[01:23.16] あしあと六つ（いっしょ）\\n[01:29.53] ♪\\n[01:59.38] 玄関開けたらすぐに\\n[02:05.36] 零れるような笑顔\\n[02:11.34] 今日は何をしようか\\n[02:20.71] 青い空並んで飛ぶ\\n[02:26.64] 紙飛行機みっつ\\n[02:32.54] みんな一番だった\\n[02:44.37] プールにおうた（みんな仲良く）\\n[02:50.35] かくれんぼでおひるね（お膝の上で）\\n[02:56.26] たくさんあそび（お風呂入って）\\n[03:02.11] おなじふとん おやすみ\\n[03:08.32] 思い出残す（しゃしんも）\\n[03:14.32] 夏祭りの夜（はなびも）\\n[03:20.29] 三人ずっと（いっしょ）\"}"
    },
    {
      "id": "track_1784261119529",
      "name": "midsummer carol",
      "artist": "Visual Art / Key",
      "youtubeId": "Wy08SXQiNkQ",
      "coverUrl": "https://img.youtube.com/vi/Wy08SXQiNkQ/hqdefault.jpg",
      "lrc": "{\"lrc_romaji\":\"[00:00.000] ♪\\n[00:12.608] Mizutamari tobikoetara natsuyasumi wo sagashite\\n[00:22.777] Sagashimono mitsukaranai kedo anata wo mitsuketa\\n[00:32.377] Kotori no uta wo kuchizusande\\n[00:37.522] Wasurerareteru umibe wo aruiteku\\n[00:45.824] Wataame gumo fuwafuwa\\n[00:51.010] Tokete ochite kirakira\\n[00:56.045] Kyou to ashita wo nuttara\\n[01:00.963] Natsuyasumi mitsuketa\\n[01:06.346] ♪\\n[01:16.491] Kin'iro no usuakari wa\\n[01:21.379] Watashi wo mite hoshikute\\n[01:24.717] Koko ni iru kara ne\\n[01:27.289] Wasurenai kara ne\\n[01:29.874] Natsu ga owattemo\\n[01:32.453] Anata to itai yo\\n[01:36.207] Wagamama bakari\\n[01:38.772] Ukande kuru\\n[01:41.381] Yaritai koto ga\\n[01:43.923] Watashi wa osugite\\n[01:49.727] Rousoku no hi ga yurayura\\n[01:54.804] Ribbon yurete hirahira\\n[01:59.874] Natsuyasumi ga hodokete\\n[02:04.784] Sagashimono mitsuketa\\n[02:09.175] Kimi to sugoshita yume no you na kono natsu\\n[02:14.530] Nando mo omoidashi gyutto dakishime\\n[02:19.606] Uta wo utau\\n[02:29.808] Futari ima wa\\n[02:34.943] Yume no hanashi\\n[02:44.551] Natsuyasumi wa pikapika\\n[02:49.657] Kimi no tonari howahowa\\n[02:54.679] Tsunaida te wa sono mama\\n[02:59.667] Nakanaide waratte\\n[03:04.328] Natsu wa owari\\n[03:14.510] Natsu wa meguru\",\"lrc_jp\":\"[00:00.000] ♪\\n[00:12.608] 水溜まり跳び越えたら 夏休みを探して\\n[00:22.777] 探し物見つからないけど あなたを見つけた\\n[00:32.377] 小鳥の歌を口ずさんde\\n[00:37.522] 忘れられてる海辺を歩いてく\\n[00:45.824] わたあめ雲 ふわふわ\\n[00:51.010] 溶けて落ちて キラキラ\\n[00:56.045] 今日と明日を縫ったら\\n[01:00.963] 夏休み見つけた\\n[01:06.346] ♪\\n[01:16.491] 金色の薄明りは\\n[01:21.379] 私を見てほしくて\\n[01:24.717] ここにいるからね\\n[01:27.289] 忘れないからね\\n[01:29.874] 夏が終わっても\\n[01:32.453] あなたといたいよ\\n[01:36.207] わがままばかり\\n[01:38.772] 浮かんでくる\\n[01:41.381] やりたいことが\\n[01:43.923] 私は多すぎて\\n[01:49.727] ろうそくの火が ゆらゆら\\n[01:54.804] リボン揺れて ヒラヒラ\\n[01:59.874] 夏休みがほどけて\\n[02:04.784] 探し物見つけた\\n[02:09.175] キミと過ごした夢のようなこの夏\\n[02:14.530] 何度 mo 思い出しぎゅっと抱きしめ\\n[02:19.606] 歌を歌う\\n[02:29.808] 二人今は\\n[02:34.943] 夢のはなし\\n[02:44.551] 夏休みは ぴかぴか\\n[02:49.657] キミの隣 ほわほわ\\n[02:54.679] 繋いだ手はそのまま\\n[02:59.667] 泣かないで笑って\\n[03:04.328] 夏は終わり\\n[03:14.510] 夏は巡る\"}"
    },
    {
      "id": "track_1784269167218",
      "name": "紬の夏休み",
      "artist": "VISUAL ARTS / Key",
      "youtubeId": "spE1MQM4hw8",
      "coverUrl": "https://img.youtube.com/vi/spE1MQM4hw8/hqdefault.jpg",
      "lrc": ""
    },
    {
      "id": "track_1784269236937",
      "name": "しろはの子守歌",
      "artist": "VISUAL ARTS / Key",
      "youtubeId": "VSNWGlEGnx0",
      "coverUrl": "https://img.youtube.com/vi/VSNWGlEGnx0/hqdefault.jpg",
      "lrc": ""
    },
    {
      "id": "track_1786511965380",
      "name": "Unmei no Kimi",
      "artist": "Mega Shinnosuke",
      "youtubeId": "LjuJgrdh5eY",
      "coverUrl": "https://img.youtube.com/vi/LjuJgrdh5eY/hqdefault.jpg",
      "lrc": "{\"lrc_romaji\":\"[00:00.000] ♪\\n[00:09.330] Junjou na kimi ni airabyuu\\n[00:13.860] Dare ni mo barezu ni uta wo okurimasu\\n[00:18.280] Sainou wa nai ga shingu for you (yeah)\\n[00:23.000] Kimi no tame no uta\\n[00:27.420] Kananana wo tobase baiku byunbyun\\n[00:31.850] Taikutsu na nayami wa rokkaa ni oitekita\\n[00:36.530] Seishounen pankurokkunrooru (yeah)\\n[00:40.910] Mou nido to modorenai shunkan\\n[00:45.090] Ienai himitsu mo (woah, woah, woah, woah)\\n[00:49.730] Baka na igoji mo (woah, woah, woah, woah)\\n[00:54.300] Gitaa no ana wo nozoitara sunao ni nareta\\n[01:03.260] Koi no merodi wo merodi wo tenshi-sama ni sasagu\\n[01:12.500] Boku no unmei no unmei no kimi ni tsutawaru hazu\\n[01:31.600] Gunjou na kimi ni aiwantyuu\\n[01:36.080] Messe-eji torikeshi kan juusu nomihosu\\n[01:40.480] Kiraware takunai wo meisouchuu\\n[01:42.900] Gomakashitai hodo ni koishiteru\\n[01:45.270] Itsuka aenaku naru?\\n[01:49.090] Kimi wo omou hodo (woah, woah, woah, woah)\\n[01:53.550] Kurushiku naru no wa (woah, woah, woah, woah)\\n[01:58.100] Kore ga hontou no kimochi dakara\\n[02:03.190] Ah-ah, ah-ah kimi wo dakishimetai noni\\n[02:12.710] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:17.040] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:21.610] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:26.200] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:30.890] Sen nen saki no raise no saki mo\\n[02:35.030] Kimi ni nando mo koi wo suru\\n[02:39.630] Furimuite yo shinjau yo lonely days\\n[02:46.230] Nando mo\\n[02:48.710] Koi no merodi wo merodi wo tenshi-sama ni sasagu\\n[02:57.460] Kimi ga warau tabi warau tabi boku wa ikite ikeru\\n[03:06.530] Uso wa tsukanai yo tsukenai yo kimi ni eien chikau\\n[03:15.530] Boku no unmei no unmei no kimi ni chikaimasu\\n[03:25.550] Zutto omoimasu kimi ni tsutawaru hazu\",\"lrc_jp\":\"[00:00.000] ♪\\n[00:09.330] 純情な君にあいらびゅ\\n[00:13.860] 誰にもバレずに歌を贈ります\\n[00:18.280] 才能は無いがシングフォーユー (yeah)\\n[00:23.000] 君のための歌\\n[00:27.420] 環七を飛ばせ自転車(バイク)びゅんびゅん\\n[00:31.850] 退屈な悩みはロッカーに置いてきた\\n[00:36.530] 青少年パンクロックンロール (yeah)\\n[00:40.910] もう二度と戻れない瞬間\\n[00:45.090] 言えない秘密も (woah, woah, woah, woah)\\n[00:49.730] バカな意固地も (woah, woah, woah, woah)\\n[00:54.300] ギターの穴を覗いたら素直になれた\\n[01:03.260] 恋のメロディをメロディを天使様に捧ぐ\\n[01:12.500] 僕の運命の運命の君に伝わるはず\\n[01:31.600] 群青な君にあいうぉんちゅ\\n[01:36.080] メッセージ取り消し缶ジュース飲み干す\\n[01:40.480] 嫌われたくないを迷走中\\n[01:42.900] 誤魔化したいほどに恋してる\\n[01:45.270] いつか会えなくなる?\\n[01:49.090] 君を想うほど (woah, woah, woah, woah)\\n[01:53.550] 苦しくなるのは (woah, woah, woah, woah)\\n[01:58.100] これが本当の気持ちだから\\n[02:03.190] Ah-ah, ah-ah 君を抱きしめたいのに\\n[02:12.710] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:17.040] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:21.610] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:26.200] (Woah, woah, woah, woah, woah, woah, woah, woah)\\n[02:30.890] 1000年先の来世の先も\\n[02:35.030] 君に何度も恋をする\\n[02:39.630] 振り向いてよ 死んじゃうよ lonely days\\n[02:46.230] 何度も\\n[02:48.710] 恋のメロディをメロディを天使様に捧ぐ\\n[02:57.460] 君が笑うたび 笑うたび 僕は生きていける\\n[03:06.530] 嘘はつかないよ つけないよ 君に永遠誓う\\n[03:15.530] 僕の運命の運命の君に誓います\\n[03:25.550] ずっと想います 君に伝わるはず\"}"
    },
    {
      "id": "track_1786512684318",
      "name": "星の鼓動",
      "artist": "Kohana Lam",
      "youtubeId": "nXg8zwX9A9E",
      "coverUrl": "https://img.youtube.com/vi/nXg8zwX9A9E/hqdefault.jpg",
      "lrc": "{\"lrc_romaji\":\"[00:00.000] ♪\\n[00:16.29] Watashi wa mada shiranai de iru\\n[00:20.28] Kono jinsei no ikikata hitotsu\\n[00:24.24] Anata wa tada nagameru dake\\n[00:28.24] Hoshi no yukue wo kako no kanata de\\n[00:32.38] Kyou no sekai ga donna ni\\n[00:36.12] Tsumetai mama de fukarete itemo\\n[00:40.11] Anata no nukui migite ga nadete kuretan da\\n[00:46.08] Ukabu nichijou\\n[00:48.78] Kakenuketa tsuugakuro\\n[00:52.24] Wasurerarenai omoi\\n[00:56.18] Ai ga nanika mo shiranai mama\\n[00:59.07] Mitoreteru Hoshi wa tada kirei deshita\\n[01:04.16] Watashi wo ikiru koto wa hazukashii koto ja nai\\n[01:09.08] Sono kotae ga ureshikute\\n[01:12.06] Kyou ga namida ni somari tsuki ga nijimu nara\\n[01:17.06] Uzai kurai dakishimete\\n[01:19.99] Yoru wo irodoru watashi no kokoro wa ima mo\\n[01:25.00] Ienai mama no aishite iru yo\\n[01:29.09] ♪\\n[01:36.36] Kotoba ga sabishii mama ja\\n[01:39.60] Watashi wa kyou mo nemurenai kara\\n[01:43.59] Anata no koe michibiite kureru\\n[01:47.58] Hoshi no yukue wo ashita no mukou de\\n[01:52.24] Watashi dake ga shitte iru\\n[01:55.75] Yasashisa ga hibiite\\n[01:59.66] Zutto sunao ni narenai mama\\n[02:03.17] Koboreru no Kono kokoro wa honto da yo\\n[02:07.64] Anata no kotoba ga watashi no namida wo fuite\\n[02:12.60] Mieta yoru wa toumei de\\n[02:15.56] Kyou mo tonari de furerarenai mama dakedo\\n[02:20.53] Uzai kurai aishiteru\\n[02:23.48] Itsuka kono ibasho ga takaramono ni natte\\n[02:28.47] Anata ga warau Daisuki da yo\\n[02:31.95] Yasashiku tokedasu kanjou wa\\n[02:35.88] Anata ga kureta no tomoshibi wo\\n[02:39.37] Nee zenbu zenbu zenbu zenbu zenbu dakishimeta mama da yo\\n[02:44.35] Kono shunkan wo wasuretaku wa nai\\n[02:48.50] ♪\\n[03:11.08] Ai ga nanika mo shiranai mama\\n[03:14.59] Mitoreteru Hoshi wa tada kirei deshita\\n[03:19.04] Watashi wo ikiru koto wa hazukashii koto ja nai\\n[03:23.96] Sono kotae ga ureshikute\\n[03:26.94] Kyou ga namida ni somari tsuki ga nijimu nara\\n[03:31.93] Uzai kurai dakishimete\\n[03:34.91] Yoru wo irodoru watashi no kokoro wa ima mo\\n[03:39.88] Ienai mama no aishite iru yo\\n[03:43.98] ♪\",\"lrc_jp\":\"[00:00.000] ♪\\n[00:16.29] 私はまだ知らないでいる\\n[00:20.28] この人生の生き方ひとつ\\n[00:24.24] あなたはただ眺めるだけ\\n[00:28.24] 星の行方を 過去の彼方で\\n[00:32.38] 今日の世界がどんなに\\n[00:36.12] 冷たいままで 吹かれていても\\n[00:40.11] あなたの温い右手が撫でてくれたんだ\\n[00:46.08] 浮かぶ日常\\n[00:48.78] 駆け抜けた通学路\\n[00:52.24] 忘れられない想い\\n[00:56.18] 愛が何かも知らないま���\\n[00:59.07] 見蕩れてる 星はただ綺麗でした\\n[01:04.16] 私を生きることは恥ずかしいことじゃない\\n[01:09.08] その答えが嬉しくて\\n[01:12.06] 今日が涙に染まり月が滲むなら\\n[01:17.06] ウザいくらい抱きしめて\\n[01:19.99] 夜を彩る私のこころは今も\\n[01:25.00] 言えないままの 愛しているよ\\n[01:29.09] ♪\\n[01:36.36] 言葉が寂しいままじゃ\\n[01:39.60] 私は今日も眠れないから\\n[01:43.59] あなたの声 導いてくれる\\n[01:47.58] 星の行方を明日の向こうで\\n[01:52.24] 私だけが知っている\\n[01:55.75] 優しさが響いて\\n[01:59.66] ずっと素直になれないまま\\n[02:03.17] 零れるの この心はホントだよ\\n[02:07.64] あなたの言葉が私の涙を拭いて\\n[02:12.60] 見えた夜は透明で\\n[02:15.56] ♪\\n[02:15.56] 今日も隣で触れられないままだけど\\n[02:20.53] ウザいくらい愛してる\\n[02:23.48] いつかこの居場所が宝物になって\\n[02:28.47] あなたが笑う 大好きだよ\\n[02:31.95] 優しく溶けだす感情は\\n[02:35.88] あなたがくれたの灯火を\\n[02:39.37] ねぇ全部全部全部全部全部抱きしめたままだよ\\n[02:44.35] この瞬間を 忘れたくはない\\n[02:48.50] ♪\\n[03:11.08] 愛が何かも知らないま���\\n[03:14.59] 見蕩れてる 星はただ綺麗でした\\n[03:19.04] 私を生きることは恥ずかしいことじゃない\\n[03:23.96] その答えが嬉しくて\\n[03:26.94] 今日が涙に染まり月が滲むなら\\n[03:31.93] ウザいくらい抱きしめて\\n[03:34.91] 夜を彩る私のこころは今も\\n[03:39.88] 言えないままの 愛しているよ\\n[03:43.98] ♪\"}"
    },
    {
      "id": "track_1786513952903",
      "name": "far away song",
      "artist": "VISUAL ARTS / Key",
      "youtubeId": "I_issMHmC7s",
      "coverUrl": "https://img.youtube.com/vi/I_issMHmC7s/hqdefault.jpg",
      "lrc": ""
    },
    {
      "id": "track_1788156924047",
      "name": "Ortus",
      "artist": "Visual Art / Key",
      "youtubeId": "mhGquw9xCIY",
      "coverUrl": "https://img.youtube.com/vi/mhGquw9xCIY/hqdefault.jpg",
      "lrc": ""
    },
    {
      "id": "track_1789271390137",
      "name": "【青春ソングカバー】青と夏 / covered by TVアニメ『千歳くんはラムネ瓶のなか』",
      "artist": "KADOKAWAanime",
      "youtubeId": "It75QWud-fM",
      "coverUrl": "https://img.youtube.com/vi/It75QWud-fM/hqdefault.jpg",
      "lrc": "{\"lrc_romaji\":\"[00:00.00] ♪\\n[00:22.33] Suzushii kaze fuku\\n[00:25.05] Aozora no nioi\\n[00:27.60] Kyou wa daratto sugoshite miyou ka\\n[00:32.71] Fuurin ga chirin\\n[00:35.51] Himawari no kiiro\\n[00:38.16] Watashi ni wa kankei nai to\\n[00:42.59] Omotte ita nda\\n[00:46.18] Natsu ga hajimatta\\n[00:48.81] Aizu ga shita\\n[00:51.42] ��Kizutsuki tsukareru」 kedomo iinda\\n[00:56.56] Tsugi no koi no yukue wa doko da\\n[01:01.42] Eiga janai\\n[01:03.91] Shuyaku wa dare da\\n[01:06.66] Eiga janai\\n[01:09.25] Bokura no ban da\\n[01:11.98] ♪\\n[01:22.79] Yasashii kaze fuku\\n[01:25.34] Yuuyake no 「mata ne」\\n[01:28.02] Wakatte iru kedo itsuka owaru\\n[01:33.09] Fuurin ga chirin\\n[01:35.65] Suika no tane tobashi\\n[01:38.42] Watashi ni mo kankei aru kamo ne\\n[01:42.95] Tomodachi no uso mo\\n[01:45.88] Korogasareru ai mo\\n[01:48.50] Nani kara shinjite ii n deshou ne\\n[01:53.72] Otona ni natte mo kitto\\n[01:56.28] Takaramono wa asenai yo\\n[01:58.85] Daijoubu dakara\\n[02:01.46] Ima wa sa\\n[02:03.83] Ao ni tobikonde iyō\\n[02:07.92] Natsu ga hajimatta\\n[02:10.54] Koi ni ochita\\n[02:12.97] Mou machi tsukareta n da kedo, dou desu ka??\\n[02:18.23] Honki ni nareba naru hodo tsurai\\n[02:23.18] Heiwa janai\\n[02:25.76] Watashi no koi da\\n[02:31.18] Watashi no koi da\\n[02:37.97] Sabishii na\\n[02:39.98] Yappa sabishii na\\n[02:42.99] Itsuka wasurerarete shimau n darou ka\\n[02:48.36] Soredemo ne\\n[02:50.25] 「Tsunagari」 motomeru\\n[02:53.46] Hito no subarashisa wo shinjiteru\\n[02:58.87] Unmei ga tsukiugokasarete yuku\\n[03:03.92] Akai ito ga oto wo tateru\\n[03:08.67] Shuyaku wa anata da\\n[03:11.41] Natsu ga hajimatta\\n[03:14.00] Kimi wa dou da\\n[03:16.61] Sunao ni nareru yuuki wa aru ka\\n[03:22.18] Kono koi no yukue wa doko da\\n[03:26.78] Eiga janai\\n[03:29.39] Itoshii hibi da\\n[03:32.25] Koi ga hajimatta\\n[03:34.85] Aizu ga shita\\n[03:37.36] Kyou wo machiwabita nante ii hi da\\n[03:42.50] Mada mada owarenai kono natsu wa\\n[03:47.48] Eiga janai\\n[03:50.06] Kimira no ban da\\n[03:52.66] Eiga janai\\n[03:55.22] Bokura no ao da\\n[03:57.90] Eiga janai\\n[04:00.47] Bokura no natsu da\",\"lrc_jp\":\"[00:00.00] ♪\\n[00:22.33] 涼しい風吹く\\n[00:25.05] 青空の匂い\\n[00:27.60] 今日はダラッと過ごしてみようか\\n[00:32.71] 風鈴がチリン\\n[00:35.51] ひまわりの黄色\\n[00:38.16] 私には関係ないと\\n[00:42.59] 思って居たんだ\\n[00:46.18] 夏が始まった\\n[00:48.81] 合図がした\\n[00:51.42] 「傷つき疲れる」けどもいいんだ\\n[00:56.56] 次の恋の行方はどこだ\\n[01:01.42] 映画じゃない\\n[01:03.90] 主役は誰だ\\n[01:06.66] 映画じゃない\\n[01:09.25] 僕らの番だ\\n[01:11.98] ♪\\n[01:22.78] 優しい風吹く\\n[01:25.34] 夕焼けの「またね」\\n[01:28.02] わかっているけどいつか終わる\\n[01:33.09] 風鈴がチリン\\n[01:35.65] スイカの種飛ばし\\n[01:38.42] 私にも関係あるかもね\\n[01:42.95] 友達の嘘も\\n[01:45.88] 転がされる愛も\\n[01:48.50] 何から信じていいんでしょうね\\n[01:53.72] 大人になってもきっと\\n[01:56.28] 宝物は褪せないよ\\n[01:58.85] 大丈夫だから\\n[02:01.46] 今はさ\\n[02:03.82] 青に飛び込んで居よう\\n[02:07.92] 夏が始まった\\n[02:10.54] 恋に落ちた\\n[02:12.97] もう待ち疲れたんだけど、 どうですか??\\n[02:18.23] 本気になればなるほど辛い\\n[02:23.18] 平和じゃない\\n[02:25.76] 私の恋だ\\n[02:31.18] 私の恋だ\\n[02:37.97] 寂しいな\\n[02:39.98] やっぱ寂しいな\\n[02:42.99] いつか忘れられてしまうんだろうか\\n[02:48.36] それでもね\\n[02:50.24] 「繋がり」求める\\n[02:53.46] 人の素晴らしさ��信じてる\\n[02:58.87] 運命が突き動かされてゆく\\n[03:03.92] 赤い糸が音を立てる\\n[03:08.67] 主役は貴方だ\\n[03:11.41] 夏が始まった\\n[03:14.00] 君はどうだ\\n[03:16.61] 素直になれる勇気はあるか\\n[03:22.18] この恋の行方はどこだ\\n[03:26.78] 映画じゃない\\n[03:29.39] 愛しい日々だ\\n[03:32.25] 恋が始まった\\n[03:34.85] 合図がした\\n[03:37.36] 今日を待ちわびた なんて良い日だ\\n[03:42.50] まだまだ終われないこの夏は\\n[03:47.48] 映画じゃない\\n[03:50.06] 君らの番だ\\n[03:52.66] 映画じゃない\\n[03:55.22] 僕らの青だ\\n[03:57.90] 映画じゃない\\n[04:00.47] 僕らの夏だ\"}"
    }
  ],
  "gameItems": [
    {
      "id": "game_1786677163863_9",
      "column": 0,
      "name": "Wuthering Waves",
      "username": "Kinne~Nya",
      "uid": "900577083",
      "link": "",
      "icon_key": "Game/f9c03d77-1386-4123-be49-325fa25e0cae-mssdb5zy-xzg0nqoa.png",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1786677941997_535",
      "column": 0,
      "name": "Arknights",
      "username": "kienmanhluu",
      "uid": "33312645",
      "link": "",
      "icon_key": "Game/67acd175-4dd7-4709-9bdd-2e93dc7cadef-mssdjlzy-7gs2l3sj.png",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787477188956_359",
      "column": 0,
      "name": "Strinova",
      "username": "キンネ",
      "uid": "3159454",
      "link": "",
      "icon_key": "Game/fc0a6fd6-30d2-482d-a147-d09d3b81b1ed-mt5lqj4p-eko5f9el.webp",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787535114520_826",
      "column": 0,
      "name": "Roblox",
      "username": "kienmanhluu",
      "uid": "510517808",
      "link": "",
      "icon_key": "Game/24bfff7e-5778-416f-90f6-d9f36a221639-mt6k7fn1-0vn7gt9v.webp",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787535278445_686",
      "column": 0,
      "name": "Genshin Impact",
      "username": "Kinne~Nya",
      "uid": "886166761",
      "link": "",
      "icon_key": "Game/9e96199b-7f8a-4eb3-bd62-fdcf4986ad77-mt6k6rsm-joxv1af6.webp",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787535348338_459",
      "column": 0,
      "name": "Honkai: Star Rail",
      "username": "kinne~nya",
      "uid": "833825187",
      "link": "",
      "icon_key": "Game/0634fed5-d549-4af8-b7e6-25d19278f57b-mt6k7856-fb3ec57e.webp",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787535521990_17",
      "column": 0,
      "name": "Arknight EndField",
      "username": "kienmanhluu",
      "uid": "4294596844",
      "link": "",
      "icon_key": "Game/cab06d7d-923f-47e3-9a7c-2d595b911759-mt6kfmzv-b42xp5rh.webp",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787793709598_885",
      "column": 0,
      "name": "Umamusume: Pretty Derby",
      "username": "kinne_luu",
      "uid": "",
      "link": "",
      "icon_key": "Game/da231a63-40de-475a-9775-8808e4e5c79e-mtau6beg-z55cbbzf.webp",
      "cover_key": "",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787478827626_441",
      "column": 1,
      "name": "Nier: Automata",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/524220/NieRAutomata/",
      "icon_key": "Game/56e5d8a5-ef81-4bef-9750-4375a1f1dd28-mt5mneat-q828ka4w.webp",
      "cover_key": "Game/e52fe2ee-6992-4d52-bcd8-03b7ea334f17-mt5mq4qy-38xa3g8o.webp",
      "description": "Con game về humanoid của nhà Square Enix, để lại cực kì nhiều cảm xúc cho mình",
      "sort_order": 0,
      "description_vi": "Con game về humanoid của nhà Square Enix, để lại cực kì nhiều cảm xúc cho mình",
      "description_en": "A Square Enix game about humanoids that left such a deep, lasting emotional mark on me.",
      "description_jp": "スクエニのヒューマノイドを題材にした作品。本当にたくさんの感情を揺さぶられて、心に残ってるんだよね。"
    },
    {
      "id": "game_1787478603458_124",
      "column": 1,
      "name": "Pragmata",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/3357650/PRAGMATA/",
      "icon_key": "Game/e99e3d52-efe5-4cb2-b042-25eb978cb545-mt5mk0as-z2bv896p.webp",
      "cover_key": "Game/648feaee-22ae-4d97-a8b8-a758f53c6996-mt5mqzvc-w3nxiaog.webp",
      "description": "Game này là game giả lập làm cha chứ gì nữa =))))))",
      "sort_order": 0,
      "description_vi": "Game này là game giả lập làm cha chứ gì nữa =))))))",
      "description_en": "it's basically just a fatherhood simulator lmao",
      "description_jp": "実質もう「父親シミュレーター」以外の何物でもないでしょ www"
    },
    {
      "id": "game_1787479053615_440",
      "column": 1,
      "name": "Machine Party",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/4108000/Machine_Party/",
      "icon_key": "Game/586771ef-7ac0-4273-ba54-c9631a7c510d-mt5mv476-6qpbqncv.webp",
      "cover_key": "Game/4bef19c2-5d8b-4323-abc5-8f7f7526f1a5-mt5mv977-j1xlhb20.webp",
      "description": "Bựa thì vl, chơi con game này khéo mất tình bạn bè mất",
      "sort_order": 0,
      "description_vi": "Bựa thì vl, chơi con game này khéo mất tình bạn bè mất",
      "description_en": "Shit's beyond cursed, this game is an absolute friendship ruiner lol",
      "description_jp": "マジでカオスすぎてヤバい。遊んでたら普通に友情壊れる説ある笑"
    },
    {
      "id": "game_1787479195027_344",
      "column": 1,
      "name": "Subnautica",
      "username": "",
      "uid": "",
      "link": "",
      "icon_key": "Game/a95d3066-6792-475b-8b9c-6abbad124047-mt5mx7vk-fk42qpy2.webp",
      "cover_key": "Game/4b0127cf-6118-457f-89ef-ab51df5c38e0-mt5mxfd6-i3omn72q.webp",
      "description": "Con game khám phá đại dương có tiếng tăm",
      "sort_order": 0,
      "description_vi": "Con game khám phá đại dương có tiếng tăm",
      "description_en": "A well-known ocean exploration game.",
      "description_jp": "有名な海洋探索ゲーム。"
    },
    {
      "id": "game_1787479408237_47",
      "column": 1,
      "name": "Little Nightmare II",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/860510/Little_Nightmares_II/",
      "icon_key": "Game/efad02fc-d455-4490-834d-c21b1e7634aa-mt5n17nt-4hcawfad.webp",
      "cover_key": "Game/fcb9ed46-eca0-4445-8b02-6a8a08f85684-mt5n1pn1-pj5inzrx.webp",
      "description": "Còn gì tuyệt hơn là chơi game này với bạn bè chứ",
      "sort_order": 0,
      "description_vi": "Còn gì tuyệt hơn là chơi game này với bạn bè chứ",
      "description_en": "What could honestly be better than playing this with friends?",
      "description_jp": "友達とこのゲームやる以上に最高なことなんてないでしょ！"
    },
    {
      "id": "game_1787479516191_267",
      "column": 1,
      "name": "MiSide",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2527500/MiSide/",
      "icon_key": "Game/f5d9f159-7416-41bb-8354-7ddad642ac8b-mt5n545l-iyzwg1kt.webp",
      "cover_key": "Game/b3dec12d-6b83-42e4-a0f9-a233bb15cf51-mt5n4uc1-kaa3750z.webp",
      "description": "G��i alime Yandere của mấy anh Nga ngố",
      "sort_order": 0,
      "description_vi": "Gái alime Yandere của mấy anh Nga ngố",
      "description_en": "A Russian indie game's take on an anime yandere girl lol",
      "description_jp": "ロシア産インディーのアニメ風ヤンデレ美少女笑"
    },
    {
      "id": "game_1787534287703_976",
      "column": 1,
      "name": "Ender Lilies: Quietus of the Knights",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/1369630/ENDER_LILIES_Quietus_of_the_Knights/",
      "icon_key": "Game/88358dcc-d2cc-40f4-b195-4c40d7393eae-mt6jqszl-4e3leq2z.webp",
      "cover_key": "Game/92341927-4ce3-4d04-8e0a-9b200ad879b9-mt6jrcau-8fwgmcy3.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787534038840_270",
      "column": 1,
      "name": "Lies of P",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/1627720/Lies_of_P/",
      "icon_key": "Game/3efb5184-89d2-4b14-a2ee-729c72befef3-mt6jkilq-zu3afxfv.webp",
      "cover_key": "Game/c4d42f77-752c-4d52-bfde-3deda7c40de4-mt6jjnij-fxxn2p17.webp",
      "description": "là con game SoulsLike đầu tiên tớ chơi,ấn tượng về đồ hoạ và âm thanh khá tốt",
      "sort_order": 0,
      "description_vi": "là con game SoulsLike đầu tiên tớ chơi,ấn tượng về đồ hoạ và âm thanh khá tốt",
      "description_en": "My very first Soulslike game. The visuals and sound design left a really solid impression on me.",
      "description_jp": "初めてプレイしたソウルライク作品。グラフィックも音響もすごく良くて、かなり印象に残ってるんだよね。"
    },
    {
      "id": "game_1787534114469_437",
      "column": 1,
      "name": "Lies of P: Overture",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2848330/Lies_of_P_Overture/",
      "icon_key": "Game/25072ab5-7197-40a3-b846-0acf3b9fa6a0-mt6jkilq-zu3afxfv.webp",
      "cover_key": "Game/2b02f51a-2d61-42d3-aab8-f13fa00a651d-mt6jktap-3kcxg93y.webp",
      "description": "phần 2 của LOP, tớ cũng không có gì bàn luận lắm",
      "sort_order": 0,
      "description_vi": "phần 2 của LOP, tớ cũng không có gì bàn luận lắm",
      "description_en": "Lies of P sequel; not much to add on this one.",
      "description_jp": "LoPの2作目。特にこれと言って語ることはないかも笑"
    },
    {
      "id": "game_1787534742379_243",
      "column": 1,
      "name": "The Forest",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/242760/",
      "icon_key": "Game/21107eae-fac2-430b-bfd2-498d3168191a-mt6k0cj7-597ar1ql.webp",
      "cover_key": "Game/a4028fce-a8f7-4d46-a508-18336439336d-mt6k0q3g-5mgzwkq1.webp",
      "description": "Con game sinh tồn để lại rất nhiều kỉ niệm với mình,hồi bé chưa có máy, tớ còn định tải trên điện thoại,hoài niệm lắm xD",
      "sort_order": 0,
      "description_vi": "Con game sinh tồn để lại rất nhiều kỉ niệm với mình,hồi bé chưa có máy, tớ còn định tải trên điện thoại,hoài niệm lắm xD",
      "description_en": "This survival game brought back a flood of memories. Back in the day without a PC, I even thought about playing it on mobile. Good old times xD",
      "description_jp": "思い出深いサバイバルゲー。昔PCがなかった頃、スマホで入れようとしてたくらい好きだったな。エモい www"
    },
    {
      "id": "game_1787534487041_402",
      "column": 1,
      "name": "Shift At Midnight",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/3722330/Shift_At_Midnight/",
      "icon_key": "Game/e419af83-4d17-4bf8-8c20-b5be1706baa8-mt6jxha6-crjoewk8.webp",
      "cover_key": "Game/e33bb5ee-2620-471e-9091-7467edaca808-mt6jv61q-mcs90701.webp",
      "description": "Game tấu hề với đám bạn là chính,game là phụ",
      "sort_order": 0,
      "description_vi": "Game tấu hề với đám bạn là chính,game là phụ",
      "description_en": "Goofing off with the squad first, gameplay second",
      "description_jp": "ダベりながらワチャワチャするのが本編。ゲームはおまけ"
    },
    {
      "id": "game_1787791951066_913",
      "column": 1,
      "name": "Minecraft",
      "username": "",
      "uid": "",
      "link": "https://www.minecraft.net/en-us",
      "icon_key": "Game/c9ccbd3a-f8c4-4b84-b816-3df11dc156b8-mtat4lmp-pb2n0gdj.webp",
      "cover_key": "Game/a7ffcab3-8905-4326-bdcc-37ab5ff86bb0-mtat59qy-rs4fkgrm.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787792122482_68",
      "column": 1,
      "name": "Funnel Runners",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/3712080/Funnel_Runners/",
      "icon_key": "Game/4302618c-dac2-4eba-a049-c73530c9c2ac-mtat9gga-yjegjb7a.webp",
      "cover_key": "Game/4f9c9e32-9e44-4552-861f-6ea09258f6bd-mtat9liu-8faq37ke.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787792225325_321",
      "column": 1,
      "name": "Muse Dash",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/774171/Muse_Dash/",
      "icon_key": "Game/5482f4a9-e365-450d-9660-eb3b22aba7da-mtatbelv-os12dkxm.webp",
      "cover_key": "Game/9caa9338-71d6-4c7e-bf0e-12430227ea0d-mtatbs8o-3ckrwp4k.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787792449842_757",
      "column": 1,
      "name": "How to Fish",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/4001890/How_to_Fish/",
      "icon_key": "Game/83da2bcb-b773-4ccb-a03f-59d97ab42988-mtatghw8-2w7myhzt.webp",
      "cover_key": "Game/00e84518-83d9-4062-ae29-320906151c70-mtateczo-yjqpozc5.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787792594610_470",
      "column": 1,
      "name": "Reanimal",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2129530/REANIMAL/",
      "icon_key": "Game/a6e2a354-c89c-4aea-9428-082b018e8fd4-mtatir2k-rb9pdndd.webp",
      "cover_key": "Game/0d827e4e-3638-41f3-ac5d-4a35346a1183-mtatj8zg-br8pz2m4.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787792700227_332",
      "column": 1,
      "name": "Raft",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/648800/Raft/",
      "icon_key": "Game/daa98c80-492c-41c3-a64e-64ee267b2b90-mtatkja9-3dsxlx0v.webp",
      "cover_key": "Game/a0e25eca-8b07-4ded-b0dc-475bd73aedb1-mtatlr9s-755wdut3.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787792844199_778",
      "column": 1,
      "name": "The Last of Us™ Part I",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/",
      "icon_key": "Game/f21e7524-2023-4579-8960-5d39135f85b4-mtatpyzb-wu25nxlr.webp",
      "cover_key": "Game/3467a46e-d393-41d8-a28f-7acc3c42b5fb-mtatp3ko-8w1vpb6n.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787793068439_111",
      "column": 1,
      "name": "Silent Hill f",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2947440/SILENT_HILL_f/",
      "icon_key": "Game/00952ef6-5516-4f11-8168-4f4ea06023b9-mtattgvq-sgs5wtib.webp",
      "cover_key": "Game/57fe5cea-740b-423c-9f29-b7fcf6e1ce28-mtatt3id-desjxdqp.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787793285045_54",
      "column": 1,
      "name": "World War Z",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/699130/World_War_Z/",
      "icon_key": "Game/437744c1-54d5-479b-9962-5b8e2d9db393-mtatx6hy-qcobfcbb.webp",
      "cover_key": "Game/9554e376-6b52-4361-8f34-8ba0432772a7-mtaty4po-ekk5p88y.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787793310232_926",
      "column": 1,
      "name": "Left 4 Dead 2",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/550/Left_4_Dead_2/",
      "icon_key": "Game/c64af998-d9fb-4ff4-91e5-1cb51157d909-mtatwczf-fcne1zag.webp",
      "cover_key": "Game/5f1684ee-f654-44a9-8aae-5070a0599f61-mtatw347-6ia4zkm9.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787793402287_862",
      "column": 1,
      "name": "Dying Light",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/239140/Dying_Light/",
      "icon_key": "Game/ac69e509-db66-4dd1-8a60-a4568f4539a9-mtau0ngi-a4s49ixi.webp",
      "cover_key": "Game/70318870-e70c-4c79-8d08-366e60c7eb47-mtau0bht-nwvaqyzx.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787793451349_582",
      "column": 1,
      "name": "Dying Light: The Beast",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/3008130/Dying_Light_The_Beast/",
      "icon_key": "Game/c60c8f56-e295-425c-bd98-ac5a13b3f5d9-mtau1oe0-kuxgvh5s.webp",
      "cover_key": "Game/27717a57-70de-4325-8635-7d66df922f3f-mtau1he4-wfqbpcxv.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787374710428_460",
      "column": 2,
      "name": "Atri: My Dear Moments",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/1230140/",
      "icon_key": "Game/0999f0b9-f185-47c0-a210-4636bb587a25-mt3wnpoh-1br1w79a.webp",
      "cover_key": "Game/be740f93-6b30-4377-8da6-f48253d3a39b-mt3wohwg-2jo21dgs.webp",
      "description": "Đây là con game VN đầu tiên tớ chơi, và cũng là con game khiến tớ có sở thích lớn với các VN có nội dung liên quan tới humanoid. Bị con game này thu hút qua bìa game và sale phát múc luôn, xứng đáng từng xu <3",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787374877810_370",
      "column": 2,
      "name": "planetarian HD",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/623080/",
      "icon_key": "Game/cae8c502-467c-4f3f-87ae-4511ab8a05cc-mt3wu9or-tyiisg45.webp",
      "cover_key": "Game/215c4094-0fb4-4927-88b1-dce54a6ad78b-mt3wug9d-qpb3muex.webp",
      "description": "VN kinetic cũng của nhà Key, tớ xem anime trước ròi mới chơi nên cảm xúc của anime có lẽ nhiều hơn ( vì lúc chơi con game kinetic này cũng biết hết diễn biến rùi )",
      "sort_order": 0,
      "description_vi": "VN kinetic cũng của nhà Key, tớ xem anime trước ròi mới chơi nên cảm xúc của anime có lẽ nhiều hơn ( vì lúc chơi con game kinetic này cũng biết hết diễn biến rùi )",
      "description_en": "This is another kinetic novel from Key. I actually watched the anime before playing it, so I think the anime left a much deeper emotional impression on me, mostly because by the time I played the game, I already knew how the whole story would unfold.",
      "description_jp": "これもKeyのキネティックノベル作品なんだよね。実はプレイする前にアニメを見ていたから、アニメのときのほうが感動が深かったかもしれないな。ゲームをやった時には、もう物語の展開を全部知っちゃってたからね。"
    },
    {
      "id": "game_1787374822002_601",
      "column": 2,
      "name": "Stella of The End",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2510770/",
      "icon_key": "Game/cd17462d-f680-4bd6-ae5f-f88381911f4b-mt3wsncn-4zviex0s.webp",
      "cover_key": "Game/35895339-3972-4c6d-87b1-453aae273a6f-mt3wt1wg-0jen9y67.webp",
      "description": "Không có gì để chê, cũng là 1 kinetic có tiếng của nhà Key, để lại 1 cảm xúc mãnh liệt không chỗ nào chê.Philia my Daugherrrrrr",
      "sort_order": 0,
      "description_vi": "Không có gì để chê, cũng là 1 kinetic có tiếng của nhà Key, để lại 1 cảm xúc mãnh liệt không chỗ nào chê.Philia my Daugherrrrrr",
      "description_en": "Honestly, it was truly flawless. Another acclaimed kinetic novel from Key that left such an overwhelming, deeply moving emotional mark on me. Philia is just my precious daughterrrrr!",
      "description_jp": "本当に文句のつけようがない作品。Keyの名作キネティックノベルのひとつで、胸がいっぱいになるくらい強烈な感動と余韻を残してくれたんだよね。Philia my daugterrrrrr!!"
    },
    {
      "id": "game_1786679449390_92",
      "column": 2,
      "name": "Summer Pocket",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/897220/Summer_Pockets/",
      "icon_key": "Game/0abb44eb-092f-44e0-97e3-149d298ba4c1-mt5m67jc-klclct8q.webp",
      "cover_key": "Game/10240531-ea1e-408f-b24a-f9327cf6d39d-mssds0hz-iuxbxx88.webp",
      "description": "Tựa game VN đầu tiên của nhà Key mà tớ chơi, ké được của cậu bạn trong Steam Family, thời lượng game tầm 40 tiếng nhưng có lẽ là tựa game VN full-price đầu tiên tớ có nhiều cảm xúc khi chơi nhất",
      "sort_order": 0,
      "description_vi": "Tựa game VN đầu tiên của nhà Key mà tớ chơi, ké được của cậu bạn trong Steam Family, thời lượng game tầm 40 tiếng nhưng có lẽ là tựa game VN full-price đầu tiên tớ có nhiều cảm xúc khi chơi nhất",
      "description_en": "The first Key VN I've ever played, borrowed via Steam Family. Around 40 hours of playtime, and probably the first full-price VN to leave such a huge emotional impact on me.",
      "description_jp": "初めて遊んだKey作品。友達のSteamファミリー共有でやらせてもらったんだけど、クリアまで40時間くらいで、たぶん一番感情を揺さぶられた初めてのフルプライスノベルゲー。"
    },
    {
      "id": "game_1787533802750_818",
      "column": 2,
      "name": "The NOexistenceN of you AND me",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2873080/The_NOexistenceN_of_you_AND_me/",
      "icon_key": "Game/5707ee33-dc09-4a5e-87c5-84a7b379214f-mt6jgo6a-phgsmowj.webp",
      "cover_key": "Game/50ced115-26e7-4202-a66a-7dedc1812c51-mt6jgkhr-80fpy2qa.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787997240961_866",
      "column": 2,
      "name": "Katawa Shoujo",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/3068300/Katawa_Shoujo/",
      "icon_key": "Game/87ca647c-1a4f-4484-a644-8467cfc203ad-mte7d2y2-gusda3qr.webp",
      "cover_key": "Game/4299d5d2-274e-4133-ae8a-97c3bf578e75-mte7d9hz-bzkwa7f3.webp",
      "description": "",
      "sort_order": 0,
      "description_vi": "",
      "description_en": "",
      "description_jp": ""
    },
    {
      "id": "game_1787997736016_485",
      "column": 2,
      "name": "Kosaka-san -  小坂さん。 - Remaster",
      "username": "",
      "uid": "",
      "link": "https://store.steampowered.com/app/2776530/__Remaster/",
      "icon_key": "Game/2631b709-c38c-477e-a6a8-5f83c086d8ba-mte7nz63-b865bnt0.webp",
      "cover_key": "Game/dfefb752-d787-40e3-88c7-31ecb161f24a-mte7lqgx-xif2fcgz.webp",
      "description": "Thời lượng game tuy ngắn nhưng để lại cho mình một số cảm xúc rất đặc biệt, con game này cũng là nguồn cảm hứng cho việc mình bắt tay vào làm con game Visual Novel đầu tiên ( nhưng nó đã biến thành Light Novel vì mình không vẽ minh họa được và cũng không tìm được ai do kinh phí quá hạn hẹp )",
      "sort_order": 0,
      "description_vi": "Thời lượng game tuy ngắn nhưng để lại cho mình một số cảm xúc rất đặc biệt, con game này cũng là nguồn cảm hứng cho việc mình bắt tay vào làm con game Visual Novel đầu tiên ( nhưng nó đã biến thành Light Novel vì mình không vẽ minh họa được và cũng không tìm được ai do kinh phí quá hạn hẹp )",
      "description_en": "Even though the game is short, it left a truly special impression on me. It was also the inspiration that pushed me to start making my first visual novel (though it ended up turning into a light novel because I couldn't draw the illustrations myself and lacked the budget to hire an artist).",
      "description_jp": "プレイ時間は短いものの、とても特別な感情が心に残る作品でした。このゲームに背中を押されて初めてのビジュアルノベル制作に取り掛かったのですが、（自分でイラストが描けず、予算不足で絵師さんも見つけられなかったため）結局ライトノベルになってしまいました。"
    },
    {
      "id": "game_1788256758769_381",
      "column": 2,
      "name": "Saya no Uta",
      "username": "",
      "uid": "",
      "link": "",
      "icon_key": "Game/5070b996-b980-4997-b6ed-f773628602fe-mtihshjs-qrgvqj0p.webp",
      "cover_key": "Game/71739e58-8542-432e-875a-6aacfa742f22-mtihttd7-olyrzxbg.webp",
      "description": "Con game Visual Novel kinh dị kèm các cảnh H, nhưng tớ không biết và cứ nghĩ chỉ là game kinh dị cho tới khi chơi game. Các tình tiết trong game khá là căng thẳng, tớ không có nhiều vốn từ để mô tả nhưng nó là con game đáng trải nghiệm thử đấy ( tất nhiên không phải ai cũng chơi được đâu lmao )",
      "sort_order": 0,
      "description_vi": "Con game Visual Novel kinh dị kèm các cảnh H, nhưng tớ không biết và cứ nghĩ chỉ là game kinh dị cho tới khi chơi game. Các tình tiết trong game khá là căng thẳng, tớ không có nhiều vốn từ để mô tả nhưng nó là con game đáng trải nghiệm thử đấy ( tất nhiên không phải ai cũng chơi được đâu lmao )",
      "description_en": "",
      "description_jp": ""
    }
  ]
};

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
                            ${(album.images || []).map(image => {
                                const gridSrc = image.url && image.url.startsWith('http') ? image.url : API_BASE_URL + (image.url || '');
                                const lightboxSrc = image.fullUrl ? (API_BASE_URL + image.fullUrl) : gridSrc;
                                return `
                                <div class="photo-slot" onclick="openLightbox('${escapeHtmlLocal(lightboxSrc)}', '${escapeHtmlLocal(gridSrc)}')">
                                    <img
                                        src="${escapeHtmlLocal(gridSrc)}"
                                        alt="${escapeHtmlLocal(image.name || album.name)}"
                                        loading="lazy"
                                        style="width:100%;height:100%;object-fit:cover;border-radius:4px;display:block;"
                                    >
                                </div>
                            `;}).join('')}
                        </div>
                        <div class="album-scroll-hint"><i class="fa-solid fa-chevron-down"></i></div>
                    </div>
                </div>
            `).join('');

            initGallerySwipeCarousel();
            initAlbumScrollHints();
        }

        function initAlbumScrollHints() {
            document.querySelectorAll('.album-card').forEach(card => {
                const scrollEl = card.querySelector('.album-image-scroll');
                const hint = card.querySelector('.album-scroll-hint');
                if (!scrollEl || !hint) return;

                const updateHint = () => {
                    const canScroll = scrollEl.scrollHeight - scrollEl.clientHeight > 10;
                    const nearBottom = scrollEl.scrollHeight - scrollEl.scrollTop - scrollEl.clientHeight <= 10;
                    hint.classList.toggle('show', canScroll && !nearBottom);
                };

                scrollEl.addEventListener('scroll', updateHint, { passive: true });
                scrollEl.querySelectorAll('img').forEach(img => {
                    if (img.complete) updateHint();
                    else img.addEventListener('load', updateHint, { once: true });
                });
                requestAnimationFrame(updateHint);
                setTimeout(updateHint, 400);
            });
        }

        function initGallerySwipeCarousel() {
            const wrap = document.getElementById('albumGrid');
            const dotsContainer = document.getElementById('galleryDots');
            const swipeHint = document.getElementById('gallerySwipeHint');
            if (!wrap || !dotsContainer) return;

            const count = wrap.children.length;
            dotsContainer.innerHTML = count > 1
                ? Array.from({ length: count }, (_, i) => `<span class="gallery-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></span>`).join('')
                : '';

            dotsContainer.querySelectorAll('.gallery-dot').forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    wrap.scrollTo({ left: wrap.clientWidth * i, behavior: 'smooth' });
                });
            });

            if (!wrap.dataset.swipeBound) {
                wrap.dataset.swipeBound = '1';
                let scrollTimer = null;
                wrap.addEventListener('scroll', () => {
                    if (window.innerWidth > 768) return;
                    if (swipeHint && !swipeHint.classList.contains('faded')) {
                        swipeHint.classList.add('faded');
                        swipeHint.style.transition = 'opacity 0.4s ease';
                        swipeHint.style.opacity = '0';
                        try { localStorage.setItem('gallerySwipeHintSeen', '1'); } catch (e) {}
                    }
                    clearTimeout(scrollTimer);
                    scrollTimer = setTimeout(() => {
                        const dotsNow = dotsContainer.querySelectorAll('.gallery-dot');
                        const index = Math.round(wrap.scrollLeft / wrap.clientWidth);
                        dotsNow.forEach((d, i) => d.classList.toggle('active', i === index));
                    }, 80);
                }, { passive: true });
            }

            let seen = false;
            try { seen = !!localStorage.getItem('gallerySwipeHintSeen'); } catch (e) {}
            if (seen && swipeHint) { swipeHint.style.opacity = '0'; swipeHint.classList.add('faded'); }
        }

        function gameImageUrl(iconKey) {
            if (!iconKey) return '';
            if (iconKey.startsWith('http')) return iconKey;
            return `${API_BASE_URL}/api/game-image/${iconKey}`;
        }

        function renderPublicGame(items = []) {
            const byCol = { 0: [], 1: [], 2: [] };
            items.forEach(item => { if (byCol[item.column] !== undefined) byCol[item.column].push(item); });

            const playList = document.getElementById('gamePlayList');
            if (playList) {
                if (!byCol[0].length) {
                    playList.innerHTML = `<div class="empty-hint" data-i18n="game_empty_playing">${t('game_empty_playing')}</div>`;
                } else {
                    playList.innerHTML = byCol[0].map(item => `
                        <div class="game-play-card">
                            <div class="game-play-icon" style="${item.icon_key ? `background-image:url('${escapeHtmlLocal(gameImageUrl(item.icon_key))}');` : ''}"></div>
                            <div class="game-play-info">
                                <div class="game-play-name-pill">${escapeHtmlLocal(item.name)}</div>
                                <div class="game-play-username">${escapeHtmlLocal(item.username || '')}</div>
                                <div class="game-play-uid-row">
                                    <span class="game-play-uid-text">UID: ${escapeHtmlLocal(item.uid || '—')}</span>
                                    ${item.uid ? `<i class="fa-solid fa-copy game-copy-icon" title="Copy UID" onclick="copyGameUID(this)"></i>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('');
                }
            }

            const renderCatalog = (containerId, list, emptyKey) => {
                const el = document.getElementById(containerId);
                if (!el) return;
                if (!list.length) {
                    el.innerHTML = `<div class="empty-hint" data-i18n="${emptyKey}">${t(emptyKey)}</div>`;
                    return;
                }
                el.innerHTML = list.map(item => `
                    <div class="game-catalog-card">
                        <div class="game-catalog-icon" style="${item.icon_key ? `background-image:url('${escapeHtmlLocal(gameImageUrl(item.icon_key))}');` : ''}"></div>
                        <div class="game-catalog-name">${escapeHtmlLocal(item.name)}</div>
                        <div class="game-readmore-pill" data-i18n="game_readmore" onclick="openGameModal('${escapeHtmlLocal(item.id)}')">${t('game_readmore')}</div>
                    </div>
                `).join('');
            };

            renderCatalog('gameOtherGrid', byCol[1], 'game_empty_other');
            renderCatalog('gameVnGrid', byCol[2], 'game_empty_vn');
        }

        function openGameModal(itemId) {
            const item = (publicBackendData?.gameItems || []).find(g => g.id === itemId);
            if (!item) return;

            const cover = document.getElementById('gameModalCover');
            cover.style.backgroundImage = item.cover_key ? `url('${gameImageUrl(item.cover_key)}')` : (item.icon_key ? `url('${gameImageUrl(item.icon_key)}')` : '');

            document.getElementById('gameModalName').textContent = item.name || '';
            const descByLang = globalLang === 'eng' ? item.description_en : (globalLang === 'jp' ? item.description_jp : item.description_vi);
            document.getElementById('gameModalDesc').textContent = descByLang || item.description_vi || item.description || '';

            const linkBtn = document.getElementById('gameModalLink');
            const steamCorner = document.getElementById('gameModalSteamCorner');
            const isSteam = !!(item.link && item.link.includes('steampowered.com'));

            if (item.link && !isSteam) {
                linkBtn.href = item.link;
                linkBtn.style.display = 'inline-flex';
                linkBtn.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i> Mở link';
            } else {
                linkBtn.removeAttribute('href');
                linkBtn.style.display = 'none';
            }

            if (steamCorner) {
                if (isSteam) {
                    steamCorner.style.display = 'flex';
                    steamCorner.onclick = () => window.open(item.link, '_blank', 'noopener');
                } else {
                    steamCorner.style.display = 'none';
                    steamCorner.onclick = null;
                }
            }

            const overlay = document.getElementById('gameModalOverlay');
            const card = document.getElementById('gameModalCard');
            overlay.classList.add('open');

            if (window.anime) {
                anime.remove([overlay, card]);
                anime({
                    targets: overlay,
                    opacity: [0, 1],
                    duration: 200,
                    easing: 'easeOutQuad'
                });
                anime({
                    targets: card,
                    scale: [0.93, 1],
                    translateY: [14, 0],
                    opacity: [0.4, 1],
                    duration: 300,
                    easing: 'spring(1, 100, 16, 0)'
                });
            }
        }
        function closeGameModal() {
            const overlay = document.getElementById('gameModalOverlay');
            const card = document.getElementById('gameModalCard');
            if (!overlay) return;

            if (window.anime) {
                anime.remove([overlay, card]);
                anime({
                    targets: overlay,
                    opacity: [1, 0],
                    duration: 200,
                    easing: 'easeInQuad'
                });
                anime({
                    targets: card,
                    scale: [1, 0.9],
                    duration: 200,
                    easing: 'easeInQuad',
                    complete: () => {
                        overlay.classList.remove('open');
                        overlay.style.opacity = '';
                        if (card) {
                            card.style.transform = '';
                            card.style.opacity = '';
                        }
                    }
                });
            } else {
                overlay.classList.remove('open');
            }
        }
        function handleGameModalOverlayClick(event) {
            if (event.target.id === 'gameModalOverlay') closeGameModal();
        }

        function copyGameUID(iconEl) {
            const row = iconEl.closest('.game-play-uid-row');
            const uidTextEl = row ? row.querySelector('.game-play-uid-text') : null;
            if (!uidTextEl) return;
            const rawText = uidTextEl.textContent.replace(/^UID:\s*/i, '').trim();

            const doCopy = async () => {
                try {
                    await navigator.clipboard.writeText(rawText);
                } catch (e) {
                    const tempInput = document.createElement('textarea');
                    tempInput.value = rawText;
                    tempInput.style.position = 'fixed';
                    tempInput.style.opacity = '0';
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
                showToast(t('toast_copy_uid'));
            };
            doCopy();
        }
        function initGameSwipeCarousel() {
            const wrap = document.getElementById('gameColumns');
            const dots = document.querySelectorAll('#gameDots .game-dot');
            const swipeHint = document.getElementById('gameSwipeHint');
            if (!wrap || !dots.length) return;

            const setActiveDot = index => {
                dots.forEach((d, i) => d.classList.toggle('active', i === index));
            };

            let scrollTimer = null;
            wrap.addEventListener('scroll', () => {
                if (window.innerWidth > 768) return;
                if (swipeHint && !swipeHint.classList.contains('faded')) {
                    swipeHint.classList.add('faded');
                    swipeHint.style.transition = 'opacity 0.4s ease';
                    swipeHint.style.opacity = '0';
                    try { localStorage.setItem('gameSwipeHintSeen', '1'); } catch (e) {}
                }
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    const index = Math.round(wrap.scrollLeft / wrap.clientWidth);
                    setActiveDot(Math.max(0, Math.min(2, index)));
                }, 80);
            }, { passive: true });

            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    wrap.scrollTo({ left: wrap.clientWidth * i, behavior: 'smooth' });
                });
            });

            let seen = false;
            try { seen = !!localStorage.getItem('gameSwipeHintSeen'); } catch (e) {}
            if (seen && swipeHint) { swipeHint.style.opacity = '0'; swipeHint.classList.add('faded'); }
        }

        function openLightbox(url, thumbUrl) {
            const overlay = document.getElementById('lightboxOverlay');
            const img = document.getElementById('lightboxImage');
            if (!overlay || !img) return;

            img.classList.remove('is-loading');
            img.src = thumbUrl || url;

            if (thumbUrl && thumbUrl !== url) {
                img.classList.add('is-loading');
                const preload = new Image();
                preload.onload = () => {
                    if (img.dataset.lbFull === url) {
                        img.src = url;
                        img.classList.remove('is-loading');
                    }
                };
                preload.onerror = () => {
                    img.classList.remove('is-loading');
                };
                preload.src = url;
            }

            img.dataset.lbFull = url;
            overlay.classList.add('open');

            if (window.anime) {
                anime.remove([overlay, img]);
                anime({
                    targets: overlay,
                    opacity: [0, 1],
                    duration: 200,
                    easing: 'easeOutQuad'
                });
                anime({
                    targets: img,
                    scale: [0.92, 1],
                    opacity: [0.4, 1],
                    duration: 300,
                    easing: 'spring(1, 100, 16, 0)'
                });
            }
        }
        function closeLightbox() {
            const overlay = document.getElementById('lightboxOverlay');
            const img = document.getElementById('lightboxImage');
            if (!overlay) return;

            if (window.anime) {
                anime.remove([overlay, img]);
                anime({
                    targets: overlay,
                    opacity: [1, 0],
                    duration: 200,
                    easing: 'easeInQuad'
                });
                anime({
                    targets: img,
                    scale: [1, 0.88],
                    duration: 200,
                    easing: 'easeInQuad',
                    complete: () => {
                        overlay.classList.remove('open');
                        overlay.style.opacity = '';
                        if (img) {
                            img.src = '';
                            img.classList.remove('is-loading');
                            delete img.dataset.lbFull;
                            img.style.transform = '';
                            img.style.opacity = '';
                        }
                    }
                });
            } else {
                overlay.classList.remove('open');
                setTimeout(() => {
                    if (img) {
                        img.src = '';
                        img.classList.remove('is-loading');
                        delete img.dataset.lbFull;
                    }
                }, 300);
            }
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
                showToast(t('toast_copy_discord'));
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

        function initLineQrPopup() {
            const trigger = document.getElementById('lineQrTrigger');
            const popup = document.getElementById('lineQrPopupFixed');
            if (!trigger || !popup) return;

            const positionPopup = () => {
                const rect = trigger.getBoundingClientRect();
                popup.style.left = `${rect.left + rect.width / 2}px`;
                popup.style.bottom = `${window.innerHeight - rect.top + 12}px`;
            };

            const showPopup = () => { positionPopup(); popup.classList.add('show'); };
            const hidePopup = () => { popup.classList.remove('show'); };

            trigger.addEventListener('mouseenter', showPopup);
            trigger.addEventListener('mouseleave', hidePopup);
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                if (popup.classList.contains('show')) hidePopup();
                else showPopup();
            });
            document.addEventListener('click', hidePopup);
            window.addEventListener('resize', () => { if (popup.classList.contains('show')) positionPopup(); });
            window.addEventListener('scroll', () => { if (popup.classList.contains('show')) positionPopup(); }, true);
        }
        initLineQrPopup();

        const LANGUAGE_FILES = { vie: 'Vie.json', eng: 'Eng.json', jp: 'Jp.json' };

        async function loadLanguageFile(langCode) {
            if (I18N_CACHE[langCode]) return I18N_CACHE[langCode];
            const fileName = LANGUAGE_FILES[langCode];
            if (!fileName) return {};
            try {
                const res = await fetch(`./Language/${fileName}`);
                if (!res.ok) throw new Error(`Không tải được ./Language/${fileName}`);
                const data = await res.json();
                I18N_CACHE[langCode] = data;
                return data;
            } catch (e) {
                console.warn(`Lỗi khi nạp ./Language/${fileName}:`, e);
                return I18N_CACHE['vie'] || {};
            }
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
                let rawLrc = track.lrc || genericLrc();
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
            const tabs = ['section-home', 'section-gallery', 'section-music', 'section-film', 'section-game', 'section-more'];
            const targetTabId = tabs[index];
            if (!targetTabId || !document.getElementById(targetTabId)) return;
            if (currentTabId === targetTabId) return;

            document.querySelectorAll('.nav-item').forEach(opt => opt.classList.remove('active'));
            element.classList.add('active');

            if (window.anime) {
                anime({
                    targets: '#navIndicator',
                    translateY: index * 42,
                    duration: 320,
                    easing: 'spring(1, 95, 15, 0)'
                });
            } else {
                document.getElementById('navIndicator').style.transform = `translateY(${index * 42}px)`;
            }

            switchTab(currentTabId, targetTabId);
            currentTabId = targetTabId;

            const tabName = targetTabId.replace('section-', '');
            updateAppRoute(tabName);
        }

        function syncRouteToParent(routeName) {
            if (window.parent && window.parent !== window) {
                const path = '/' + routeName;
                window.parent.postMessage({ type: 'SYNC_ROUTE_OUT', route: routeName, path: path, hash: '#' + routeName }, '*');
                window.parent.postMessage({ type: 'SYNC_HASH_OUT', hash: '#' + routeName }, '*');
            }
        }

        function syncHashToParent(hash) {
            syncRouteToParent((hash || '').replace('#', ''));
        }

        
        const IRODORI_APP_PATH = 'irodoriQR/index.html';

        function openIrodoriOverlay() {
            const overlay = document.getElementById('irodoriOverlay');
            const frame = document.getElementById('irodoriFrame');
            if (!overlay || !frame) return;
            if (!frame.getAttribute('src')) {
                frame.setAttribute('src', IRODORI_APP_PATH);
            }
            overlay.classList.add('open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            updateAppRoute('irodoriQR');
        }

        function closeIrodoriOverlay(options) {
            const skipHistory = options && options.skipHistory;
            const overlay = document.getElementById('irodoriOverlay');
            if (!overlay || !overlay.classList.contains('open')) return;
            overlay.classList.remove('open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (!skipHistory) {
                const currentTabName = (currentTabId || 'section-home').replace('section-', '');
                updateAppRoute(currentTabName);
            }
        }

        function updateAppRoute(routeName) {
            const path = '/' + routeName;
            if (window.location.protocol === 'file:') {
                // Truong hop chay truc tiep file://
                const newHash = '#' + routeName;
                if (window.location.hash !== newHash) {
                    try { history.replaceState(null, '', newHash); } catch(e) { window.location.hash = routeName; }
                }
                syncHashToParent(newHash);
            } else {
                // Khi chay web server hoac GitHub Pages
                if (window.location.pathname !== path) {
                    try { history.pushState({ route: routeName }, '', path); } catch(e) {}
                }
                syncRouteToParent(routeName);
            }
        }

        function routeByCurrentUrl() {
            let routeName = '';
            // Lay tu pathname (vi du: /irodoriQR, /home, /gallery)
            if (window.location.pathname && window.location.pathname !== '/') {
                const segs = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/');
                routeName = segs[segs.length - 1].toLowerCase();
                if (routeName.endsWith('.html')) {
                    routeName = routeName.replace('.html', '');
                }
            }
            // Hoac fallback lay tu hash neu co (#irodoriQR hoac #home)
            if (!routeName || routeName === 'index' || routeName === 'kinne_nya') {
                if (window.location.hash) {
                    routeName = window.location.hash.replace('#', '').toLowerCase();
                }
            }

            if (routeName === 'irodoriqr' || routeName === 'irodori-qr') {
                openIrodoriOverlay();
                return;
            }

            if (routeName === 'reading') {
                if (typeof openReadingOverlay === 'function') openReadingOverlay();
                return;
            }

            const tabs = ['section-home', 'section-gallery', 'section-music', 'section-film', 'section-game', 'section-more'];
            const targetId = 'section-' + routeName;
            const idx = tabs.indexOf(targetId);
            if (idx !== -1) {
                const navItems = document.querySelectorAll('.nav-item');
                const targetEl = navItems[idx];
                if (targetEl) handleNavClick(targetEl, idx);
            }
        }

        window.addEventListener('popstate', (e) => {
            const overlay = document.getElementById('irodoriOverlay');
            if (overlay && overlay.classList.contains('open')) {
                closeIrodoriOverlay({ skipHistory: true });
            }
            routeByCurrentUrl();
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeIrodoriOverlay();
        });

function goToTabByHash(hash) {
            const tabs = ['section-home', 'section-gallery', 'section-music', 'section-film', 'section-game', 'section-more'];
            const name = (hash || '').replace('#', '').toLowerCase();
            if (!name) return;
            const index = tabs.indexOf('section-' + name);
            if (index === -1) return;
            const navItems = document.querySelectorAll('.nav-item');
            const targetEl = navItems[index];
            if (targetEl) handleNavClick(targetEl, index);
        }

        window.addEventListener('message', (e) => {
            if (!e.data) return;
            if (e.data.type === 'SYNC_ROUTE_IN') {
                const rawRoute = (e.data.route || e.data.path || '').replace(/^\/+|\/+$/g, '').replace('#', '');
                const targetRoute = rawRoute.toLowerCase();
                if (targetRoute === 'irodoriqr' || targetRoute === 'irodori-qr') {
                    openIrodoriOverlay();
                } else if (rawRoute) {
                    goToTabByHash('#' + rawRoute);
                }
            } else if (e.data.type === 'SYNC_HASH_IN') {
                const target = (e.data.hash || '').replace('#', '').replace(/^\/+|\/+$/g, '').toLowerCase();
                if (target === 'irodoriqr' || target === 'irodori-qr') {
                    openIrodoriOverlay();
                } else {
                    goToTabByHash(e.data.hash);
                }
            }
        });

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
            if (fromId === toId) return;
            const fromSection = document.getElementById(fromId);
            const toSection = document.getElementById(toId);
            if (!fromSection || !toSection) return;

            const outElements = Array.from(fromSection.querySelectorAll('.fly-cluster'));
            const inElements = Array.from(toSection.querySelectorAll('.fly-cluster'));

            if (window.anime) {
                anime.remove(outElements);
                anime.remove(inElements);
                document.querySelectorAll('.tab-section:not(#' + toId + ') .fly-cluster').forEach(el => {
                    anime.remove(el);
                    el.style.transform = '';
                    el.style.opacity = '';
                });
            }

            const outClippers = releaseClipping(fromSection);

            if (!window.anime) {
                fromSection.classList.remove('active');
                toSection.classList.add('active');
                restoreClipping(outClippers);
                return;
            }

            anime({
                targets: outElements,
                translateY: (el) => el.classList.contains('fly-reverse') ? '45vh' : '-45vh',
                opacity: [1, 0],
                duration: 220,
                delay: anime.stagger(15, { from: 'first' }),
                easing: 'easeInQuad',
                complete: () => {
                    fromSection.classList.remove('active');
                    restoreClipping(outClippers);
                    outElements.forEach(el => {
                        el.style.transform = '';
                        el.style.opacity = '';
                        el.classList.add(el.classList.contains('fly-reverse') ? 'fly-hidden-bottom' : 'fly-hidden-top');
                    });

                    toSection.classList.add('active');
                    const inClippers = releaseClipping(toSection);

                    inElements.forEach(el => {
                        el.classList.remove('fly-hidden-bottom', 'fly-hidden-top');
                    });

                    anime({
                        targets: inElements,
                        translateY: ['45vh', 0],
                        opacity: [0, 1],
                        duration: 440,
                        delay: anime.stagger(24, { from: 'first' }),
                        easing: 'spring(1, 100, 16, 0)',
                        complete: () => {
                            restoreClipping(inClippers);
                            inElements.forEach(el => {
                                el.style.transform = '';
                                el.style.opacity = '';
                            });
                        }
                    });
                }
            });
        }

        function changeGlobalLang(element, index, langCode) {
            document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
            element.classList.add('active');

            if (window.anime) {
                anime({
                    targets: '#indicator',
                    translateY: index * 32,
                    duration: 260,
                    easing: 'spring(1, 95, 16, 0)'
                });
            } else {
                document.getElementById('indicator').style.transform = `translateY(${index * 32}px)`;
            }

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
            try {
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

                try {
                    await setLanguage(langCode);
                } catch (e) {
                    console.warn('Lỗi setLanguage:', e);
                }

                await loadPublicBootstrap(langCode);
            } catch (err) {
                console.error('Lỗi initLanguage:', err);
                try { await loadPublicBootstrap(globalLang || 'vie'); } catch(e) {}
            }
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

            document.getElementById('musicTitle').textContent = publicBackendData?.homeMusic?.name || data.title || t('music_unknown_title');
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

        function genericLrc() {
            return `[00:00.50] (${t('music_now_playing_fallback').replace(/^\(|\)$/g, '')})
[00:05.00] ${t('music_no_lyric')}`;
        }

        let musicCurrentTrackIndex = -1;
        let musicLyricsData = [];
        let musicLyricTime = 0;
        let musicActiveLineIndex = -1;
        let musicLyricTimer;
        let musicIsPlaying = false;
        let musicTrackDuration = 100;
        let musicDurationConfirmed = false;
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
                    if (dur) {
                        musicTrackDuration = dur;
                        if (!musicDurationConfirmed) {
                            musicDurationConfirmed = true;
                            document.getElementById('durationTxt').innerText = formatTimeGlobal(dur);
                        }
                    }
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
                    thumb.style.backgroundSize = isYt ? 'auto 135%' : 'cover';
                    thumb.classList.add('has-image');
                } else {
                    thumb.style.backgroundImage = '';
                    thumb.style.backgroundSize = 'cover';
                    thumb.classList.remove('has-image');
                }

                thumb.style.opacity = 1; thumb.style.transform = 'scale(1)';
                title.style.opacity = 1; artist.style.opacity = 1;
                let rawLrc = track.lrc || genericLrc();
                try {
                    if (rawLrc.trim().startsWith('{')) {
                        const parsedLrc = JSON.parse(rawLrc);
                        rawLrc = (globalLang === 'jp') ? (parsedLrc.lrc_jp || parsedLrc.lrc_romaji || '') : (parsedLrc.lrc_romaji || parsedLrc.lrc_jp || '');
                    }
                } catch(e) {}

                musicLyricsData = parseLRC(rawLrc);
                musicTrackDuration = musicLyricsData.length ? musicLyricsData[musicLyricsData.length - 1].time + 5 : 20;
                musicDurationConfirmed = false;
                document.getElementById('durationTxt').innerText = '--:--';
                currentTimeTxt.innerText = '--:--';
                progressBar.style.width = '0%';

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
                const bgStyle = coverImg ? ` style="background-image:url('${escapeHtmlLocal(coverImg)}');${isYt ? ' background-size: auto 135%;' : ''}"` : '';
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

            const content = data.content || {};
            setTextById('homeIntroText', content.homeIntro || t('home_intro') || '');
            setTextById('homeSubText', content.homeSub || t('home_sub') || '');
            setTextById('homeWelcomeText', content.homeWelcome || t('home_welcome') || '', true);
            setTextById('homeWelcomeTextMobile', content.homeWelcome || t('home_welcome') || '', true);
            setTextById('galleryHintText', content.galleryHint || t('gallery_hint') || '');
            setTextById('filmHintText', content.filmHint || t('film_hint') || '');
            setTextById('musicHintText', content.musicHint || t('music_hint') || '');

            setTextById('gameHintText', content.gameHint || t('game_hint') || '');
            setTextById('gameDescLeft', content.gameDescLeft || '');
            setTextById('gameDescCenter', content.gameDescCenter || '');
            setTextById('gameDescRight', content.gameDescRight || '');
            renderPublicGame(data.gameItems || []);

            applySocialData(data.social);
            renderPublicAlbums(data.albums || []);

            demoTracks = Array.isArray(data.tracks) ? data.tracks : [];
            initPlaylist();

            if (data.homeMusic) {
                if (data.homeMusic.name) setTextById('musicTitle', data.homeMusic.name);
                if (data.homeMusic.artist) setTextById('musicArtist', data.homeMusic.artist);
                if (data.homeMusic.youtubeId) {
                    const thumb = document.getElementById('musicThumb');
                    if (thumb) {
                        thumb.classList.add('has-image');
                        thumb.style.backgroundImage = `url('https://img.youtube.com/vi/${data.homeMusic.youtubeId}/hqdefault.jpg')`;
                    }
                }
            }

            YT_VIDEO_ID = data.homeMusic?.youtubeId || '';
            createOrLoadHomePlayer();
        }

        async function loadPublicBootstrap(langCode = globalLang || 'vie') {
            if (typeof STATIC_BACKEND_DATA !== 'undefined' && STATIC_BACKEND_DATA) {
                try { applyPublicBackendData(STATIC_BACKEND_DATA); } catch(e) {}
            }

            try {
                const result = await apiFetch(`/api/public/bootstrap?lang=${encodeURIComponent(langCode)}`);
                if (result && result.data) {
                    applyPublicBackendData(result.data);
                }
            } catch (error) {
                console.warn('Không tải được API backend (có thể do mở trực tiếp bằng file:// hoặc CORS):', error);
                if (typeof STATIC_BACKEND_DATA !== 'undefined' && STATIC_BACKEND_DATA) {
                    applyPublicBackendData(STATIC_BACKEND_DATA);
                }
            }
        }

        let settingsMode = false;
        let activeSettingsTab = 0;

        function getCurrentSiteTabIndex() {
            const tabs = ['section-home', 'section-gallery', 'section-music', 'section-film', 'section-game', 'section-more'];
            const index = tabs.indexOf(currentTabId);
            return index < 0 ? 0 : index;
        }

        function handleNavClick(element, index) {
            if (element && element.id === 'navMoreItem') {
                showToast('Phần này đang hoàn thiện');
                return;
            }
            collapseMobileDrawer();
            if (settingsMode) activateSettingsTab(element, index);
            else activateNav(element, index);
        }

        let toastAnimeTimer = null;
        function showToast(message) {
            const toast = document.getElementById('toastNotification');
            if (!toast) return;
            toast.textContent = message;
            clearTimeout(toastAnimeTimer);

            if (window.anime) {
                anime.remove(toast);
                toast.style.pointerEvents = 'auto';
                anime({
                    targets: toast,
                    translateX: '-50%',
                    translateY: ['-50px', '0px'],
                    opacity: [0, 1],
                    scale: [0.92, 1],
                    duration: 320,
                    easing: 'spring(1, 95, 15, 0)'
                });
                toastAnimeTimer = setTimeout(() => {
                    anime({
                        targets: toast,
                        translateX: '-50%',
                        translateY: ['0px', '-50px'],
                        opacity: [1, 0],
                        scale: [1, 0.9],
                        duration: 300,
                        easing: 'easeInQuad',
                        complete: () => {
                            toast.style.pointerEvents = 'none';
                            toast.style.transform = '';
                            toast.style.opacity = '';
                        }
                    });
                }, 2800);
            } else {
                toast.classList.add('show');
                toastAnimeTimer = setTimeout(() => { toast.classList.remove('show'); }, 3000);
            }
        }
        window.showToast = showToast;

        window.addEventListener('load', async () => {
            try { if (typeof initSettingsUi === 'function') initSettingsUi(); } catch(e) { console.warn(e); }
            try { if (typeof syncAvatarVisibility === 'function') syncAvatarVisibility(); } catch(e) { console.warn(e); }
            try { showMobileDrawerHintOnLoad(); } catch(e) {}
            try { initGameSwipeCarousel(); } catch(e) {}
            try {
                routeByCurrentUrl();
                const irodoriCloseBtn = document.getElementById('irodoriCloseBtn');
                if (irodoriCloseBtn) irodoriCloseBtn.addEventListener('click', () => closeIrodoriOverlay());
            } catch(e) { console.warn(e); }

            await initLanguage();

            const preloader = document.getElementById('pagePreloader');
            const animateHomeEntry = () => {
                const clusters = document.querySelectorAll('#section-home .fly-cluster');
                clusters.forEach(el => el.classList.remove('fly-hidden-bottom', 'fly-hidden-top'));
                if (window.anime) {
                    anime({
                        targets: clusters,
                        translateY: ['30vh', 0],
                        opacity: [0, 1],
                        duration: 440,
                        delay: anime.stagger(25, { from: 'first' }),
                        easing: 'spring(1, 95, 15, 0)',
                        complete: () => {
                            clusters.forEach(el => {
                                el.style.transform = '';
                                el.style.opacity = '';
                            });
                        }
                    });
                }
            };

            if (preloader) {
                if (window.anime) {
                    anime({
                        targets: preloader,
                        opacity: [1, 0],
                        duration: 320,
                        easing: 'easeOutQuad',
                        complete: () => {
                            preloader.style.visibility = 'hidden';
                            preloader.remove();
                            animateHomeEntry();
                        }
                    });
                } else {
                    preloader.style.opacity = '0';
                    preloader.style.visibility = 'hidden';
                    setTimeout(() => {
                        preloader.remove();
                        animateHomeEntry();
                    }, 350);
                }
            } else {
                animateHomeEntry();
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

