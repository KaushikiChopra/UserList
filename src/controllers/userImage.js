const userImage = require('../services/userImage')


const createImage = async (req,res) =>{
 const { params: { userId} , file, body: { mimeType } } = req
   let creates = await userImage.createImage(file, mimeType,userId)
   res.status(200).json({status: 'OK', message: 'image uploaded!!!',data: creates});
}

const getUserImage = async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await userImage.getUserImage(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json({status: true,data: user});
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  };

module.exports = {createImage,getUserImage}