const {User} = require('../models')

module.exports = class Controller {
  static register(req, res, next){
    const data = {
      email : req.body.email,
      password : req.body.password,
      role : req.body.role,
      phoneNumber : req.body.phoneNumber,
      address : req.body.address
    }
    User.create(data)
      .then((result) => {
        res.status(200).json({status : true, data : {
          id : result.id,
          email : result.email,
          role : result.role,
          phoneNumber : result.phoneNumber,
          address : result.address
        }})
      }).catch((err) => {
        next(err)
      });
  }
}