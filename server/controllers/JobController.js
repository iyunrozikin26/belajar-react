const {Job, User, Company} = require('../models')

module.exports = class Controller {
  static getAllJobs (req, res, next) {
    Job.findAll({
      include : [{
        model : User,
        attributes : ['email','role', 'phoneNumber', 'address']
      }, {
        model : Company
      }]
    })
      .then((result) => {
        res.status(200).json({status : true, data : result})
      }).catch((err) => {
        next(err)
      });
  }
}