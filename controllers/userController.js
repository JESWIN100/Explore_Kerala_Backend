const UserModel = require('../models/user');
const { jwtToken } = require('../utils/jwtToken');
const loginJoi = require('../validation/loginJoi');
const SignupJoi = require('../validation/signupJoi');

const Signup = async (req, res) => {
    const data = req.body;
    console.log(data);
    await SignupJoi.validateAsync(data);

    const toSave = new UserModel(data);
    await toSave.save();
    res.status(200).json({ message: "User Created Successfully" });
};


const Login = async (req, res) => {

    const data = req.body;
    console.log(data);

    await loginJoi.validateAsync(data);

    //check in mongo-db

    const isExit = await UserModel.findOne({email: req.body.email , password: req.body.password})
if(!isExit) throw new Error("user not found")

     const token= await jwtToken(isExit.email,isExit.password)

console.log(token);
    res.status(200).json({ status:true, message: "User Created Successfully",token:token });
};




module.exports = { Signup,Login };
