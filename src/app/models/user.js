var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email:{type:String, default : '', required:true},
    password:{type:String, default : '', required:true},
    idDeleted:{type:Boolean, default : false},
    signUpDate: {type:Date, default : Date.now()}

});
//Registro SIGnUP
UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

//Login SIGnUP
UserSchema.methods.ValidPassword = function(password){
    return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model('User', UserSchema);

