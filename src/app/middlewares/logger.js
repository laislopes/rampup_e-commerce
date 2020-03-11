module.exports = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`[${req.method}][URL:${req.originalUrl}]`);
  return next();
};
