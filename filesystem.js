const fs = require('fs')
const path = require('path')
const pathfile = path.resolve(__dirname,'testFILE.ext')
const pathfilecount = path.resolve(__dirname,'count.ext')
// console.log('start')
// // fs.mkdirSync(path.resolve(__dirname, 'dir','dir2','dir3'),{recursive:true})
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('gotovo')
// })
//
// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err){
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname,'test.txt'),'qwerty124', (err) => {
//
//     if(err){
//         throw err
//     }
//     console.log('file written')
//     fs.appendFile(path.resolve(__dirname,'test.txt'),' /n lolololol', (err) => {
//
//         if(err){
//             throw err
//         }
//         console.log('file edited')
//     })
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve,reject) => fs.writeFile(path, data, (err) => {
        if(err){
            return  reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve,reject) => fs.appendFile(path, data, (err) => {
        if(err){
            return  reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.readFile(path, {encoding:"utf-8"}, (err, data) => {
        if(err){
            return  reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.rm(path, (err) => {
        if(err){
            return  reject(err.message)
        }
        resolve()
    }))
}

const text = process.env.TEXT || ''

const start = Date.now()
console.log(start)
writeFileAsync(pathfile, text)
    .then(() => readFileAsync(pathfile))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(pathfilecount, `Количество символов: ${count}`))
    .then(() => removeFileAsync(pathfile))
    .catch(err =>  console.log(err))


console.log(Date.now() - start)



