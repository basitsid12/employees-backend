const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mongoose = require('mongoose');
const {employeeModel} = require('./Schema')

router.post('/signup', (req, res) => {
return new Promise(async (resolve, reject) => {
    try {
        const data = new employeeModel(req.body);
        await data.save()
        return resolve(res.json({result: 'success', message: 'body recieved'}))
    } catch(err) {
        return reject(res.json({result: 'failed', message: err }))
    }
})
})

router.post('/addEmployee', (req, res) => {
return new Promise(async (resolve, reject) => {
    try {
        const data = new employeeModel(req.body);
        await data.save()
        return resolve(res.json({result: 'success', message: 'body recieved'}))
    } catch(err) {
        return reject(res.json({result: 'failed', message: err }))
    }
})
})

router.post('/login',(req, res) => {
return new Promise(async (resolve, reject) =>{
    try{
        const employee = await employeeModel.findOne({email: req.body.email, password: req.body.password}).exec();
        if(employee) {
            return resolve(res.json({result: 'success', message: 'login successfull'}))
        } else {
            return resolve(res.json({result: 'failed', message: 'could not found user.'}))
        }
    }
    catch(err){
        return reject(res.json({result: 'failed', message: err }))
    }

})
})

router.get('/getEmployee' , (req, res) =>{
return new Promise(async (resolve, reject) =>{
    try{
        const employees = await employeeModel.find({}).exec()
        return resolve(res.json({result: 'success', message: employees}))
    }
    catch(err){
        return reject(res.json({result: 'failed', message: err }))
    }
})
})

router.put('/updateEmployee' , (req, res) =>{
return new Promise(async (resolve, reject) =>{
    try{
        const employees = await employeeModel.findByIdAndUpdate(req.query.id, req.body, {new: true}).exec();
        return resolve(res.json({result: 'success', message: employees}))
    }
    catch(err){
        return reject(res.json({result: 'failed', message: err }))
    }
})
})

router.delete('/deleteEmployee' , (req, res) =>{
return new Promise(async (resolve, reject) =>{
    try{
        const employees = await employeeModel.findByIdAndDelete(req.query.id).exec();
        return resolve(res.json({result: 'success', message: "document deleted successfully"}))
    }
    catch(err){
        return reject(res.json({result: 'failed', message: err }))
    }
})
})




module.exports = router;