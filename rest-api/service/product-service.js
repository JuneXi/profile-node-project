var ProductSchema=require('../../entity/product-schema');

exports.addProduct=function(req,res) {
	var product=req.body;
	var entity=new ProductSchema();
	entity.pid=product.pid;
	entity.name=product.name;
	entity.image=product.image;
	entity.price=product.price;
	entity.store=product.store;
	entity.mfg=product.mfg;
	entity.category=product.category;
	entity.save(function(error,result) {
		if(error) {
			console.log(error);
			var data={status:"fail",message:"Hey! your product has not been uploaded successfully into the database!!!!!!!!!!!!!!!"};
			res.status(500).json(data);
		}else{
			var data={status:"success",message:"Hey! your product has been uploaded successfully into the database!!!!!!!!!!!!!!!"};
			res.status(200).json(data);
		}
	}); //this will save data into the database
};

	exports.getAllProducts=function(req,res) {
		ProductSchema.find({},function(error,results){
			  if(error){
					var data={status:"fail",data:"Sorry there is some problem!"};
				    res.status(500).json(data);
			  }else{
			   		var data={status:"success",data:results};
					//res.status(200).json(data);
					res.status(200).json(results);
			  }
	});
};
