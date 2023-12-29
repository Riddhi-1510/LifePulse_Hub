const userModel = require("../models/userModel");

//GET DONOR LIST
const getDonorListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({ role: "donor" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      TotalCount: donorData.length,
      message: "Donor List Fetched SuccessFully",
      donorData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Donor List",
      error,
    });
  }
};

//GET HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      TotalCount: hospitalData.length,
      message: "Hopital List Fetched SuccessFully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List",
      error,
    });
  }
};

//GET ORG LIST
const getORGListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      TotalCount: orgData.length,
      message: "ORG List Fetched SuccessFully",
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In ORG List",
      error,
    });
  }
};

//   ------------------------------------------------------------
//for all delete use this route
const deleteDonorController = async (req,res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id);
        return res.send(200).send({
            success:true,
            message:'Record delete Successfully'
        });
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success :false,
            message:'Error while deleting ',
            error
        });
    }
};




module.exports = {
  getDonorListController,
  getHospitalListController,
  getORGListController,
  deleteDonorController
};
