import { createContainer, asValue, asClass, asFunction, Lifetime } from 'awilix';

//setting
import configs from '../configs';
import server from '../container/server';
import routes from '../routes';

const container = createContainer();
container.register({
  configs: asValue(configs),
  server: asClass(server).singleton(),
  routes: asFunction(routes).singleton(),
});
container.loadModules(
  [
    [
      'src/handlers/**/*.handler.js',
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
      },
    ],
    [
      'src/controllers/**/*.controller.js',
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
      },
    ],
    [
      'src/routes/**/*.routes.js',
      {
        register: asFunction,
        lifetime: Lifetime.SINGLETON,
      },
    ],
  ],
  {
    formatName: 'camelCase',
  }
);

export default container;
