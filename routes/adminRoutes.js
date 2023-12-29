const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const { getDonorListController, getHospitalListController, getORGListController, deleteDonorController } = require("../controllers/adminController");
const adminMiddelware = require("../middlewares/adminMiddelware");

//router object
const router = express.Router();
//Routes

//GET || DONOR LIST
router.get(
  "/donor-list",
  authMiddelware,
  adminMiddelware,
  getDonorListController
);


//GET || HOSPITAL LIST
router.get(
    "/hospital-list",
    authMiddelware,
    adminMiddelware,
    getHospitalListController
  );


  //GET || ORG LIST
router.get(
    "/org-list",
    authMiddelware,
    adminMiddelware,
    getORGListController
  );


  //---------------------------------
  //DELETE DONOR  || GET 
router.delete('/delete-donor/:id',authMiddelware,adminMiddelware,deleteDonorController);
//Export
module.exports = router;
