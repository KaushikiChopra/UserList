const express = require("express");
const { Router } = require("express")
const userRoutes = require('./src/routes/route');
const bodyParser = require('body-parser');

class Server {
    expressInstance
    router
  
    constructor() {
      this.expressInstance = express();
      this.router = Router({ mergeParams: true });
      this.expressInstance.use(bodyParser.json());
      this.expressInstance.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
    
        next();
    });
      this.expressInstance.use(bodyParser.urlencoded({ extended: true }))

      this.expressInstance.use('/api/v1', userRoutes)
     
     
    }
}

module.exports = Server;