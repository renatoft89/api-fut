const serieAservice = require('../services/serieAservice');

const serieAcontroller = async (req, res, next) => {
  try {
    const result = await serieAservice();
    
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = serieAcontroller;