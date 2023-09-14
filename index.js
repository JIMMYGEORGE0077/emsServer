// connect env file
require('dotenv').config()

// import router
const router=require('./routes/router')


const express=require('express')
const cors=require('cors')
// import db connection file
require('./database/connections')

const server=express()

// To link frontend
server.use(cors())

// To create json file to js file
server.use(express.json())
server.use(router)

// To create port to link
const port=4000 || process.env.port

// export uploads folder to client
server.use('/uploads',express.static('./uploads'))

server.listen(port,()=>{
    console.log(`______EMS server Started At Port Number ${port}_______`);
})

