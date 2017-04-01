// // For authoring Nightwatch tests, see
// // http://nightwatchjs.org/guide#usage

module.exports = {
    '主页测试': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        // const devServer = browser.globals.devServerURL

        browser
            .url("http://localhost:3001")
            .waitForElementVisible('section:first-child', 2000)
            .expect.element("header h2").text.to.equal('React Starter')
            // .click("main > div > section:first-child > a")
    }
}