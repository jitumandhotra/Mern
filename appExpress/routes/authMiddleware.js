const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.render('login', { error: 'Login to continue.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; 
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = verifyToken;
