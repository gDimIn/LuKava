
const EventEmitter = require('events')
const express = require('express')
const path = require('path')
const app = express()

const PORT = 9005

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

let num = 5
let names = ["Dima", "Oleg","Julia","Katya","Sveta"] 


app.get('/', (req, res) =>{
    const data = {
        btn1: 'capuch',
        btn2: 'late'
    }
    res.render('indexLu', data)
})

app.get('/', (req, res) =>{
    
})

app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, ()=>{
    console.log(`Server started: https://lukavadu.web.app:${PORT}`)
})

/*fs.writeFile("./testjson.txt", "My string", () => {
    console.log('names: %s', names)
})*/
