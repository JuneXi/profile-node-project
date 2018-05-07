/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
var mongoose = require('mongoose');
//@Table(name="owoeoe_tbl")
var UserSchema  = new mongoose.Schema({
username: { type: String,required: true, unique: true },
password: { type: String},
email: { type: String},
role: { type: Number},
doe: {type: Date},
dom: {type: Date},
},{collection: 'users'});

//on every save, add the date
UserSchema.pre('save', function(next) {
		// get the current date
		var currentDate = new Date();
		// change the updated_at field to current date
		this.dom = currentDate;
		// if created_at doesn't exist, add to that field
		if (!this.doe){
		  this.doe = currentDate;
		} 
		next();
});


//Add this line to make it model
//this most important to created model for the schema
var User=mongoose.model('User', UserSchema);
module.exports=User;