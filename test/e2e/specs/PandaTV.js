// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    '疯狂刷弹幕': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        // const devServer = browser.globals.devServerURL

        browser
            .url("http://www.panda.tv/all")
            .waitForElementVisible(".pd-sc-container", 3000)
            .maximizeWindow()
            .setWindowPosition(0, 0)
            .resizeWindow(1280, 800)
            //进入熊猫星秀tab
            .click("ul.list-header-hots > li:nth-child(3) > a")
            //点击登录
            .click(".sidebar-userinfo-login-btn")
            //login
            .setValue('#ruc_dialog_container input[type=text].ruc-input-login-name', '15008187156')
            .setValue('#ruc_dialog_container input[type=password].ruc-input-login-passport', ['guoxiangwen', browser.Keys.ENTER])

            .waitForElementVisible('ul#later-play-list > li:first-child > a >div.video-cover', 3000)
            .pause(3000)
            //进入第一个房间
            .click("ul#later-play-list > li:first-child > a >div.video-cover")
            //刷新
            .refresh();
        //重复发弹幕
        for (let i = 0; i < 10; i++) {
            browser.pause(1000)            
            browser.setValue('textarea.room-chat-texta', '~~~~~~主播跳个舞~~~~~~')
            browser.pause(1000)
            browser.click('div.room-chat-send')
            browser.pause(1000)   
        }
        //结束
        browser.end()
    }
}