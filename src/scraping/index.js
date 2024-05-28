const puppeteer = require('puppeteer');

const tabela = async (serie) => { 
  const browser = await puppeteer.launch({
    // executablePath: '/usr/bin/chromium-browser',
    headless:false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage(serie);
    await page.goto(`https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-${ serie }`);
    // await page.goto(`https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-${serie}/`);

    const tabelaSerieA = await page.evaluate(() => {
      const clubes = Array.from(document.querySelectorAll('table tr td span.hidden-xs', table => table.textContent)).map(club => club.innerText); 
      

      return {
        clubes
     }
    })
    await browser.close();
    return tabelaSerieA;
  };

module.exports = tabela;