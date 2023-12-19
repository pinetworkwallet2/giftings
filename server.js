require('dotenv').config()
const path = require('path')
const cors = require('cors')
const express = require('express')
const { login, register, addCard, getProfile, logout, getCards } = require('./controller/user')
const mongoose = require('mongoose')
const session = require('express-session');
const auth = require('./middleware/auth')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({origin: "*"}))


app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
}));

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.post('/login', login)
app.post('/register', register)
app.post('/addCard', addCard)
app.get('/profile', [auth],getProfile)
app.get('/cards', [auth],getCards)
app.get('/logout',logout)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


app.listen(port, ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Database connected!'))
    console.log(`Server running on port ${port}`)
})