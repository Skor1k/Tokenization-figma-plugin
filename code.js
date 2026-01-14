// DL Atoms Tokenization Plugin
// Оптимизированная версия с кэшированием

// =============================================
// КЛЮЧИ ПЕРЕМЕННЫХ были выгружены с помощью плагина export-keys-plugin
// =============================================
const VARIABLE_KEYS = {
    "geometry/padding-h": "40438f2aaeb3a79a6712b6dc3c33c53f31f72634",
    "geometry/padding-v": "8fb39d8585dfe9f829c2e7685a6db6ac2683e957",
    "geometry/gap": "ac2c30f42bd124305f3654493d08a3e290b68edd",
    "geometry/radius": "7be7e21cfe74ad6e31265789f9408bb58893784b",
    "icon/icon-size": "0cd7619782a7aa4ea0e659c77936762ad4e2b836",
    "icon/🔗icon-container": "fe9e709a5a88f08d134399cf901075638434d7b6",
    "icon/🔗help-gap": "cec71d5b2c12212e27509beffd5887852c69c2cd",
    "text/body/🔗main-text-gap": "c8134a9184e164c2e1d1f3d482b8eebba65527ee"
};

// =============================================
// КЛЮЧИ ТЕКСТОВЫХ СТИЛЕЙ
// =============================================
const TEXT_STYLE_KEYS = {
    "main-header": "e7800940afc692b12f94233b57aa213d61740566",
    "main-normal": "d1564ca381483237256eb11d8a2a02fe3a8aacb0",
    "body": "9b697092241d512fc36209954680cfb21c2b9239",
    "caption": "9669e35514a5bb80372cc2d5ffb24ecdbaed09d1"
};

