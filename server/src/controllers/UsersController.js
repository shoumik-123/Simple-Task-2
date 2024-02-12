const UsersModel = require("../models/UsersModel");



//Registration

exports.Registration = async (req, res)=>{
    try {
        let reqBody = req.body;
        const result = await UsersModel.create(reqBody)

        if (result && result.length > 0){
            res.status(200).json({status: "Success", data: result})
        }
        else {
            res.status(500).json({status: "Fail"})

        }
    }
    catch (e) {
        console.log(e)
    }

}

exports.GetAllProfiles = async (req, res)=>{
    try {

        const result = await UsersModel.find()

        if (result && result.length > 0){
            res.status(200).json({status: "Success", data: result})
        }
        else {
            res.status(500).json({status: "Fail"})

        }
    }
    catch (e) {
        console.log(e)
    }

}

exports.GetSingleProfiles = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await UsersModel.find(users.id);

        if (result) {
            res.status(200).json({ status: "Success", data: result });
        } else {
            res.status(404).json({ status: "Fail", message: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ status: "Error", message: "Internal server error" });
    }
};



exports.ProfileDetails = (req , res)=>{
    let email = req.headers['email'];

    UsersModel.aggregate([
        {$match:
                {
                    Email:email
                }
        },
        {$project:
                {
                    _id:1,
                    Email:1,
                    FirstName:1,
                    LastName:1,
                    Mobile:1,
                    Password:1,
                    Photo:1
                }
        }

    ]).then((result)=>{
        res.status(200).json({status: "Success", data: result})
    }).catch((err)=>{
        res.status(400).json({status: "Fail", data: err})

    })
}

