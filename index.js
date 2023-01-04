// MODULES
const puppeteer = require("puppeteer");
//const rwClient = require("./TwitterClient.js");
const cronjob = require("cron").CronJob;

//Should include company name/URL, funding amount, funding round


// Url where we get and scrape the data from
const url = "https://www.crunchbase.com/discover/funding_rounds/d7cab71c9a3e0cd03a9dba5a2df25a6a";

//
let browser;
(async () => {
    browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ],
        headless: false,
      });

    const [page] = await browser.pages();
    const $ = (...args) => page.waitForSelector(...args);
    const text = async (...args) =>
        (await $(...args)).evaluate(el => el.textContent.trim());
    await page.goto(url, {waitUntil: "domcontentloaded"}, {timeout: 0});
    const info = {
        companyName: await text(".non-select-column .ng-star-inserted .component--field-formatter "),
    };
    console.log(info.companyName);
})()
