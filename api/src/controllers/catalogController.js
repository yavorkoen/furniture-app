const router = require('express').Router();
const catalogService = require('../services/catalogService.js');

router.get('/', async(req, res) => {
    let allData = await catalogService.getAll();
    res.json(allData);
})

router.post('/', (req, res) => {
    let furnitureData = req.body;
    catalogService.create(furnitureData);
    res.json({ok: true});
})



module.exports = router;