const puppeteer = require('puppeteer')

async function getHtml() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({
        width: 1440,
        height: 900,
    });

    await page.goto('https://www.premierleague.com/players', { waitUntil : ['load','domcontentloaded','networkidle0','networkidle2'] });

    const cookieAcceptBtn = await page.$('.js-accept-all-close')

    console.log(cookieAcceptBtn, 'cookieAcceptBtn')

    await cookieAcceptBtn.click();
    
    let infiniteInterval = setInterval(async () => {
        await page.evaluate(() => {
            console.log()
            window.scrollBy(0, window.innerHeight);
        });
    }, 1000);

    setTimeout(async () => {
        clearInterval(infiniteInterval);
    }, 1000 * 20);

    await page.waitForSelector('.dataContainer');

    const contents = await page.content();

    // await browser.close();

    console.log(contents, 'contents');

    // return contents;
}

getHtml()