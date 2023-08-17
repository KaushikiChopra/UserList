const userService = require('../services/users')


// sign Up User
const getAllUser = async (req,res) =>{
   let User = await userService.getAllUser()
   res.status(200).json({status: true, data: User});
}

const createUser = async (req,res) =>{
  const { body: attributes} = req
   let creates = await userService.createUser(attributes)
   if(creates){res.status(200).json({status: 'OK', message: 'user Created!!!',data: creates})}
   else{res.status(409).json({ message: 'User Already Exist'})}
}

const getUserById = async (req, res) => {
   try {
     const userId = req.params.id;
     const user = await userService.getUserById(userId);
     if (!user) {
       res.status(404).json({ error: 'User not found' });
     } else {
       res.json({status: true,data: user});
     }
   } catch (error) {
     res.status(500).json({ error: 'Failed to retrieve user' });
   }
 };

 const updateUser = async (req, res) => {
   try {
     
     const {body : attributes, params: userId } = req;
     const updatedUser = await userService.updateUser(attributes, userId);
     if (!updatedUser) {
       res.status(404).json({ error: 'User not found' });
     } else {
       res.json({status: true,data: updatedUser});
     }
   } catch (error) {
     res.status(500).json({ error: 'Failed to update user' });
   }
 };
 
 const deleteUser = async (req, res) => {
   try {
     const userId = req.params.id;
     const deletedUser = await userService.deleteUser(userId);
     if (!deletedUser) {
       res.status(404).json({ error: 'User not found' });
     } else {
       res.json({ message: 'User deleted successfully' });
     }
   } catch (error) {
     res.status(500).json({ error: 'Failed to delete user' });
   }
 };

 // login user
 
const loginUser = async (req, res) => {
  try {
    const { body: attributes} = req
    let users = await userService.loginUser(attributes)
    if (!users) {
      
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({status: true,data: users});
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

//User's homepage

const userHome = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let user = await userService.userHomePage(req,token)
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({status: true,data: user});
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

//userlogout 
const userlogout = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let user = await userService. userLogout(req,res,token)
    if (!user) {
      res.status(404).json({ error: 'Cannot logout' });
    } else {
      res.json({status: true,data: user});
    }
  } catch (error) {
    console.log("errr",error)

    res.status(500).json({ error: error });
  }
};




 
module.exports = {getAllUser, createUser, getUserById, updateUser, deleteUser, loginUser, userHome, userlogout}