const Emiter = require('events')

const emitter = new Emiter()

emitter.on('message', (data, second, third) => {
    console.log(`Вы прислали сообщение: ${data}`)
    console.log(`аргумент 2: ${second}`)

})

const MESSAGE = process.env.message || ''

if (MESSAGE){
    emitter.emit('message', MESSAGE, 123)
}