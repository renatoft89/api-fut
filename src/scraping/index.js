const puppeteer = require('puppeteer');

const tabela = async () => { 
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox'] ,
    });
    const page = await browser.newPage();
    await page.goto('https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a');
    
    const tabelaSerieA = await page.evaluate(() => {
      const clubes = Array.from(document.querySelectorAll('table tr td span.hidden-xs', table => table.textContent)).map(club => club.innerText); 
      const pontos = Array.from(document.querySelectorAll('table tr.expand-trigger th', table => table.textContent)).map(pt => pt.innerText);
      const escudos = Array.from(document.querySelectorAll('table tr.expand-trigger td img.icon.escudo.m-r-10', table => table.textContent)).map(img => img.getAttribute('src'));
      const jogos = Array.from(document.querySelectorAll('table tr.expand-trigger td:nth-child(3)', table => table.textContent)).map(jogos => jogos.innerText);
      const vitorias = Array.from(document.querySelectorAll('table tr.expand-trigger td:nth-child(4)', table => table.textContent)).map(vitorias => vitorias.innerText);
      const empates = Array.from(document.querySelectorAll('table tr.expand-trigger td:nth-child(5)', table => table.textContent)).map(empates => empates.innerText);
      const derrotas = Array.from(document.querySelectorAll('table tr.expand-trigger td:nth-child(6)', table => table.textContent)).map(derrotas => derrotas.innerText);

      return {
        clubes,
        pontos, 
        escudos,
        jogos,
        vitorias,
        empates,
        derrotas }
    })
    await browser.close();
    return tabelaSerieA;
  };

module.exports = tabela;