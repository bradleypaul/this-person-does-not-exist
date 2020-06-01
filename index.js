const puppeteer = require('puppeteer');

async function getImage(count) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            '--window-size=1920,1080',
        ]
    });
    const page = await browser.newPage();
    
    await page.goto('https://thispersondoesnotexist.com');
    const img = await page.$('img');
    await img.screenshot({
        path: "temp.png"
    });

    browser.close();
};

getImage();