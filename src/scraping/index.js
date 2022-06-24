
const tabela = () => {
  const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a');
    const tabelaSerieA = await page.evaluate(() => {
      const result = Array.from(document.querySelectorAll('table tr td span.hidden-xs', table => table.textContent)); 
      return result.map(td => td.innerText)
    })
    console.log(tabelaSerieA);
    await browser.close();
  })();
};

module.exports = tabela