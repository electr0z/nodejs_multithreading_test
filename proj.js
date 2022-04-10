const path = require('path')

console.log(__filename)
console.log(__dirname)

console.log(path.join(__dirname, '..','..','..','..','..'))
console.log(path.resolve('first','second','third'))
const fullpath = path.resolve(__dirname,'first','second','third.js')

console.log('Парсинг патча:', path.parse(fullpath))

//------------------------------------------------------------------

const siteUrl = 'https://localhost:8080/users?id=5123'

const url = new URL(siteUrl)

url.username = 'ws'
url.password = 'ws'

console.log(url)