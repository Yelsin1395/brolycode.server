import express from 'express';
import { errorLog } from '../utils/response.util';

export default class Server {
  constructor({ configs, routes }) {
    this.configs = configs;
    this._express = express().use(routes);
  }

  async start() {
    try {
      const { PORT, APPLICATION_NAME } = this.configs;

      return this._express.listen(PORT, () => {
        console.log(`${APPLICATION_NAME} running on port ${PORT}`);
      });
    } catch (error) {
      console.error(error);
      return errorLog(error);
    }
  }
}
