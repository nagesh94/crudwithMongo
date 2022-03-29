const express=require('express');
const app=require('./../app')
const infoController=require('./../controllers/infoController')

const router=express.Router();

router.route('/')
.get(infoController.getAllStudent)
.post(infoController.createStudent)

router.route('/:id')
.get(infoController.getStudent)
.patch(infoController.updateStudent)
.delete(infoController.deleteStudent)


module.exports=router