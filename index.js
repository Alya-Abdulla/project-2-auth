const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
require('dotenv').config()
const bodyParser = require('body-parser')
const { route } = require('./controllers/posts')
const methodOverride = require('method-override')
// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

// AUTHENTICATION MIDDLEWARE
app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else res.locals.user = null
    next()
})

// CONTROLLERS
app.use('/users', require('./controllers/users'))
app.use('/posts', require('./controllers/posts'))
app.use('/comments', require('./controllers/comments'))

// ROUTES
app.get('/', (req, res)=>{
    res.render('home')
})

//static image folder
// app.use('/Images', express.static('./Images'))
// app.use('/upload', route)

app.listen(8000, ()=>{
    console.log('Project 2 Express Authentication')
})