// =============================================
// КЛЮЧИ ЦВЕТОВЫХ ПЕРЕМЕННЫХ (скины)
// =============================================
const COLOR_KEYS = {
    // Low-contrast скины (gray, red, orange, green, purple, violet, yellow, blue)
    "gray/low-contrast/fill": "ed909673bb58bd76237b9b6cb06b76adf8eef05a",
    "gray/low-contrast/stroke": "9560296abcc309776448c9f733c25036e4ec91b6",
    "gray/low-contrast/text-main": "3343c3b629e20e4906421b96eb31fea00da0f419",
    "gray/low-contrast/text-supplementary": "10f2a10f51f6175d7f35d346f527efee4df21749",
    "gray/low-contrast/icon-main": "6f72010f41dc91663ff3e7066bc1f16e9ccc4029",
    "gray/low-contrast/icon-supplementary": "0cb6c9318bc10cc1bcc1443ace73882321a76634",
    
    "red/low-contrast/fill": "6aacc80c1e68eaae77a288422e23483386be8ff3",
    "red/low-contrast/stroke": "c052c7025620ca2800bd729851251c98ad80aa17",
    "red/low-contrast/text-main": "4ba7f94380a2076d6a9ea98d402cd58ec5f51b81",
    "red/low-contrast/text-supplementary": "1ebfaf7ffb7419c6e2a80791e5483c27a8bd623d",
    "red/low-contrast/icon-main": "ba2f28a407ab5919e31787736a853d3fbc132099",
    "red/low-contrast/icon-supplementary": "5cd47706a3621baae515470182fdd57a7862e99d",
    
    "orange/low-contrast/fill": "e77d54f3d6485119d7499bb933903b89f542a909",
    "orange/low-contrast/stroke": "5010a4d766b2ef57e75e446cd8b6d948849aa317",
    "orange/low-contrast/text-main": "80d57ef387b4ff3953a5c3d3e714a17498cfa3fd",
    "orange/low-contrast/text-supplementary": "986f793819ad4f3ffbf9a299e3c379bb0fa2e28e",
    "orange/low-contrast/icon-main": "f04d484f2344fff5c16f5ffa0e2447c86f055518",
    "orange/low-contrast/icon-supplementary": "67b17a22020a18b7fc2f76a3a9defd9be4f8e12e",
    
    "green/low-contrast/fill": "3aeedb21bd3349a1382b370109d02ee9d97138de",
    "green/low-contrast/stroke": "bd335f7dc0260888812c145953a97c49ebe20bd6",
    "green/low-contrast/text-main": "e64a52d18dcf40ad65d0e0fa0ab2bc8485e61ad9",
    "green/low-contrast/text-supplementary": "d336cc9c6cc7e3ac9af7cf7c456e5d6029d4c957",
    "green/low-contrast/icon-main": "3d5f9023d88f6c76837895325b13a734c1004a42",
    "green/low-contrast/icon-supplementary": "3c7873aa5f8169c55089661895f4b6ef7b481971",
    
    "purple/low-contrast/fill": "b7cebb0e1d904bd3ca9ee3da1b50dacf4b30ba3a",
    "purple/low-contrast/stroke": "6c3b4b5bfed31e0df3d9865261ba561f24505a30",
    "purple/low-contrast/text-main": "1fd7ea91b6c1f4ba1a9d51cc2cb571fe97e827c2",
    "purple/low-contrast/text-supplementary": "1ac22d554042d9c277c669d8c0a1d2bfbe68494b",
    "purple/low-contrast/icon-main": "a2cc80dd3887bb955d22b475fd6a9caa52fac938",
    "purple/low-contrast/icon-supplementary": "76fe8672c52521ca20eaaed79cf65016f519b5a5",
    
    "violet/low-contrast/fill": "a9721557f558d45c30acf0c97b9680cb1e51deae",
    "violet/low-contrast/stroke": "3a7c9ceecf03561cabf047ecc133c04d2b621d6b",
    "violet/low-contrast/text-main": "19d5a30e2312b765ef635f664daa436eb3c5206d",
    "violet/low-contrast/text-supplementary": "277abc92f9418bc55437b91a9fba38439c2269c0",
    "violet/low-contrast/icon-main": "fc2df33bd03b72f815653a9305dfeaff44474699",
    "violet/low-contrast/icon-supplementary": "1cc4ff3a0655d35c41994826159e00b484a2ad20",
    
    "yellow/low-contrast/fill": "53e4458c2b4170dbe0d1caeb6aa84dc4ffbd7542",
    "yellow/low-contrast/stroke": "01edd2072b1823609c89d8132e3804ffa856804a",
    "yellow/low-contrast/text-main": "f5d2c1ecbb0fabf9d7e82394bf305351b67fc17e",
    "yellow/low-contrast/text-supplementary": "fec3550493c8fc419f784705d79145a26f5d2da7",
    "yellow/low-contrast/icon-main": "4d86b04523ec63b66b1b8b77db415897e031d540",
    "yellow/low-contrast/icon-supplementary": "155bde6195207b70de173849176d254c45d3f3bb",
    
    "blue/low-contrast/fill": "7a053cbb57d04f137b59cc8a1c86dfdc95bb4c3c",
    "blue/low-contrast/stroke": "5f586c04521cfc7a4aa60188b1b6430ce15534c4",
    "blue/low-contrast/text-main": "438c48087f210856d5f4ff5cd66d5ebdd0314fa6",
    "blue/low-contrast/text-supplementary": "975a728da047c489b36f50009fc50b4393fa2294",
    "blue/low-contrast/icon-main": "4cbbc7a9f0d4e0ee006ffd404f049ef7706bd5b7",
    "blue/low-contrast/icon-supplementary": "d45ea8e033562186fe1c8f1664912c4f7a7e7060",
    
    // High-contrast скины (neutral, blue, green, yellow, purple, violet, red)
    "gray/neutral/fill": "318809da79af56a4ef45989c565cbd3c2799b54d",
    "gray/neutral/stroke": "86bd2bdcfaee9c0ef6ec54096b0e1b855585f605",
    "gray/neutral/text-main": "7e909b490d338129dd99b1521e6fc046dbb2cc7e",
    "gray/neutral/text-supplementary": "589d99b40c669677729f2a0b3fd41c1ba55e7174",
    "gray/neutral/icon-main": "f031cc655f8afd8e9ce39fd0546661e591a09bd0",
    "gray/neutral/icon-supplementary": "5e5087240c76e1770c8efd541ed6d41c656ac934",
    
    "blue/high-contrast/fill": "e4212c6a61d2a79048a50d5c3a51fbda4907d5fb",
    "blue/high-contrast/stroke": "f56ab60e5d0ee55e1d024a5b4929ea9645ac0d3b",
    "blue/high-contrast/text-main": "5382cb048d1853f9a1f2aae9a05b8eb976dfa965",
    "blue/high-contrast/text-supplementary": "d15f65a644c8897a57e445f7d55722f5671508bb",
    "blue/high-contrast/icon-main": "0c36ea686f80424f770c0c603a84ec166b1b246c",
    "blue/high-contrast/icon-supplementary": "34fb9046cec1b4e198d6563552affd798dc96ce7",
    
    "green/high-contrast/fill": "88c4ad278a4e365cf2be93122843429fbe7cdc88",
    "green/high-contrast/stroke": "1d70893f89c6d3824753703f98e8e2f684a39ae9",
    "green/high-contrast/text-main": "f9a1ec7679371b8cf1a8f455bb08093ada767035",
    "green/high-contrast/text-supplementary": "5deddd7e04fb76297493351d531fae4044935348",
    "green/high-contrast/icon-main": "cc5bf54b2bbd4ac2d3c02227e745d46c27e9444c",
    "green/high-contrast/icon-supplementary": "4ec43b88f6e7aef72778e01939e07bad0c37d861",
    
    "yellow/high-contrast/fill": "65c7433eb6c2961f475c16f66643120d8510c1b7",
    "yellow/high-contrast/stroke": "72e2d8e00ecb5cd8822583e5815232c61352bb02",
    "yellow/high-contrast/text-main": "c65832c038db4990e120e784499ced854c5a67e1",
    "yellow/high-contrast/text-supplementary": "0cf8d44ee4e6b17d00b58b3638adb4b1ebfbc02f",
    "yellow/high-contrast/icon-main": "7a7043e1a5d766bedf650e618631e2eb666ba5b4",
    "yellow/high-contrast/icon-supplementary": "bd8b607743aef8eb430cff28206591cab79fd8ef",
    
    "purple/high-contrast/fill": "912bf5e89d4ad1cd8e6cabb9176c12195e36c6b5",
    "purple/high-contrast/stroke": "f6ea90e0d42f12c9be3ac47426b4f8ff7c18a716",
    "purple/high-contrast/text-main": "500a815ffe99694eed535e5dca249f6eefb4a4ee",
    "purple/high-contrast/text-supplementary": "6339421af63ab78e1ac27fa8cf90fd4e908e8b23",
    "purple/high-contrast/icon-main": "b0540f173ddc3481f1ec4804ab90f35ca5128583",
    "purple/high-contrast/icon-supplementary": "4c671d77057b99606c0fa7015e7b85d26db65305",
    
    "violet/high-contrast/fill": "02eb16eca2107200317317b0d9d9d720bdc7e5ce",
    "violet/high-contrast/stroke": "bf1c713481efb013db1dd8831a3b02d97a2e075f",
    "violet/high-contrast/text-main": "441e239c8e786d58c91088f65fc6af8a555cc7e5",
    "violet/high-contrast/text-supplementary": "65f8a5d80fceaaf2f205a9598973e0953672e259",
    "violet/high-contrast/icon-main": "5ed776ba580e1055e2aa7fe3b5deb3a9df8039bf",
    "violet/high-contrast/icon-supplementary": "0eb0775baa39f170a4598836e04e96a561eec781",
    
    "red/high-contrast/fill": "197d4388b1dc8b267f654717f701d7ae0be9efc4",
    "red/high-contrast/stroke": "a8b501f6ff73244586284929523b98e2f192a5d2",
    "red/high-contrast/text-main": "3618de70ea3b11a90abfb7ff44c0e4ff9a12301c",
    "red/high-contrast/text-supplementary": "fcef47c21fd65368bf0a5eb4553966bca384e6b7",
    "red/high-contrast/icon-main": "3e12945490504ccb052de504ae92463e2b584975",
    "red/high-contrast/icon-supplementary": "b53f8d2562977d56c31559da47aaac5ce451a3f7",
    
    // Transparent скины
    "gray/transparent/fill": "aef94526fcd610f65a23f07549f6f7d6f697355c",
    "gray/transparent/stroke": "20a135f62bfe23d06974a41066cbb7c9a9788dc6",
    "gray/transparent/text-main": "654fc87318bd18bc89066587d1e1da6ce4ebdeb9",
    "gray/transparent/text-supplementary": "74cb3be1f1f368237b09e9c9b151663e2254665a",
    "gray/transparent/icon-main": "da50889a76094f952e22344a20854707fd417f8f",
    "gray/transparent/icon-supplementary": "8e9ac8d1751d7af1698d2af3246041fbd934f233",
    
    "red/transparent/fill": "5b029fb23b13391790c10514c066a42eabf5969b",
    "red/transparent/stroke": "01317572286242a11e8eb236867273b72e3412cd",
    "red/transparent/text-main": "25ba32578e89afe25afad520be87b7d89af70ea2",
    "red/transparent/text-supplementary": "f3e5fde2c152c073d7d357646b067235df55a8b4",
    "red/transparent/icon-main": "c6297aa70b06e5cf1ba231bb1511b5408c66edef",
    "red/transparent/icon-supplementary": "17f152058e3eb0885f92d41a394ba6c0c5a59816",
    
    "orange/transparent/fill": "2ea2774dd4c73f121dabf74106ec794619dde6d9",
    "orange/transparent/stroke": "57b4d2954289e6a7d71897cd0544fd1ba428ea42",
    "orange/transparent/text-main": "13464de6e682f4fce501d92c110072dbbfe4a7be",
    "orange/transparent/text-supplementary": "5bb7e1e1b3971a5637c6e4982f8a1fea67a038f5",
    "orange/transparent/icon-main": "cc36be9a1f1e518ce22f692d6a119b2803689cdf",
    "orange/transparent/icon-supplementary": "c1e1aabca9e345f3023ea4c52c999e13a79bd933",
    
    "green/transparent/fill": "5fe6aecf81e0fd1791c70e908671b45589f726fa",
    "green/transparent/stroke": "0527508274ae729c6915edd5d605ae58939f0d80",
    "green/transparent/text-main": "f4f118852316da3c55c60983a5f3c04bd83d356d",
    "green/transparent/text-supplementary": "83c964e93a7fe2b584b3dcafbab7f215f5f90b01",
    "green/transparent/icon-main": "1e7d84cc9f47e5e53a701d7a7535938e8ae86ab8",
    "green/transparent/icon-supplementary": "70637b08b0ebf7b022a8d1ae6b49aa2b1410257f",
    
    "blue/transparent/fill": "99e8d966696f5796b0a858f30ed05e4b4110a189",
    "blue/transparent/stroke": "255ecc9c9fdcb7cba5588fd2729e3e830dd761e7",
    "blue/transparent/text-main": "06c370d26bc988ced33b5af8c2d161e0b693421e",
    "blue/transparent/text-supplementary": "9de0eaeb6dfe33070d6ce80a7d6f5697cbd2d040",
    "blue/transparent/icon-main": "be25daa7bfe6558bc7c404a76ff10899c10099d6",
    "blue/transparent/icon-supplementary": "1fdadbda7d24256c099fc9030a8b5b996b9a434a",
    
    "purple/transparent/fill": "56ed6a0f3b53bdd848f7b564e05e3ff4dbf6568e",
    "purple/transparent/stroke": "417331f1c06450ba613c062d6e6f2093cfc01eb8",
    "purple/transparent/text-main": "a99e8c2cb3a73e19c03291d5b5a49f63774cd620",
    "purple/transparent/text-supplementary": "a19f18c9db402be5808c265afbd6b71c61577623",
    "purple/transparent/icon-main": "c1c216e7ea888615ce1635e14bc3f6468954686d",
    "purple/transparent/icon-supplementary": "d188fa8eae33a1bdc78cd5283190b1cb8ae58774",
    
    "violet/transparent/fill": "32776427b7895d0fbfc51968afb1b1803fda1b55",
    "violet/transparent/stroke": "019424efa4df029eaae1acf2cad96377c5751d79",
    "violet/transparent/text-main": "77b11ca155de76becdce08e53ab927107438f783",
    "violet/transparent/text-supplementary": "37636a05686115fd932078233000032ddc691ec3",
    "violet/transparent/icon-main": "396542eca3afc57bb66b011ce8cccb68f47ec868",
    "violet/transparent/icon-supplementary": "0fc93b93dde418203afd41548311449b32d02938",
    
    // Transparent-contour (только gray)
    "gray/transparent-contour/fill": "45a05eddd748ab3ba0cd35b842daa2afa71d4418",
    "gray/transparent-contour/stroke": "d25d4f5ddd451d6a6db03fbcb23e508e0d129568",
    "gray/transparent-contour/text-main": "03b7730622b03a190c28d9e0f35240e1e2621c2f",
    "gray/transparent-contour/text-supplementary": "2a25eeca027b3c50bfffdb45cc24dcaf40c98430",
    "gray/transparent-contour/icon-main": "66ff48e75945cbdee6e4b118ec08e0cbde1c0e8e",
    "gray/transparent-contour/icon-supplementary": "d40dfa66496af8260710140f1d5d1aca4e2621ea",
    
    // Role скины
    "info/info-fill": "c4eb0c90d7ae1214c683d9a81c9c2a031800cba8",
    "info/info-text-main": "e03d1b10a68ffb970446d5bc66decffb542787f7",
    "info/info-text-supplementary": "f1ef169e38429bbcdeea664bb3df6ce643488547",
    "info/info-icon-main": "56a80403adb05c24c311c63ef0b02bbd4a531424",
    "info/info-icon-supplementary": "262c90b8c6622233c4f769f57f4ded31dbad1603",
    
    "warning/warning-fill": "13102f48574c10775f046e9bd9eefaf5c166bc6d",
    "warning/warning-text-main": "2f49f6ff9699ff710eef0d2ece5c9e031b26ce83",
    "warning/warning-text-supplementary": "33f1d5c0385b0e830e2e2444e60343a34d663da5",
    "warning/warning-icon-main": "d01e9700deeef26c9ad439fae80e363a90452e18",
    "warning/warning-icon-supplementary": "1138e01712fb63f5aa115c9dcffbcf3e602df67d",
    
    "success/success-fill": "8a9732a448bf71944f25fb7d70d2ef9610d3070c",
    "success/success-text-main": "fb0f939b5080f47d101480b3a6ff25b893d09d9f",
    "success/success-text-supplementary": "594acf07096f72fef8078f7ae5f91aa70d18076d",
    "success/success-icon-main": "49878c010549e2006b8614dbce238d41e82c1237",
    "success/success-icon-supplementary": "105a3ee48c8ac36ec9754de389b190a0a83eb443",
    
    "error/error-fill": "dac23174ba074cc6c365140d4916f70d1ea1c359",
    "error/error-text-main": "319c92c397e0eb68f40ff9a87e306914fb19ace3",
    "error/error-text-supplementary": "500dd7ec52227af6ad8b4c8cbfaa2059de6fe527",
    "error/error-icon-main": "00e045f7158573d07a8f574b58e19e29f3d2d830",
    "error/error-icon-supplementary": "8568b450245d830aa8d53141432c916521e7cd12",
    
    "message/message-fill": "c81e2812b96ac11cff0f5c40d5894032b1a9d232",
    "message/message-text-main": "743189f0e21c14d977ae0f169c1363e5fbcaf653",
    "message/message-icon-main": "3518e4e6464b12ee28b422619e762927e5f89ba9",
    
    // LC (low-contrast) Role скины
    "info-lc/info-lc-fill": "2dd88a2fb9f71507aadccae17bf41890a3ad7382",
    "info-lc/info-lc-text-main": "2d22481daa3f2f699fecf917984a49484b9c36f4",
    "info-lc/info-lc-text-supplementary": "432769cfec6ba50919faafca2bdbe93171b84c10",
    "info-lc/info-lc-icon-main": "e7b4e0da50874f30f1e751ed8c5fb6602a629185",
    "info-lc/info-lc-icon-supplementary": "06066986b733df0f033170f387953edffefff7f4",
    
    "warning-lc/warning-lc-fill": "e489d8c7506d4c2f47c46d849507898779f8fe1e",
    "warning-lc/warning-lc-text-main": "36b8b8de54f0c593def54851c176297027c30234",
    "warning-lc/warning-lc-text-supplementary": "7359c44071bf7535ded74ac1b3f47f37bde7cc26",
    "warning-lc/warning-lc-icon-main": "6fca599a896bf2c4819dada3703438996cc264a7",
    "warning-lc/warning-lc-icon-supplementary": "2a36b6d9d84d1352d59b3e471998a5670f9d0a65",
    
    "success-lc/success-lc-fill": "f6d940f766baed3a3046bc630a4ab4baa8757002",
    "success-lc/success-lc-text-main": "4db6ba34e576c3bc5556298b242bdbce3c033a0a",
    "success-lc/success-lc-text-supplementary": "13773d9d8dce5c05d7a52a9db6ea8b2d6b8af618",
    "success-lc/success-lc-icon-main": "b194e8364294dc7040796febe13238adb35b7fe2",
    "success-lc/success-lc-icon-supplementary": "0ea578c45e71fa695273354e276409fbca211d28",
    
    "error-lc/error-lc-fill": "2242b859c454370d3881fd7b39238b3a4cbd4884",
    "error-lc/error-lc-text-main": "7ae4494142bacda2437d933eb0d3875f159612b8",
    "error-lc/error-lc-text-supplementary": "afefa8aa95dc37ae5b070067a0691067a9cbd0be",
    "error-lc/error-lc-icon-main": "560b8790d11cf8b305bb6b670728c5622f806a06",
    "error-lc/error-lc-icon-supplementary": "19c1e95744f372964d2189f287fd0ce03f9ea4d2",
    
    "message-lc/message-lc-fill": "c81e2812b96ac11cff0f5c40d5894032b1a9d232",
    "message-lc/message-lc-text-main": "743189f0e21c14d977ae0f169c1363e5fbcaf653",
    "message-lc/message-lc-text-supplementary": "93dbf313e4ca597036f601288a7646d9f9809d82",
    "message-lc/message-lc-icon-main": "3518e4e6464b12ee28b422619e762927e5f89ba9",
    "message-lc/message-lc-icon-supplementary": "9c19ca7ac0fbb0a893d0f84177546abd7aadb3bf"
};

