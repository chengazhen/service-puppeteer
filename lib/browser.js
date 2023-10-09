const puppeteer = require('puppeteer');
const path = require('path')
const htmlPath = path.join(__dirname, './index.html');

function runCodeInBrowser() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`file://${htmlPath}`)
      // 执行您自己的代码
      const result = await page.evaluate(() => {
        return test()
      });
      await browser.close();
      resolve(result);
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = runCodeInBrowser