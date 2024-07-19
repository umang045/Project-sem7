const mongoose = require("mongoose");

var propertySchema = new mongoose.Schema({
    name : {
       type :  String,
        require : true,
    },
    department : {
        type :  String,
        require : true,
    },
    unitnumber : {
        type : String,
        require : true,
    },
    buildingname:{
        type :  String,
        require : true
    }, 
    electricnum :{
        type :  String,
        require : true
    },
    gasslinenum :{
        type :  String,
        require : true
    },
    makanuse : {
        type : Boolean,
        require : true,
        default : true
    },
    firesafety :{
        type : Boolean,
        require : true
    },
    firenoc :{
        type : String,
        require : true
    },
    totalbill:{
        type : Number,
    
    },
    oldmilkatnum : {
        type : Number
    },
    newmilkatnum : {
        type : Number
    },
    billnum1 : {
        type : String
    },
    billnum2 : {
        type : String
    }


},{
    timestamps : true
})

module.export = mongoose.model('Property',propertySchema)