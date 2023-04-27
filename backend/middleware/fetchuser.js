const jwt = require('jsonwebtoken');
const JWT_SECRET = "ThisisArt";

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "Invalid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Invalid token" });
    }
}

module.exports = fetchuser;