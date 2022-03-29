const express=require('express')
const app=express()
app.use(express.json())
const infoRoute =require('./routes/infoRoute')


app.use('/api/v1/students',infoRoute)

module.exports=app