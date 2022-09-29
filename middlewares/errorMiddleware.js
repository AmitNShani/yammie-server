/**
 * if there is no
 * fddsgds
 */

const notFound = (req, res, next) => {
  /**
   * if there is no route found response status = 404 and continue to errorHandler.
   */
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  /**
   * handle errors and if res.statusCode didnt change => change the code to 500.
   */
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { notFound, errorHandler };
