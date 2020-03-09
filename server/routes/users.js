var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')

var  userSchema = require('../models/userSchema')

mongoose.connect('mongodb://127.0.0.1:27017/db_demo')

mongoose.connection.on('connected',function(){
    console.log('connected success')
})

mongoose.connection.on('error',function(){
    console.log('connected fail')
})

mongoose.connection.on('disconnected',function(){
    console.log('connected disconnected')
})


//  userSchema.find({},function(err, doc){ 
//     if(err) {
//         console.log(err.message)
//     }else{
//         console.log(doc)
//     }
// })



router.get('/info', function(req, res, next) {
   

  // res.send('respond with a resource');
  userSchema.find({},function(err,doc){
            if(err){
            	res.json({
            		status:'1',
            		msg:err.message
            	})
            }else{
            	res.json({
            		status:'0',
            		msg:'',
            		result:{
                         count:doc.length,
                         list:doc
            		}
            	})
            }
  })
});


router.post('/login',function(request,response,next){
         
         var param={
         	email:request.body.email,
         	pwd:request.body.pwd
         }

        userSchema.find({param},function(err,doc){
             if(err){
             	response.json({
           		status:"1",
           		err:err.message
                	})
             }
             if(doc){
             	// res.cookie('userId',doc._id,{
           		 //    path:'/',
           			// maxAge: 1000*60*60*24*10
           			// })
             	response.json({
           		status:"0",
           		msg:''
                	})
             }

        })
          
        
})
module.exports = router;
