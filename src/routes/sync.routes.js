import { Router } from 'express';

module.exports = function ({ syncController }) {
  const router = Router();

  router.post('/directory/:path?', syncController.syncDirectory);

  return router;
};
