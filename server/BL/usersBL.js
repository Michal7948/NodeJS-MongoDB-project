const usersModel=require('../models/usersModel');

exports.getAllUsers = () => {
  return new Promise((resolve,reject) => 
  {
    usersModel.find({},function(err,data)
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


exports.getUserByID = (_id) => {
  return new Promise((resolve,reject) => {
    usersModel.findById(_id,function(err,data)
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

exports.createUser = (obj) => {
  return new Promise((resolve,reject) => {
      let user=new usersModel(
        {
          _id:obj._id,
          name:obj.name,
          password:obj.password
        });
        user.save(function(err)
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


exports.updateUser = (_id, obj) => {
  return new Promise((resolve,reject) => {
    usersModel.findByIdAndUpdate(_id,
      {
        _id:obj._id,
        name:obj.name,
        password:obj.password
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

exports.deleteUser = (_id) => {
  return new Promise((resolve) => {
    usersModel.findByIdAndDelete(_id,function(err)
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

