var nodemailer = require('nodemailer');
var UserSchema=require('../../entity/user-schema');
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

