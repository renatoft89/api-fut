const tabela = require("../scraping");

const serieAmodels = async () => {
  const result = await tabela()
  console.log({model: "xablau"});
  return result;
};

module.exports = serieAmodels