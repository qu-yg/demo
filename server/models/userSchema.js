var mongoose = require('mongoose')

var schema = mongoose.Schema

var user = new schema({
    'email': {type:String,unique:true,match:RegExp(/^\w+([-+.]\w+)@\w+([-.]\w+)*.\w+([-.]\w+){5,17}$/)},
    'phonenumber': {type:Number,unique:true,match:RegExp(/[0-9]{11}$/)},
    'pwd': {type:String,match:RegExp(/[a-zA-Z0-9_]{5,15}$/)}
})

module.exports = mongoose.model('user',user)