const router = require('express').Router()
const UserController = require('../controllers/UserController.js')
const JobRouter = require('./jobRoute.js')

router.get('/', (req, res, next) => {
  res.status(200).json({status : 'sukses', message : 'Hello'})
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use('/jobs', JobRouter)

module.exports = router