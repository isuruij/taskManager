const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id:Number, 
    time:String,  
    discription:String,  
});    

// Assign userSchema to a  odel called 'User'
const User = mongoose.model('User',userSchema);

module.exports = User;
    