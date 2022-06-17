import { Router } from 'express';

module.exports = function ({ homeController }) {
  const router = Router();

  router.get('/', homeController.index);

  return router;
};
