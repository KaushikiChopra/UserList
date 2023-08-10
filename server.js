var http = require('http');
// const config = require('./config/config.json')
// //create a server object:
// http.createServer(function (req, res) {
   
//     res.end(); //end the response
// }).listen(3000, function () {
//     console.log("server start at port 3000"); //the server object listens on port 3000
// });



const express = require('express');


const psql = require('./config/db')

const expressServer = require( "./expressRouter");
const app = express();



// Instantiate the expressServer class
let expressInstance = new expressServer().expressInstance;
const port = 3000;

function startServer(newPort = port) {
  // Make port available within server
  expressInstance.set("port", newPort);

    // Create the HTTP Express Server
    const servers = http.createServer(expressInstance);
    console.log(`Server has started on port ${newPort}`);
    return servers;
}

const server = startServer();
server.listen(port);



// app.use(bodyParser.json());
// app.use('/', userRoutes);
// Add other route handlers for different resources here.

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




// sequelize
//   .sync()
//   .then(() => {
//     app.listen(3000, () => {
//       console.log('Server is running on http://localhost:3000');
//     });
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   });


 

psql.psqlDbConnect();
module.exports = startServer