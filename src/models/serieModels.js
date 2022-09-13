const tabela = require("../scraping");

const serieModels = async (serie) => {
  const result = await tabela(serie)
  // console.log(result);
  return result;
};

module.exports = serieModels