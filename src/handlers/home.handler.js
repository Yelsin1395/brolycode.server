import { payload } from '../utils';

export default class HomeHandler {
  constructor({ configs }) {
    this.appName = configs.APPLICATION_NAME;
  }

  index() {
    const message = `Welcome my server app ${this.appName} by BROLY DEV`;
    return payload({ status: 200, data: { message } });
  }
}
