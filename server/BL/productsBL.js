const productsModel=require('../models/productsModel');

exports.getAllProducts = () => {
  return new Promise((resolve,reject) => 
  {
    productsModel.find({},function(err,data)
    {
      if(err)
      {
        reject(err);
      }
      else
      {
        resolve(data)
      }
    })
  });
};


exports.getProductByID = (_id) => {
  return new Promise((resolve,reject) => {
    productsModel.findById(_id,function(err,data)
    {
      if(err)
      {
        reject(err);
      }
      else
      {
        resolve(data)
      }
    })
  });
};

exports.createProduct = (obj) => {
  return new Promise((resolve,reject) => {
      let product=new productsModel(
        {
          _id:obj._id,
          name:obj.name,
          price:obj.price,
          img:obj.img
        });
        product.save(function(err)
        {
          if(err)
        {
          reject(err);
        }
        else
        {
          resolve("created")
        }
        })
  });
};


exports.updateProduct = (_id, obj) => {
  return new Promise((resolve,reject) => {
    productsModel.findByIdAndUpdate(_id,
      {
        _id:obj._id,
        name:obj.name,
        price:obj.price,
        img:obj.img
      },function(err)
      {
        if(err)
        {
          reject(err);
        }
        else
        {
          resolve("updated")
        }
      })
  });
};

exports.deleteProduct = (_id) => {
  return new Promise((resolve) => {
    productsModel.findByIdAndDelete(_id,function(err)
    {
      if(err)
      {
        reject(err);
      }
      else
      {
        resolve("deleted")
      }
    })
  });
};




