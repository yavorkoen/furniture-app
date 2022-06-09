const router = require('express').Router();
const catalogService = require('../services/catalogService.js');

router.get('/', async(req, res) => {
    console.log(req.headers['X-Authorization']);
    let allData = await catalogService.getAll();
    console.log(allData);
    res.json(allData);
})

router.post('/', (req, res) => {
    let furnitureData = req.body;
    catalogService.create(furnitureData);
    res.json({ok: true});
})



module.exports = router;