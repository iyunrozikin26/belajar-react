const Controller = require('../controllers/JobController')
const { checkLogin } = require('../middlewares/authentication')

const router = require('express').Router()

router.get('/', Controller.getAllJobs)
router.post('/', checkLogin, Controller.addJobs)

module.exports = router