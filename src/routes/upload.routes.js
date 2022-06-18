import { Router } from 'express';
import fileUpload from 'express-fileupload';

module.exports = function ({ uploadController }) {
  const router = Router();

  router.post('/:path?', fileUpload(), uploadController.uploadFiles);

  return router;
};
