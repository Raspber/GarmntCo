const jwt = require("jsonwebtoken");

module.exports = {
    authenticate(req, res, next) {
        console.log(req.cookies.token);
        jwt.verify(
            req.cookies.token,
            process.env.JWT_SECRET_KEY,
            (err, payload) => {
                if (err) {
                    res.status(401).json({ verified: false });
                } else {
                    next();
                }
            }
        );
    },
};
