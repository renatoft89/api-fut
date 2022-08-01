require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => console.log('Online Port: ', PORT, `http://localhost:${PORT}/brasileirao`));