const userImage = require('../../models/userImages')

const { v4 } = require('uuid')


const createImage = async (file, mimeType, userId) => {
    let id = v4()
    const { name, data:{buffer} } = file;
    return await userImage.create({ id : id, userId : userId, imageType:mimeType, imageName : name, imageData:buffer});
  };

  const getUserImage = async (userId) => {
      try {
     
     
     } catch (error) {
      return res.status(500).send(error.mesage);
     }
     };
    
       

    
  



  module.exports = {createImage, getUserImage}