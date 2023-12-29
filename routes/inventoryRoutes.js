const express = require('express');
const authMiddelware = require('../middlewares/authMiddelware');
const { createInventoryController, getInventoryController, getDonorsController, getHospitalController, getOrganisationController, getOrganisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');

const router = express.Router();

//routes
//ADD Inventory || POST
router.post('/create-inventory',authMiddelware,createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddelware,getInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-recent-inventory',authMiddelware,getRecentInventoryController);


//GET Hospital BLOOD RECORDS
router.post('/get-inventory-hospital',authMiddelware,getInventoryHospitalController);


//GET DONAR RECORDS
router.get('/get-donors',authMiddelware,getDonorsController);

//GET HOSPITAL RECORDS
router.get('/get-hospitals',authMiddelware,getHospitalController);

//GET organisation RECORDS
router.get('/get-organisation',authMiddelware,getOrganisationController);

//GET organisation RECORDS
router.get('/get-organisation-for-hospital',authMiddelware,getOrganisationForHospitalController);


module.exports = router