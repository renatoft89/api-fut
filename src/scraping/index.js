const puppeteer = require('puppeteer');

const tabela = async () => { 
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a');
    
    const tabelaSerieA = await page.evaluate(() => {
      const clubes = Array.from(document.querySelectorAll('table tr td span.hidden-xs', table => table.textContent)).map(club => club.innerText); 
      const pontos = Array.from(document.querySelectorAll('table tr.expand-trigger th', table => table.textContent)).map(pt => pt.innerText);
      const escudos = Array.from(document.querySelectorAll('table tr.expand-trigger td img.icon.escudo.m-r-10', table => table.textContent)).map(img => img.getAttribute('src'));
      const jogos = Array.from(document.querySelectorAll('table tr.expand-trigger td:nth-child(3)', table => table.textContent)).map(jogos => jogos.innerText);
      return {
        clubes,
        pontos, 
        escudos,
        jogos }
    })
    await browser.close();
    return tabelaSerieA;
  };

module.exports = tabela;