// =============================================
// КЭШ - загружаем всё один раз
// =============================================
let variablesCache = {};
let textStylesCache = {};
let colorVariablesCache = {};
let cacheLoaded = false;

// Предзагрузка всех переменных и стилей
async function preloadCache() {
    if (cacheLoaded) return;
    
    // Загружаем переменные параллельно
    const varPromises = Object.entries(VARIABLE_KEYS).map(async ([name, key]) => {
        try {
            const variable = await figma.variables.importVariableByKeyAsync(key);
            if (variable) variablesCache[name] = variable;
        } catch (e) {}
    });
    
    // Загружаем текстовые стили параллельно
    const stylePromises = Object.entries(TEXT_STYLE_KEYS).map(async ([name, key]) => {
        try {
            const style = await figma.importStyleByKeyAsync(key);
            if (style) textStylesCache[name] = style;
        } catch (e) {}
    });
    
    await Promise.all([...varPromises, ...stylePromises]);
    cacheLoaded = true;
}

// Загрузка цветовых переменных для конкретного скина
async function loadColorVariables(skinName) {
    const properties = ['fill', 'stroke', 'text-main', 'text-supplementary', 'icon-main', 'icon-supplementary'];
    const result = {};
    
    // Определяем формат пути в зависимости от типа скина
    const isRoleSkin = !skinName.includes('/');
    
    const promises = properties.map(async (prop) => {
        let keyPath;
        if (isRoleSkin) {
            // Role скины: info/info-fill, warning/warning-text-main
            keyPath = skinName + '/' + skinName + '-' + prop;
        } else {
            // Low/High contrast: gray/low-contrast/fill
            keyPath = skinName + '/' + prop;
        }
        
        const key = COLOR_KEYS[keyPath];
        if (key) {
            try {
                const variable = await figma.variables.importVariableByKeyAsync(key);
                if (variable) result[prop] = variable;
            } catch (e) {}
        }
    });
    
    await Promise.all(promises);
    return result;
}

