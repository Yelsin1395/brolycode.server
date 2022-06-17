import figlet from 'figlet';
import { errorLog } from './utils';
import container from './container';
const app = container.resolve('server');

async function appStart() {
  try {
    console.log(JSON.stringify(container.registrations));
    figlet('JESUSYELSINBROLY', (error, result) => {
      console.log(error || result);
    });

    await app.start();
  } catch (error) {
    console.log(error);
    return errorLog(error);
  }
}

appStart();
