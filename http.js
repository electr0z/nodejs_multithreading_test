const PORT = process.env.PORT || '5000'
const Application = require('./Framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./Framework/parseJson')
const parseUrl = require('./Framework/parseUrl')
const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

app.listen(PORT,() => console.log(`server started on port: ${PORT}`))