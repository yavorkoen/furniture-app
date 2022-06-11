const router = require('express').Router();
const userService = require('../services/userService.js');


router.post('/register', async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let user = await userService.register({ email, password });
        let accessToken = await userService.createToken(user);

        res.json({
            _id: user._id,
            email: user.email,
            accessToken
        })
    } catch (error) {
        next(error);
    }

});

router.post('/login', async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let user = await userService.login({ email, password });
        let accessToken = await userService.createToken(user);
        res.json({
            _id: user._id,
            email: user.email,
            accessToken,
        })
    } catch (error) {
        // console.log(error)
        next(error);
    }
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
})


module.exports = router;