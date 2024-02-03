const puppeteer = require('puppeteer');
const url = 'https://ssatocc.github.io/';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(url);
    await page.screenshot({ path: 'screenshots/default.png', fullPage: true });

    const iPadPro11 = puppeteer.devices['iPad Pro 11'];
    await page.emulate(iPadPro11);
    await page.goto(url);
    await page.screenshot({ path: 'screenshots/ipad-pro-11.png', fullPage: true });

    const iPhone13Pro = puppeteer.devices['iPhone 13 Pro'];
    await page.emulate(iPhone13Pro);
    await page.goto(url);
    await page.screenshot({ path: 'screenshots/iphone-13-pro.png', fullPage: true });

    const iPhoneSE = puppeteer.devices['iPhone SE'];
    await page.emulate(iPhoneSE);
    await page.goto(url);
    await page.screenshot({ path: 'screenshots/iphone-se.png', fullPage: true });

    await browser.close();
})();
