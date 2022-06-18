import { Router } from 'express';

module.exports = function ({ directoryController }) {
  const router = Router();

  router.get('/:path?', directoryController.getContentDirectory);
  router.post('/create/:path?', directoryController.createDirectory);
  router.delete('/delete/:path?', directoryController.deleteDirectory);

  return router;
};
