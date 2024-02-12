const mongoose= require('mongoose')
const DataSchema = mongoose.Schema({
    Email :{type:String , unique:true , trim:true , lowercase:true},  //trim is for removing empty space
    FirstName :{type:String},
    LastName :{type:String},
    Mobile :{type:String},
    Password :{type:String },
    Photo :{type:String},
    Address:{type:String , require:true },
    CreateDate:{type:Date , default:Date.now()},

    isAdmin:{
        type:Boolean,
        default: false
    },
    isBanned:{
        type:Boolean,
        default: false
    }

},{versionKey:false})


const UsersModel = mongoose.model('users', DataSchema)

module.exports = UsersModel;