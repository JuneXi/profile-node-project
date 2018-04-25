var ProfileSchema=require('../../entity/profile-schema');
//we are storing function definition in the variable
exports.updateProfile=function(req,res) {
	console.log("@)@)@)#)cool!!!!!!!!!!!!!!");
	var _id = req.body._id;
	var mobile = req.body.mobile;
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var gender = req.body.gender;
	var photo = req.body.photo;
	console.log("_id= "+_id);
	
	console.log("mobile= "+mobile);
	console.log("username= "+username);
	console.log("password= "+password);
	console.log("email= "+email);
	console.log("gender= "+gender);
	console.log("photo= "+photo);
	/// set username = 'starlord88' where 
	ProfileSchema.findByIdAndUpdate(_id, { username: username,password:password,email:email,gender:gender,photo:photo}, function(err, profile) {
		console.log(profile);
		if(err) {
			console.log(err);
		}else{
			var data={status:"success",message:"Hey! your profile has been updated successfully into the database!!!!!!!!!!!!!!!"};
			res.json(data);
		}
	});
};

exports.addProfile=function(req,res) {
	console.log("@)@)@)#)cool!!!!!!!!!!!!!!");
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var gender = req.body.gender;
	var photo = req.body.photo;
	console.log("username= "+username);
	console.log("password= "+password);
	console.log("email= "+email);
	console.log("gender= "+gender);
	console.log("photo= "+photo);
	
	var entity=new ProfileSchema();
	entity.username=username;
	entity.password=password;
	entity.email=email;
	entity.gender=gender;
	entity.photo=photo;
	
	entity.save(function(error,result) {
		if(error) {
			console.log(error);
		}else{
			var data={status:"success",message:"Hey! your profile has been uploaded successfully into the database!!!!!!!!!!!!!!!"};
			res.json(data);
		}
	}); //this will save data into the database
};


//?_id=
exports.getProfileById=function(req,res) {
	var _id = req.query._id;
	console.log("_id= "+_id);
	ProfileSchema.findById(_id,function(error,result){
		  if(error){
			  console.log(error);
		  }else{
			  res.json(result);
		  }
	});
};

exports.getAllProfiles=function(req,res) {
		ProfileSchema.find({},function(error,results){
			  if(error){
				  console.log(error);
			  }else{
				  res.json(results);
			  }
		});
};

exports.deleteProfileById=function(req,res) {
	var _id = req.query._id;
	console.log("_id= "+_id);
	//	ProfileSchema.findByIdAndRemove({_id},function(err){
	//}
	ProfileSchema.findOneAndRemove({_id:_id},function(err){
		  if(err){
			  console.log(err);
		  }else{
				var data={status:"success",message:"Hey! your profile has been deleted successfully into the database!!!!!!!!!!!!!!!"};
				res.json(data);
		  }
	});
};

exports.getFact=function(req,res) {
	var num = req.query.num;
	//req.getParameter("num");
	var sum=1;
	for(var x=2;x<=num;x++){
		sum=sum*x;
	}
	res.json({status:"success",result:"Factorial of "+num+" is "+sum});
};

exports.getFrog=function(req,res) {
    //creating JavaScript object in literal way
	var frog={name:"jacker",color:"green",price:34,location:"Fremont"};
	res.json(frog);  //res.json(frog);	 ->> first of all frog JavaScript is converted into JSON format and finally it is written into the response	
};

//Here data is coming in JSON format first time
exports.authUser=function(req,res) {
	var userData=req.body;
	var username=userData.username;
	var password=userData.password;
	console.log("username = "+username);
	console.log("password = "+password);
	if(username==='nagen' && password==='test') {
		   res.status(200).json({status:"success",message:"Hey you are my friend!!!!!!!!!!!!!!!!!"});
	}else{
		   res.status(200).json({status:"fail",message:"Sorry, you are my not friend!!!!!!!!!!!!!!!!!"});
	}
};




exports.greeting=function(req,res) {
	res.send("Hey!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
};

exports.cool=function(req,res) {
	console.log("path ="+__dirname);
	res.sendFile(__dirname+'/public/index.htm');
};