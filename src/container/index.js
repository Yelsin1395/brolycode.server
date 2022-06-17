import { createContainer, asValue, asClass, asFunction, Lifetime } from 'awilix';
import configs from '../configs';

const container = createContainer();
container.register({ configs: asValue(configs) });
container.loadModules(
  [
    [
      'src/container/server.js',
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
      },
    ],
    [
      'src/routes/routes.js',
      {
        register: asFunction,
        lifetime: Lifetime.SINGLETON,
      },
    ],
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
