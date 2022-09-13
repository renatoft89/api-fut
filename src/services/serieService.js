const serieModels = require("../models/serieModels")

const serieAservice = async (serie) => {
  const result = await serieModels(serie);
  return result;
}

module.exports = serieAservice;