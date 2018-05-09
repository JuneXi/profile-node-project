var nodemailer = require('nodemailer');
var UserSchema=require('../../entity/user-schema');
var ProfileSchema=require('../../entity/profile-schema');

/**
 * 
 */
exports.forgetPassword=function(req,res) {
	var pusername=req.body.username;
	ProfileSchema.find({username:pusername},function(error,results){
		 var data={};
		if(error){
			  console.log(error);
			  data={status:"fail",message:error};
			  res.status(500).json(data);
		  }else{
			  if(results.length===0) {
				  	data={status:"fail",message:"Sorry , this user does not exist into the database"};
			  }else{
				  data={status:"pass",message:"Password is emailed your successfully, please check your email"};
				  var password=results[0].password;
				  var email=results[0].email;
				  //write code to send email
				//write code to send the email
				  //Creating instance of the transporter	
				  var transporter = nodemailer.createTransport({
						 service: 'gmail',
						 auth: {
						        user: 'desibankproject@gmail.com',
						        pass: 'desibank@123'
						    }
					});
				  //defining the mail options
				  var mailOptions = {
						  from: 'nagen@synergisticit.com', // sender address
						  to: email, // list of receivers
						  subject: 'Regarding your password in our database...........', // Subject line
						  html: '<p>Dear  '+pusername+"</p><br/><br/> Your password is  "+password+" <br/><br/> Thanks <br/> Nagendra"// plain text body
						};

				  transporter.sendMail(mailOptions, function (err, info) {
								   if(err) {
								     console.log(err);
								   } 
								   else {
									    console.log("_@_@_@)@@*sending email............");
									   console.log(info);
								   } 
					});
					
			  }
			  console.log("_@_@_@)@@*sending response............");
			  res.status(200).json(data);
		  }	  
	});
};

exports.authUser=function(req,res) {
	var pusername=req.body.username;
	var ppassword=req.body.password;
	ProfileSchema.find({username:pusername,password:ppassword},function(error,results){
		 var data={};
		if(error){
			  console.log(error);
			  data={status:"fail",message:error};
			  res.status(500).json(data);
		  }else{
			  if(results.length===0) {
				  	data={status:"fail",message:"Sorry , this user does not exist into the database"};
			  }else{
				  data={status:"pass",message:"Congratulations ,You are a &&&&&&&&^#)))))))))))))))))))))))))))))))))valid user!"};  
			  }
			  res.status(200).json(data);
		  }
	});
};

exports.sentEmailVarification=function(req,res) {
	var user=req.body;
	var entity=new UserSchema();
	var email=user.email;
	var message=user.message;
	
	//write code to send the email
	var transporter = nodemailer.createTransport({
		 service: 'gmail',
		 auth: {
		        user: 'desibankproject@gmail.com',
		        pass: 'desibank@123'
		    }
		});
	
	var mailOptions = {
			  from: 'nagen@synergisticit.com', // sender address
			  to: email, // list of receivers
			  subject: 'Regarding verify your email............', // Subject line
			  html: '<p>Test message which you can modify as per your  need!</p> : - - '+message// plain text body
			};
	
	  transporter.sendMail(mailOptions, function (err, info) {
			var data={};
		   if(err) {
		     console.log(err);
		 	 data={status:"error",message:err};
				res.status(200).json(data);
		   } 
		   else {
			   console.log(info);
			    data={status:"success",message:"Hey! your email has been sent successfully to your email!!!!!!!!!!!!!!!"};
				res.status(200).json(data);
		   } 
		});
	

};

