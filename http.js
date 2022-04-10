const http = require('http')
const EventEmitter = require('events')
const PORT = process.env.PORT || '5000'
const emiter = new EventEmitter()
const Router = require('./Framework/framework')
const Application = require('./Framework/Application')

const app = new Application()

const router = new Router()

router.get('/users',(req, res)=>{
    res.end('YOU SEND REQ /USERS')
})

app.listen(PORT,() => console.log(`server startet on port: ${PORT}`))