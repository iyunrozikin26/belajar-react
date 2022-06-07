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

  static addJobs(req, res, next){
    const data = {
      title : req.body.title,
      description : req.body.description,
      companyId : req.body.companyId,
      authorId : req.user.id,
      jobType : req.body.jobType
    }
    Job.create(data)
      .then((result) => {
        res.status(200).json({status : true, data : {
          id : result.id,
          title : result.title
        }})
      }).catch((err) => {
        next(err)
      });
  }
}