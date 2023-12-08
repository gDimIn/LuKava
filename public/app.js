
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
//app.set('views',path.join(__dirname, 'views'))

const indexRoute = require("./routes/index")
app.use('/', indexRoute)

let num = 5
let names = ["Dima", "Oleg","Julia","Katya","Sveta"] 


/*app.get('/', (req, res) =>{
    const data = {
        btn1: 'capuch',
        btn2: 'late'
    }
    res.render('indexLu', data)
})

app.get('/', (req, res) =>{
    
})*/

app.listen(PORT, ()=>{
    console.log(`Server started: https://lukavadu.web.app:${PORT}`)
})
