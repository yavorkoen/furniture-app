const router = require('express').Router();
const userService = require('../services/userService.js');


router.post('/register', async (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    try {
        let user = await userService.register({ email, password });
        let accessToken = await userService.createToken(user);
       
        res.json({
            _id: user._id,
            email: user.email,
            accessToken
        })
    }catch(error){
        res.json({
            type: 'error',
            message: error.message
        });
    }

})

router.post('/login', async (req, res) => {
    let {email, password} = req.body;
    try{
        let user = await userService.login({email, password});
        console.log("user", user);
        let accessToken = await userService.createToken(user);
        console.log("token", accessToken);
        res.json({
            _id: user._id,
            email: user.email,
            accessToken, 
        })
    }catch(error){
        res.json({
            type: 'error',
            message: error.message
        });
    }
})


module.exports = router;