const tabela = require("../scraping");

const serieAmodels = async () => {
  const result = await tabela()
  // console.log(result);
  return result;
};

module.exports = serieAmodels