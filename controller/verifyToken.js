const jwt = require('jsonwebtoken');

exports.verifyAdmin = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.ADMIN_TOKEN);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
}

exports.verifyUser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.USER_TOKEN);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};