if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

module.exports = {
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  PORT: process.env.PORT,
  HOME_CLOUD_STORAGE: process.env.HOME_CLOUD_STORAGE,
  CLONE_CLOUD_STORAGE: process.env.CLONE_CLOUD_STORAGE,
};
