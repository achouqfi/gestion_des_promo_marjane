const express = require('express');
const router = express.Router();

const { 
    GetPromo,
    getChefByID, 
    CreatePromo, 
    DeletePromoByID, 
    UpdatePromo
} = require('../controller/chef_rayon.controller');

router.get('/', GetPromo);
router.get('/:id', getPromoByID);
router.post('/create', CreatePromo);
router.delete('/delete/:id', DeletePromoByID);
router.put('/update/:id', UpdatePromo);

module.exports = router;