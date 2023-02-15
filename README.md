# Boas-vindas ao repositório do projeto api-fut!

Este projeto tem como objetivo: Conhecer a biblioteca Puppeteer, realizando testes de Web scraping;
<br>
coletando dados da classificação do campeonato Brasileiro serie A 2023

## Stacks

- node.js
- express
- puppeter

<br />
# Orientações

<details>
  <summary><strong>🐋 Rodar Aplicação</strong></summary>
  
  ## 👉 Com Node
 

  1 - npm install
  <br/>
  2 -  npm run dev
  <br/>
  3 - faça uma requisição para a URL: http://localhost:3002/brasileirao/?serie=a
  <br/>
  4 - RETORNO

  {
    <br/>
      'clubes': ["Palmeiras - SP","Internacional - RS","Fluminense - RJ","Corinthians - SP","Flamengo - RJ","Athletico Paranaense - PR","Atlético Mineiro - MG","América Fc Saf - MG","Fortaleza - CE","Red Bull Bragantino - SP","Goiás - GO","Botafogo - RJ","Santos - SP","São Paulo - SP","Ceará - CE","Coritiba - PR","Cuiabá Saf - MT","Atlético - GO","Avaí - SC","Juventude - RS"],
    <br/>
      'pontos': [...],
    <br/>
      'jogos':[...],
    <br/>
      'escudos': [...]
    <br/>
  }

