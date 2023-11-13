const Users = require('../models/user').User;
const Todos = require('../models/todo').Todo;
const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken: (req, res, next) => {
        const auth = req.header('authorization');

        if (auth) {
            const token = auth.split(' ')[1];

            try {
                const payload = jwt.verify(token, process.env.TOKEN_SECRET);
                req.user = payload;
                next();
            } catch (err) {
                res.status(403).send({
                    message: 'Invalid token provided'
                });
            }
        } else {
            res.sendStatus(401);
        }
    }
}