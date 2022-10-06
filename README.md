# Boas-vindas ao repositório do projeto api-fut!

Este projeto tem como objetivo: Conhecer a biblioteca Puppeteer, realizando testes de Web scraping;
<br>
coletando dados da classificação do campeonato Brasileiro serie A 2022

<br />

# Orientações

<details>
  <summary><strong>🐋 Rodar Aplicação</strong></summary>
  
  ## 👉 Com Node
 

  > npm install
  <br/>
  > npm run dev
  <br/>
  > faça uma requisição para a URL: http://localhost:3002/brasileirao/?serie=a
  <br/>
  > RETORNO

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

