const serieAmodels = require("../models/serieAmodels")

const serieAservice = async () => {
  const result = await serieAmodels();
  return result;
}

module.exports = serieAservice;