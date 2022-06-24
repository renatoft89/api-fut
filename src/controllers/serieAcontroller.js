const serieAservice = require('./');

const serieAcontroller = async (req, res, next) => {
  try {
    const result = await serieAservice.createTabela();

    return res.status(200).json({teste: 'teset'});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = serieAcontroller;