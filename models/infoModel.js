const mongoose=require('mongoose')

const infoSchema=mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})


module.exports=mongoose.model("Student",infoSchema)
