const puppeteer = require('puppeteer');

async function getImage(count, page) {

    await page.goto('https://thispersondoesnotexist.com');
    const img = await page.$('img');
    await img.screenshot({
        path: `test${count}.png`
    });
    await page.close();
};

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            '--window-size=1920,1080',
        ]
    });

    for (let i = 0; i < 100; i++) {
        await getImage(i, await browser.newPage());
    }
    browser.close();
})();