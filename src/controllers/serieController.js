const serieService = require('../services/serieService');

const serieController = async (req, res, next) => {

  const { serie } = req.query
  try {
    const result = await serieService(serie);
    
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = serieController;