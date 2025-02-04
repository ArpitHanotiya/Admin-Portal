const {Schema, model} = require("mongoose");

const cosntactSchema = new Schema({
    username : {type:String, required:true},
    email : {type:String, required:true},
    message : {type:String, required:true},
});

// create a model or a collection 
const Contact = new model("Contact", cosntactSchema);
module.exports = Contact;