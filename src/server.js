require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT || 3009;

app.get('/', (_request, response) => {
  response.json({ message: 'api ok...' });
});

app.listen(PORT, () => console.log('Online Port: ', PORT, `http://localhost:${PORT}/brasileirao?serie=b`));