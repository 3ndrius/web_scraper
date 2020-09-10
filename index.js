const puppeteer = require("puppeteer");

async function app() {
  const browser = await puppeteer.launch({headless: false });
  const page = await browser.newPage();
  await page.goto('https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch');
  const text = await page.evaluate(() => { 
    return document.querySelector('#wikiArticle p').innerText;
  });
  await browser.close();
  console.log("Console:", text)
  return text;
 }

app();