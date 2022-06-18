import { errorLog } from '../utils/response.util';

export const errorMiddleware = (err, req, res, next) => {
  const httpStatus = err.status || 500;
  return res.status(httpStatus).send(errorLog(err, httpStatus));
};

export const notFoundMiddleware = (err, req, res, next) => {
  const httpStatus = 404;
  const errorData = {
    message: 'Resource not found',
  };

  return res.status(httpStatus).send(errorLog(errorData, httpStatus));
};
