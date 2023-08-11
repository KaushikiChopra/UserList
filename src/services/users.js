
const User = require('../../models/user');
const { use } = require('../routes/route');
const {validateToken} = require("./../validator/jwtverify");
const jwt = require("jsonwebtoken");
const { v4 } = require('uuid')

const ACCESS_TOKEN_SECRET = 'secretkey'
const REFRESH_TOKEN_SECRET = 'secretkeyrefresh'
let refreshTokens = []

// SignUp user

const createUser = async (attributes) => {
  let id = v4()
  let {
    userName,
    password,
    phoneNumber,
    city,
    qualification

  } = attributes
  return await User.create({ id, userName, password, phoneNumber, city, qualification});
};

const getAllUser = async () => {
  return await User.findAll();
};
const getUserById = async (userId) => {
  return await User.findByPk(userId);
};

const updateUser = async (attributes, userId) => {
  let {
    userName,
    password,
    phoneNumber,
    city,
    qualification

  } = attributes
  const user = await User.findByPk(userId);
  if (!user) {
    return null;
  }
  user.userName = userName || user.userName;
  user.phoneNumber = phoneNumber || user.phoneNumber;
  user.city = city || user.city;
  user.qualification = qualification || user.qualification;
  user.password = password || user.password;
  await user.save();
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    return null;
  }
  await user.destroy();
  return user;
};


// login User
const loginUser = async (attributes) => {
  let {
    userName,
    password,
  } = attributes
  let find = await User.findOne({ where : {userName: userName, password: password}});
  if(find.password == password && find.userName  == userName) {
    jwt.sign(find.id, 'secret_key' , (err,token) => {
      if(token){
        find.token = token;
        find.save()
      }
    })
}
if(find.token != "") return find.token;
}


//userHomepage 
const userHomePage = async (req,token) => {
  return await User.findOne({where : {token:token}});
};


// userLogout
const userLogout = async (req,res,token) => {
let find = await User.findOne({where : {token:token}});
const authHeader = req.headers["authorization"];

jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
if (logout) {
find.token = "";
find.save()
}
});
if(find.token == "")
return {message :'You have been Logged Out' }
}

  




module.exports = { getAllUser, createUser, getUserById, updateUser, deleteUser, loginUser, userHomePage, userLogout }