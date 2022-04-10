const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'),(err, data) =>{
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

stream.on('data', (chunk) =>{
    console.log(chunk)
})

stream.on('open', () =>{
    console.log('начало чтения')
})
stream.on('close', () =>{
    console.log('конец чтения')
})
stream.on('error', (err) =>{
    console.log(`ошибка: ${err}`)
})

const writeblestream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

for (let i = 0; i < 20; i++) {

    writeblestream.write(i + '\n')
}
writeblestream.end()