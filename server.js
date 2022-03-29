
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const app=require('./app')

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("database connected")
})

app.listen(process.env.PORT,()=>{
    console.log("connection started at port "+ process.env.PORT)
})