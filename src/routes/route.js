const express = require('express')
const router = express.Router();
const userController = require('../controllers/users')
const userImageController = require('../controllers/userImage')

// signup routes
router.post('/user', userController.createUser)
router.get('/',userController.getAllUser)
router.get('/user/:userId', userController.getUserById)
router.put('/user/:userId', userController.updateUser)
router.delete('/user/:userId', userController.deleteUser)

// loginroutes
router.post('/login', userController.loginUser)


//homepage routes
router.get('/user/:userId', userController.getUserById)



// image route
router.post('/user/:userId/uploadImage', userImageController.createImage)
router.get('/user/:userId/uploadImage', userImageController.createImage)


module.exports = router;
