const router = require('express').Router();
const catalogService = require('../services/catalogService.js');
const { isAuth } = require('../middlewares/authMiddleware.js');
const querystring = require('querystring');

router.get('/', async (req, res) => {
    if(req.query.where) {
        let furniture = await catalogService.getOwn(req.user._id);
        res.json(furniture);
    }else{
        let allData = await catalogService.getAll();
        res.json(allData);
    }
});

router.post('/', isAuth, (req, res) => {
    let furnitureData = req.body;
    catalogService.create({ ...furnitureData, _ownerId: req.user._id });

    res.json({ ok: true });
});

router.get('/:furnitureId', async (req, res) => {
    let id = req.params.furnitureId;
    let furniture = await catalogService.getOne(id);
    res.json(furniture);
});

router.put('/:furnitureId',  async (req, res) => {
    let id = req.params.furnitureId;
    let updatedData = req.body;
    await catalogService.update(id, updatedData);
    res.json({ok: true});
});

router.delete('/:furnitureId', async (req, res) => {
    let id = req.params.furnitureId;
    await catalogService.deleteFurniture(id);
    res.json({ok: true});
});

router.get('/', async (req, res) => {

});


module.exports = router;