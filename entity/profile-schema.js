/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
var mongoose = require('mongoose');
//@Table(name="owoeoe_tbl")
var ProfileSchema  = new mongoose.Schema({
username: { type: String,required: true, unique: true },
email: { type: String},
password: { type: String},
photo: { type: String},
doe: {type: Date},
dom: {type: Date},
},{collection: 'profiles_data'});

//on every save, add the date
ProfileSchema.pre('save', function(next) {
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
var Profile=mongoose.model('Profile', ProfileSchema);
module.exports=Profile;