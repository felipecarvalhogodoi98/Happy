//import dependency
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//start express
const server = express()


    server
    //use body of request
    .use(express.urlencoded({extended: true}))
    //using statistical files
    .use(express.static('public'))
    //template engine config
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //create route
    .get('/', pages.index )
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//connect server
server.listen(5500)