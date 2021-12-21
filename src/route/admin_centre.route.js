const express = require('express');
const router = express.Router();

const { GetAdminCentre,getAdminByID , CreateAdmin, AdminByID, UpdateAdminCentre} = require('../controller/admin_centre_controller');

router.get('/', GetAdminCentre);
router.get('/:id', getAdminByID);
router.post('/create', CreateAdmin);
router.delete('/delete/:id', AdminByID);
router.put('/update/:id', UpdateAdminCentre)

module.exports = router;