if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = {
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  PORT: process.env.PORT,
};
