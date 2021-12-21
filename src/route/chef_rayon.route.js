const express = require('express');
const router = express.Router();

const { 
    GetChefRayon,
    getChefByID, 
    CreateChefRayon, 
    DeleteChefRayonByID, 
    UpdateChefRayon
} = require('../controller/chef_rayon.controller');

router.get('/', GetChefRayon);
router.get('/:id', getChefByID);
router.post('/create', CreateChefRayon);
router.delete('/delete/:id', DeleteChefRayonByID);
router.put('/update/:id', UpdateChefRayon);

module.exports = router;