// Получить переменную из кэша
function getVariable(name) {
    return variablesCache[name] || null;
}

// Получить текстовый стиль из кэша
function getTextStyle(name) {
    return textStylesCache[name] || null;
}

// =============================================
// ПРИМЕНЕНИЕ ТОКЕНОВ
// =============================================

async function applyTokenMapping() {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
        throw new Error('Выберите элемент для применения токенов');
    }
    
    const node = selection[0];
    
    // Предзагружаем кэш один раз
    await preloadCache();
    
    // Проверяем что хотя бы что-то загрузилось
    if (Object.keys(variablesCache).length === 0) {
        throw new Error('Не удалось загрузить переменные из библиотеки');
    }
    
    // Счётчик текстов для определения первый/остальные
    let textCounter = { count: 0 };
    
    // Применяем токены
    await applyTokensToNode(node, textCounter);
    
    figma.notify('Компонент размечен базовым скином', { timeout: 3000 });
    return { success: true };
}

// Применение токенов к ноде
async function applyTokensToNode(node, textCounter) {
    // Пропускаем инстансы (кроме иконок)
    if (node.type === 'INSTANCE' && !isIconInstance(node)) {
        return;
    }
    
    // Применяем токены контейнера к корневому элементу
    applyContainerTokens(node);
    
    // Рекурсивно обрабатываем детей
    if ('children' in node) {
        for (const child of node.children) {
            await processNodeRecursively(child, textCounter);
        }
    }
}

