const compose = require('compose-middleware').compose;
const {errorHandler , notFound , requestLoggerMiddleware} = require('./middlewares');

const middleware = compose([
  notFound,
  errorHandler,
  requestLoggerMiddleware
]);

module.exports = {
  middleware
};