module.exports = (err, req, res, next) => {
  let statusCode = err.status || 500
  let message = err.message
  if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
    statusCode = 400
    message = err.errors[0].message
  }
  
  res.status(statusCode).json({status : false, message})
}