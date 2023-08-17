var http = require('http');
const psql = require('./config/db')
const express = require("express");
const userRoutes = require('./src/routes/route');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
//create a server object:
http.createServer(function (req, res) {
})
    
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.use('/', userRoutes);

let port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







 

psql.psqlDbConnect();
