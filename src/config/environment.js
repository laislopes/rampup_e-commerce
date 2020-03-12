const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  base_url: process.env.BASE_URL,
};
