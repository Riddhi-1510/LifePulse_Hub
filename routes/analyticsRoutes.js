const express = require('express');
const authMiddelware = require('../middlewares/authMiddelware');
const { bloodGroupDetailsController } = require('../controllers/analyticsController');

const router = express.Router();



//GET Blood Data
router.get('/bloodGroup-data',authMiddelware,bloodGroupDetailsController);


module.exports = router