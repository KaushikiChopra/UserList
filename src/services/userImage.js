const userImage = require('../../models/userImages')

const { v4 } = require('uuid')


const createImage = async (file, mimeType, userId) => {
    let id = v4()
    const { originalname, buffer } = file;
    return await userImage.create({ id : id, userId : userId, imageType:mimeType, imageName : originalname, ImageData:buffer });
  };

  const getUserImage = async (userId) => {
        try {
         const imagess = await userImage.findAll({
         include: [
          {
           model: userImage,
           as: "createdBy",
           },
          ],
         })
       .then(images => {
        images.map(image => {
           const projectImage = image.imageData.toString('base64')
           image['imageData'] = projectImage
          });
         return imagess;
        })
        .then(images => {
        return res.status(200).json({images: images})
       })
       } catch (error) {
        return res.status(500).send(error.mesage);
       }
    
       };

    
  



  module.exports = {createImage, getUserImage}