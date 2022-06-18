import express from 'express';
import 'express-async-error';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { errorMiddleware, notFoundMiddleware } from '../middlewares/exception.middleware';

module.exports = function ({ homeRoutes, uploadRoutes, directoryRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  //middleware default
  apiRoutes
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan('dev'));

  //prefix route
  router.use('/by/JYBGR', apiRoutes);

  //middleware global setting
  router.use(errorMiddleware);
  router.use(notFoundMiddleware);

  //endpoints
  apiRoutes.use('/home', homeRoutes);
  apiRoutes.use('/upload', uploadRoutes);
  apiRoutes.use('/directory', directoryRoutes);

  return router;
};
