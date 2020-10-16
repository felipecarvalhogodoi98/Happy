//import dependency
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//start express
const server = express()


    server
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

//connect server
server.listen(5500)