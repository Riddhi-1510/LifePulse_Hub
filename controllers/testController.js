const testController = (req,res) => { 
    res.status(200).send({
        message:"Welcom",
        success:true,
    });
};

module.exports = {testController};