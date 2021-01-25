const nativefier = require("nativefier").default;

const { PLATFORM } = process.env;

console.log(`正在打包[${PLATFORM}]平台...`);

/**
 * @type {import("nativefier/lib/options/model").NativefierOptions}
 */
const options = {
    name: "wolai",
    targetUrl: "https://www.wolai.com",
    out: "./dist",
    zoom: 1.0,
    platform: PLATFORM,
    showMenuBar: false,
    disableContextMenu: false,
    icon: "./resource/icon.png",
    inject: [],
    titleBarStyle: "hiddenInset",
    internalUrls: ".*?.wolai.*?",
    darwinDarkModeSupport: true,
    browserwindowOptions: JSON.stringify({
        webPreferences: {
            spellcheck: false,
        },
    }),
};


// 为linux系统修改navigator，使用windows快捷键
if (PLATFORM == 'linux') {
    options.inject.push('./resource/linux.js');
}

nativefier(options, (error, appPath) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`应用已打包到${appPath}`);
});
