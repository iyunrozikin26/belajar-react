module.exports = (err, req, res, next) => {
  let statusCode = err.status || 500
  let msg = err.message

  res.status(statusCode).json({message : msg})
}