// Рекурсивная обработка
async function processNodeRecursively(node, textCounter) {
    // Пропускаем инстансы (кроме иконок)
    if (node.type === 'INSTANCE' && !isIconInstance(node)) {
        return;
    }
    
    // Icon instance - проверяем/создаём контейнер и применяем токены
    if (isIconInstance(node)) {
        ensureIconContainer(node);
        return; // Не обрабатываем детей иконки
    }
    
    // Фреймы с autolayout - применяем gap (с учётом приоритетов)
    if (node.layoutMode && node.layoutMode !== 'NONE') {
        applySmartGap(node);
    }
    
    // Текстовые элементы - первый = main-normal, остальные = body
    if (node.type === 'TEXT') {
        textCounter.count++;
        if (textCounter.count === 1) {
            await applyTextStyle(node, 'main-normal');
        } else {
            await applyTextStyle(node, 'body');
        }
    }
    
    // Рекурсия для детей
    if ('children' in node) {
        for (const child of node.children) {
            await processNodeRecursively(child, textCounter);
        }
    }
}

// Токены контейнера (padding, radius, gap)
function applyContainerTokens(node) {
    if (!node.setBoundVariable) return;
    
    const paddingH = getVariable('geometry/padding-h');
    const paddingV = getVariable('geometry/padding-v');
    const gap = getVariable('geometry/gap');
    const radius = getVariable('geometry/radius');
    
    if (paddingH) {
        try {
            node.setBoundVariable('paddingLeft', paddingH);
            node.setBoundVariable('paddingRight', paddingH);
        } catch (e) {}
    }
    
    if (paddingV) {
        try {
            node.setBoundVariable('paddingTop', paddingV);
            node.setBoundVariable('paddingBottom', paddingV);
        } catch (e) {}
    }
    
    if (gap && node.layoutMode && node.layoutMode !== 'NONE') {
        try {
            node.setBoundVariable('itemSpacing', gap);
        } catch (e) {}
    }
    
    if (radius) {
        try {
            node.setBoundVariable('cornerRadius', radius);
        } catch (e) {}
    }
}

