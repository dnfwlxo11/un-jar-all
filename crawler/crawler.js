const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}

async function getPlayerList() {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.setViewport({
            width: 1440,
            height: 900,
        });

        await page.goto('https://www.premierleague.com/players', { waitUntil : ['load','domcontentloaded','networkidle0','networkidle2'] });

        const cookieAcceptBtn = await page.$('.js-accept-all-close')
        await cookieAcceptBtn.click();

        await delay(2000)

        const popupCloseBtn = await page.waitForSelector('.closeBtn')
        await popupCloseBtn.click();

        const scrollDelay = 1000
        const scrollHeight = 'document.body.scrollHeight';
        while (true) {
            let previousHeight = await page.evaluate(scrollHeight);

            await page.evaluate(`window.scrollTo(0, ${scrollHeight})`);
            await page.waitForFunction(`${scrollHeight} <= ${previousHeight}`, { timeout: 1000 * 30 });
            await page.waitForTimeout(scrollDelay)
            
            let afterHeight = await page.evaluate(scrollHeight);

            console.log(previousHeight, afterHeight, 'previousHeight, afterHeight')
            if (previousHeight >= afterHeight) {
                console.log(previousHeight, afterHeight, 'previousHeight, afterHeight')
                break
            }
        }

        await page.waitForSelector('.dataContainer');

        const html = await page.content();
        await browser.close();

        return html;
    } catch (err) {
        return false;
    }
}

async function getPlayerDetail(page, url) {
    try {
        await page.goto(url, { waitUntil : ['load','domcontentloaded','networkidle0','networkidle2'] });

        // const cookieAcceptBtn = await page.$('.js-accept-all-close')
        // await cookieAcceptBtn.click();

        // await delay(2000)

        // const popupCloseBtn = await page.waitForSelector('.closeBtn')
        // await popupCloseBtn.click();

        await page.waitForSelector('body');

        const overviewPage = await page.content();

        const overview = cheerio.load(overviewPage);
        const playerName = overview('.playerDetails .name').text();
        const playerInfo = overview('.personalDetails');
        const playerCountry = playerInfo.find('.playerCountry').text();
        const playerBirth = playerInfo.find('.pdcol2 .info').text().replace(/\r\n|\r|\n/g, '').trim().split('/').reverse().join('.');
        const playerClubHistory = overview('.playerClubHistory table tbody .table');
        const teams = [];

        playerClubHistory.each((idx, elem) => {
            teams.push(overview(elem).find('.team .long').text());
        });

        const playerPhysical = overview('.pdcol3 li')
        let playerHeight, playerWeight
        playerPhysical.each((idx, elem) => {
            const key = overview(elem).find('.label').text();
            const value =  overview(elem).find('.info').text();

            if (key.toLowerCase() === 'height') playerHeight = value
            else if (key.toLowerCase() === 'weight') playerWeight = value
        });

        await page.goto(`${url}/stats`, { waitUntil : ['load','domcontentloaded','networkidle0','networkidle2'] });
        await page.waitForSelector('body');
        const statsPage = await page.content();

        const stats = cheerio.load(statsPage);

        let player = {};
        const playerAppearances = Number(stats('.statappearances').text());
        const playerGoals = Number(stats('.statgoals').text());
        const playerWins = Number(stats('.statwins').text());
        const playerLosses = Number(stats('.statlosses').text());

        player = {
            'name': playerName,
            'country': playerCountry,
            'birth': playerBirth,
            'teams': teams,
            'playerHeight': playerHeight ? playerHeight : null,
            'playerWeight': playerWeight ? playerWeight : null,
            'appearances': playerAppearances,
            'goals': playerGoals,
            'wins': playerWins,
            'losses': playerLosses,
        };        

        playerNormalStats = stats('.normalStat');

        playerNormalStats.each((idx, elem) => {
            try {
                const statKey = stats(elem).find('.normalStat .stat').text().split(' ')[0].replace(/\r\n|\r|\n/g, '').trim();
                const statValue = stats(elem).find('.normalStat .allStatContainer').text();

                player[statKey] = statValue.includes('%') ? statValue : Number(statValue);
            } catch (err) {
                console.error(err)
            }
        })

        return player;
    } catch (err) {
        console.error(err);
        return false;
    }
}

async function analyzePage() {
    let html = await getPlayerList();
    let playerList = [];
    let playersInformation = [];

    const $ = cheerio.load(html);
    const bodyList = $('tr');

    bodyList.each(async (idx, elem) => {
        console.log(`${idx}번째 작업 중`);

        const detailUrl = $(elem).find('td .playerName').attr('href')
        const playerName = $(elem).find('td .playerName').text();
        let playerPosition;

        $(elem).find('.hide-s').each((positionIdx, positionElem) => {
            if (!positionIdx) playerPosition = $(positionElem).text();
        });

        const playerCountry = $(elem).find('td .playerCountry').text();

        try {
            playerList.push({
                'playerDetailUrl': `https:${detailUrl.includes('/overview') ? detailUrl.replace('/overview', '') : detailUrl}`,
                'playerName': playerName,
                'playerPosition': playerPosition,
                'playerCountry': playerCountry,
            });
        } catch (err) {
            console.error(err)
        }
    });

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    for await (player of playerList) {
        let result = await getPlayerDetail(page, player['playerDetailUrl']);
        if (result) playersInformation.push(result);
    }

    await browser.close();

    console.log(playersInformation);

    
    const exportInformation = JSON.stringify({ 'data': playersInformation })
    const today = (new Date()).getTime()

    fs.writeFileSync(`./exports/${today}.json`, exportInformation)
}

analyzePage()

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     let result = await getPlayerDetail(page, 'https://www.premierleague.com/players/19970/Max-Aarons')
//     console.log(result)
// })()
