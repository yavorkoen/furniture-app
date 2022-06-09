const jwt = require('../utils/jwt.js');
const { SECRET } = require('../constants.js');


exports.auth = (req, res, next) => {
    let token = req.headers['x-authorization'];
    if (token) {
        jwt.verify(token, SECRET)
            .then(decodedToken => {
                req.user = decodedToken;
                res.locals.user = decodedToken;
                console.log('auth', req.user)
                next();
            })
            .catch(error => {
                res.status(401).res.json('You are not authorized');
            })
    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).res.json('You are not authorized');
    }
}

// exports.isGuest = (req, res, next) => {
//     if (!req.user) {
//         next();
//     } else {
//         res.redirect('/');
//     }
// }


