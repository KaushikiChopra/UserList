const jwt = require('jsonwebtoken');


function validateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null){ return res.sendStatus(403);}
    jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.status(404).json({ message: 'User Not Found'});
    req.user = user;
    next();
    });
    }
module.exports = {validateToken}