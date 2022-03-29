const Student =require('./../models/infoModel')

exports.getAllStudent=async (req,res)=>{
    try{
        const info=await Student.find();
        res.status(200).json({
            status:"success",
            data:{
                info
            }
        })

    }catch (err){
        res.status(400).json({
            status:"failed",
            message:"bad request"
        })
    }
}

exports.createStudent=async (req,res)=>{
    try{
        const info=Student.create(req.body)
        res.status(200).json({
            status:"success",
            data:{
                info:req.body
            }
        })
    } catch (err){
        res.status(400).json({
            status:"failed",
            message:"bad request"
        })
    }
}

exports.getStudent=async (req,res)=>{
    try{
        const info = await Student.findById(req.params.id)
        res.status(200).json({
            status:"success",
            data:{
                info
            }
        })
    }catch (err){
        res.status(400).json({
            status:"failed",
            message:"student not found"
        })
    }
}

exports.updateStudent=async (req,res)=>{
    try{
        const info=await Student.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:"success",
            data:{
                info
            }
        })
    }catch (err){
        res.status(400).json({
            status:"failed",
            message:"student not found"
        })
    }
}

exports.deleteStudent=async (req,res)=>{
    try{
        await Student.findByIdAndDelete(req.params.id)
        res.status(404).json({
            status:"student information is deleted"
        })
    }catch (err){
        res.status(400).json({
            status:"failed",
            message:"student not found"
        })
    }
}