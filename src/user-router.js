const Router = require('../Framework/framework')
const controller = require('./user-controller')

const router = new Router()

const users = [
    {id:1, name:'user1'},
    {id:2, name:'user2'}
]



router.get('/users', controller.getUsers)
router.POST('/users', controller.createUser)

module.exports = router