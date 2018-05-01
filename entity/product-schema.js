/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
var mongoose = require('mongoose');
//@Table(name="owoeoe_tbl")
var ProductSchema  = new mongoose.Schema({
pid: { type: String,required: true, unique: true },
name: { type: String},
image: { type: String},
price: { type: Number},
store: { type: String},
mfg: { type: String},
category: { type: String},
doe: {type: Date},
dom: {type: Date},
},{collection: 'products'});

//on every save, add the date
ProductSchema.pre('save', function(next) {
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
var Product=mongoose.model('Product', ProductSchema);
module.exports=Product;