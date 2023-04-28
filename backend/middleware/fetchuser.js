const jwt = require('jsonwebtoken');
const JWT_SECRET = "ThisisArt";

const fetchuser = (req, res, next) => {
    const token = req.headers['auth-token'];
    if (!token) {
        res.status(401).send({ errors: "Invalid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ errors: "Invalid token" });
    }
}

module.exports = fetchuser;