// Умный выбор gap с учётом приоритетов
function applySmartGap(node) {
    if (!node.setBoundVariable) return;
    if (!('children' in node)) return;
    
    // Приоритет 1: Help иконка рядом с текстом → help-gap
    if (hasHelpIconWithText(node)) {
        const helpGap = getVariable('icon/🔗help-gap');
        if (helpGap) {
            try {
                node.setBoundVariable('itemSpacing', helpGap);
            } catch (e) {}
            return;
        }
    }
    
    // Приоритет 2: Вертикальный autolayout с 2+ текстами → main-text-gap
    if (node.layoutMode === 'VERTICAL' && hasMultipleTexts(node)) {
        const textGap = getVariable('text/body/🔗main-text-gap');
        if (textGap) {
            try {
                node.setBoundVariable('itemSpacing', textGap);
            } catch (e) {}
            return;
        }
    }
    
    // По умолчанию: обычный gap
    const gap = getVariable('geometry/gap');
    if (gap) {
        try {
            node.setBoundVariable('itemSpacing', gap);
        } catch (e) {}
    }
}

// Проверка - есть ли Help иконка рядом с текстом
function hasHelpIconWithText(node) {
    if (!('children' in node)) return false;
    
    let hasHelp = false;
    let hasText = false;
    
    for (const child of node.children) {
        // Проверяем прямых детей
        if (child.type === 'TEXT') {
            hasText = true;
        }
        // Проверяем иконку Help (может быть внутри контейнера)
        if (isHelpIconOrContainer(child)) {
            hasHelp = true;
        }
    }
    
    return hasHelp && hasText;
}

// Проверка - это Help иконка или контейнер с Help иконкой
function isHelpIconOrContainer(node) {
    // Прямая иконка Help
    if (isIconInstance(node) && isHelpIcon(node)) {
        return true;
    }
    // Контейнер с иконкой Help внутри
    if ('children' in node) {
        for (const child of node.children) {
            if (isIconInstance(child) && isHelpIcon(child)) {
                return true;
            }
        }
    }
    return false;
}

// Проверка - это иконка Help
function isHelpIcon(node) {
    if (!isIconInstance(node)) return false;
    
    try {
        const mainComponent = node.mainComponent;
        const componentName = (mainComponent && mainComponent.name) ? mainComponent.name.toLowerCase() : '';
        const nodeName = (node.name || '').toLowerCase();
        
        return componentName.includes('help') || 
               componentName.includes('question') ||
               nodeName.includes('help') ||
               nodeName.includes('question');
    } catch (e) {
        return false;
    }
}

// Проверка - есть ли в ноде минимум 2 текстовых элемента
function hasMultipleTexts(node) {
    if (!('children' in node)) return false;
    
    let textCount = 0;
    for (const child of node.children) {
        if (child.type === 'TEXT') {
            textCount++;
            if (textCount >= 2) return true;
        }
    }
    return false;
}

// Icon container height
function applyIconContainerToken(node) {
    if (!node.setBoundVariable) return;
    
    const iconContainer = getVariable('icon/🔗icon-container');
    if (iconContainer) {
        try {
            node.setBoundVariable('height', iconContainer);
        } catch (e) {}
    }
}

// Проверяем и создаём контейнер для иконки
function ensureIconContainer(iconNode) {
    const parent = iconNode.parent;
    
    // Проверяем, является ли родитель autolayout с ТОЛЬКО иконкой внутри
    if (parent && parent.layoutMode && parent.layoutMode !== 'NONE') {
        // Если в родителе только одна иконка - это уже контейнер иконки
        if (parent.children.length === 1) {
            applyIconContainerToken(parent);
            return;
        }
        // Иначе родитель - общий контейнер, нужно обернуть иконку
    }
    
    // Нужно обернуть иконку в новый контейнер
    const container = figma.createFrame();
    container.name = 'iconContainer';
    
    // Настраиваем autolayout
    container.layoutMode = 'HORIZONTAL';
    container.primaryAxisSizingMode = 'AUTO';
    container.counterAxisSizingMode = 'AUTO';
    container.paddingTop = 0;
    container.paddingBottom = 0;
    container.paddingLeft = 0;
    container.paddingRight = 0;
    container.itemSpacing = 0;
    container.fills = [];
    
    // Выравнивание по центру
    container.primaryAxisAlignItems = 'CENTER';
    container.counterAxisAlignItems = 'CENTER';
    
    // Вставляем контейнер на место иконки
    if (parent) {
        const index = parent.children.indexOf(iconNode);
        parent.insertChild(index, container);
    }
    
    // Перемещаем иконку в контейнер
    container.appendChild(iconNode);
    
    // Применяем токен к контейнеру
    applyIconContainerToken(container);
}

// Icon size - применяем токен к пропсу Size иконки
function applyIconSizeToken(node) {
    const iconSize = getVariable('icon/icon-size');
    if (!iconSize || !node.setBoundVariable) return;
    
    try {
        // Получаем определения component properties
        const propDefs = node.componentPropertyDefinitions;
        if (propDefs) {
            // Ищем пропс Size
            for (const [defId, def] of Object.entries(propDefs)) {
                if (def.type === 'VARIANT' && defId.toLowerCase().includes('size')) {
                    // Для variant - пробуем установить через setProperties
                    // (переменные не поддерживаются для variants)
                    continue;
                }
                // Для числовых пропсов - привязываем переменную
                if (defId.toLowerCase().includes('size')) {
                    node.setBoundVariable(`componentProperties/${defId}`, iconSize);
                    return;
                }
            }
        }
        
        // Альтернатива: ищем в componentProperties
        const props = node.componentProperties;
        if (props) {
            for (const propName of Object.keys(props)) {
                if (propName.toLowerCase().includes('size')) {
                    node.setBoundVariable(`componentProperties/${propName}`, iconSize);
                    return;
                }
            }
        }
    } catch (e) {}
    
    // Fallback: применяем к width/height
    try {
        node.setBoundVariable('width', iconSize);
        node.setBoundVariable('height', iconSize);
    } catch (e) {}
}

