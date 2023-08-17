
const User = require('../../models/user');
const Image = require('../../models/userImages');
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
    qualification,
    role

  } = attributes
  let upperRole = role.toUpperCase()
  let existUser = await User.findAll({where: {userName : userName, password: password}})
  if(existUser.length == 0){
  //   if(upperRole == "ADMIN"){
  //     let existRole = await User.findAll({where: {role : role }})
  //     console.log("dddddddddddddddddddddddddd",existRole)
  //     for(let i=0; i<existRole.length; i++){
  //       if(existRole.userDetails[i].role.toUpperCase() == "ADMIN" ) return "Admin Role already exist"
  //     }
      
  // }
  let created  = await User.create({ id, userName, password, phoneNumber, city, qualification, role});
  return created
}
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
  let data = await User.findOne({where : {token:token}});
  const projects = await Image.findAll({
  })
  for(let i=0; i<projects.length;i++){
   let projectData = projects[i].imageData.toString('base64')
   projects[i].imageData = projectData
  }
  if(data){
    return {
      id : data.id,
      userName:data.userName,
    qualification : data.qualification,
    city : data.city,
    phoneNumber: data.phoneNumber,
    role: role,
    projects

   }
}

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