// Применение текстового стиля
async function applyTextStyle(textNode, styleName) {
    const style = getTextStyle(styleName);
    if (!style) return false;
    
    try {
        await figma.loadFontAsync(style.fontName);
        textNode.textStyleId = style.id;
        return true;
    } catch (e) {
        return false;
    }
}

// Проверка - это иконка из библиотеки !💎 Icons
// Критерии: remote инстанс с пропсами Size, Filled, Thin
// Проверка - это иконка из библиотеки !💎 Icons
// Критерии: remote instance + пропс Size + квадратные размеры (12, 16, 20, 24)
function isIconInstance(node) {
    if (node.type !== 'INSTANCE') return false;
    
    try {
        const mainComponent = node.mainComponent;
        if (!mainComponent || !mainComponent.remote) return false;
        
        // Критерий 1: квадратные размеры из набора 12, 16, 20, 24
        const iconSizes = [12, 16, 20, 24];
        const width = Math.round(node.width);
        const height = Math.round(node.height);
        const isSquare = width === height;
        const isIconSize = iconSizes.includes(width);
        
        if (isSquare && isIconSize) {
            return true;
        }
        
        // Критерий 2: есть пропс Size
        const props = node.componentProperties;
        if (props) {
            const propNames = Object.keys(props).map(p => p.toLowerCase());
            const hasSize = propNames.some(p => p.includes('size'));
            if (hasSize) {
                return true;
            }
        }
        
        return false;
    } catch (e) {
        return false;
    }
}

// =============================================
// ПРИМЕНЕНИЕ ЦВЕТОВОГО СКИНА
// =============================================

async function applyColorSkin(skinName) {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
        throw new Error('Выберите элемент для применения цвета');
    }
    
    const node = selection[0];
    
    // Загружаем цветовые переменные для скина
    const colorVars = await loadColorVariables(skinName);
    
    const loadedProps = Object.keys(colorVars);
    if (loadedProps.length === 0) {
        throw new Error('Не удалось загрузить цветовые переменные для скина: ' + skinName + '\nПроверьте подключение библиотеки !🧬 Variables');
    }
    
    // Предзагружаем кэш для определения стилей текста
    await preloadCache();
    
    // Применяем fill к корневому фрейму
    if (colorVars.fill) {
        applyFillVariable(node, colorVars.fill);
    }
    
    // Применяем stroke к корневому фрейму (для transparent-contour)
    if (colorVars.stroke) {
        applyStrokeVariable(node, colorVars.stroke);
    }
    
    // Рекурсивно применяем цвета к элементам
    await applyColorsRecursively(node, colorVars);
    
    figma.notify('Цветовой скин "' + skinName + '" применён', { timeout: 3000 });
    return { success: true };
}

// Применение переменной цвета к fill
function applyFillVariable(node, colorVariable) {
    try {
        if (!node.fills || !Array.isArray(node.fills) || node.fills.length === 0) {
            return false;
        }
        
        // Читаем текущие fills (это уже клон)
        const fills = [...node.fills];
        let applied = false;
        
        // Применяем ко ВСЕМ SOLID fills
        for (let i = 0; i < fills.length; i++) {
            if (fills[i].type === 'SOLID') {
                // Создаём новый paint с привязанной переменной
                const newPaint = figma.variables.setBoundVariableForPaint(
                    { type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: fills[i].opacity || 1 },
                    'color', 
                    colorVariable
                );
                fills[i] = newPaint;
                applied = true;
            }
        }
        
        if (applied) {
            node.fills = fills;
        }
        return applied;
    } catch (e) {}
    return false;
}

// Применить переменную к stroke ноды
function applyStrokeVariable(node, colorVariable) {
    try {
        if (!node.strokes || !Array.isArray(node.strokes) || node.strokes.length === 0) {
            return false;
        }
        
        const strokes = [...node.strokes];
        let applied = false;
        
        for (let i = 0; i < strokes.length; i++) {
            if (strokes[i].type === 'SOLID') {
                const newPaint = figma.variables.setBoundVariableForPaint(
                    { type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: strokes[i].opacity || 1 },
                    'color', 
                    colorVariable
                );
                strokes[i] = newPaint;
                applied = true;
            }
        }
        
        if (applied) {
            node.strokes = strokes;
        }
        return applied;
    } catch (e) {}
    return false;
}

// Рекурсивное применение цветов
async function applyColorsRecursively(node, colorVars) {
    // Пропускаем инстансы кроме иконок
    if (node.type === 'INSTANCE' && !isIconInstance(node)) {
        return;
    }
    
    // Иконки - определяем тип и применяем соответствующий цвет
    if (isIconInstance(node)) {
        // Пропускаем UI-контролы которые не нужно перекрашивать
        if (isExcludedFromRecolor(node)) {
            return;
        }
        
        const iconType = getIconType(node);
        const colorVar = iconType === 'main' ? colorVars['icon-main'] : colorVars['icon-supplementary'];
        if (colorVar) {
            applyColorToIcon(node, colorVar);
        }
        return;
    }
    
    // Текстовые элементы - определяем стиль и применяем цвет
    if (node.type === 'TEXT') {
        const textType = getTextType(node);
        const colorVar = textType === 'main' ? colorVars['text-main'] : colorVars['text-supplementary'];
        if (colorVar) {
            applyFillVariable(node, colorVar);
        }
    }
    
    // Stroke - если у элемента уже есть обводка, применяем токен stroke
    if (colorVars.stroke && node.strokes && Array.isArray(node.strokes) && node.strokes.length > 0) {
        applyStrokeVariable(node, colorVars.stroke);
    }
    
    // Рекурсия для детей
    if ('children' in node) {
        for (const child of node.children) {
            await applyColorsRecursively(child, colorVars);
        }
    }
}

// Проверка - иконка исключена из перекрашивания
function isExcludedFromRecolor(node) {
    const excludedNames = [
        'checkbox',
        'checkboxchart',
        'radiobutton',
        'switcher'
    ];
    
    try {
        const mainComponent = node.mainComponent;
        const componentName = (mainComponent && mainComponent.name) ? mainComponent.name.toLowerCase() : '';
        const nodeName = (node.name || '').toLowerCase();
        
        // Проверяем имя компонента или ноды
        for (const excluded of excludedNames) {
            if (componentName.includes(excluded) || nodeName.includes(excluded)) {
                return true;
            }
        }
    } catch (e) {}
    
    return false;
}

// Определяем тип текста (main или supplementary) по стилю
function getTextType(textNode) {
    try {
        const styleId = textNode.textStyleId;
        if (styleId && typeof styleId === 'string') {
            const style = figma.getStyleById(styleId);
            if (style && style.name) {
                const styleName = style.name.toLowerCase();
                // main-normal, main-header → main
                if (styleName.includes('main')) {
                    return 'main';
                }
                // body, caption → supplementary
                if (styleName.includes('body') || styleName.includes('caption')) {
                    return 'supplementary';
                }
            }
        }
    } catch (e) {}
    
    // По умолчанию - main
    return 'main';
}

// Определяем тип иконки (main или supplementary) по переменной, стилю или RGB
function getIconType(iconNode) {
    try {
        // Ищем заливку внутри иконки
        const fillInfo = getIconFillInfo(iconNode);
        if (!fillInfo) return 'main';
        
        // Приоритет 1: проверка по привязанной переменной (токену)
        if (fillInfo.boundVariableName) {
            const varName = fillInfo.boundVariableName.toLowerCase();
            if (varName.includes('supplementary')) {
                return 'supplementary';
            }
            if (varName.includes('main')) {
                return 'main';
            }
        }
        
        // Приоритет 2: проверка по стилю цвета
        if (fillInfo.styleId) {
            const style = figma.getStyleById(fillInfo.styleId);
            if (style && style.name) {
                const styleName = style.name.toLowerCase();
                if (styleName.includes('icon-gray-main') || styleName.includes('icon/icon-gray-main')) {
                    return 'main';
                }
                if (styleName.includes('icon-gray-supplementary') || styleName.includes('icon/icon-gray-supplementary')) {
                    return 'supplementary';
                }
            }
        }
        
        // Приоритет 3: проверка по RGB
        if (fillInfo.color) {
            const r = fillInfo.color.r;
            const g = fillInfo.color.g;
            const b = fillInfo.color.b;
            
            // Черный (~0,0,0) → main
            if (r < 0.15 && g < 0.15 && b < 0.15) {
                return 'main';
            }
            
            // Серый (~0.5, 0.5, 0.5) → supplementary
            if (r > 0.3 && r < 0.7 && g > 0.3 && g < 0.7 && b > 0.3 && b < 0.7) {
                return 'supplementary';
            }
        }
    } catch (e) {}
    
    return 'main';
}

// Получить информацию о заливке иконки
function getIconFillInfo(iconNode) {
    // Ищем первый элемент с заливкой внутри иконки
    function searchFill(node) {
        // Проверяем сам узел
        if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
            const solidFill = node.fills.find(f => f.type === 'SOLID' && f.visible !== false);
            if (solidFill) {
                let boundVariableName = null;
                
                // Проверяем привязанную переменную
                try {
                    if (solidFill.boundVariables && solidFill.boundVariables.color) {
                        const varId = solidFill.boundVariables.color.id;
                        if (varId) {
                            const variable = figma.variables.getVariableById(varId);
                            if (variable) {
                                boundVariableName = variable.name;
                            }
                        }
                    }
                } catch (e) {}
                
                return {
                    color: solidFill.color,
                    styleId: node.fillStyleId || null,
                    boundVariableName: boundVariableName
                };
            }
        }
        
        // Ищем в детях
        if ('children' in node) {
            for (const child of node.children) {
                const result = searchFill(child);
                if (result) return result;
            }
        }
        
        return null;
    }
    
    return searchFill(iconNode);
}

// Применить цвет к иконке (ко всем элементам с заливкой внутри)
function applyColorToIcon(iconNode, colorVar) {
    // Собираем все ноды с fills рекурсивно
    function collectFillNodes(node, result) {
        // Проверяем fills
        if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
            const hasSolid = node.fills.some(f => f.type === 'SOLID');
            if (hasSolid) {
                result.push(node);
            }
        }
        
        // Рекурсия для детей
        if ('children' in node) {
            for (const child of node.children) {
                collectFillNodes(child, result);
            }
        }
    }
    
    const nodesToColor = [];
    collectFillNodes(iconNode, nodesToColor);
    
    // Применяем цвет ко всем найденным
    for (const node of nodesToColor) {
        applyFillVariable(node, colorVar);
    }
}

// =============================================
// UI
// =============================================

figma.ui.onmessage = async (msg) => {
    try {
        if (msg.type === 'map-tokens') {
            const result = await applyTokenMapping();
            figma.ui.postMessage({ type: 'tokens-mapped', data: result });
        } else if (msg.type === 'apply-color') {
            const result = await applyColorSkin(msg.skin);
            figma.ui.postMessage({ type: 'color-applied', data: result });
        }
    } catch (error) {
        figma.ui.postMessage({ type: 'error', message: error.message });
    }
};

figma.showUI(__html__, { width: 320, height: 620 });
