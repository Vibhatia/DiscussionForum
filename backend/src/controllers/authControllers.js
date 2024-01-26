
import UserModel from '../models/User.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../config/generateJWT.js';
import generateOTP from '../config/generateOTP.js';
import otpModel from '../models/OtpSchema.js';
import sendEmail from '../utils/email.js';

const registerUser= asyncHandler(async (req,res,next)=>{
        try {
            const user= await UserModel.create(req.body);
            if(user){
        
                res.status(201).json({
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    password:user.password,
                    token: generateToken(user._id),
                    message: "User registered Successfully"
                });
               
            } else {
                console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
            }
           
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' })
        }
});







const loginUser = asyncHandler(async (req, res,next) => {
    const { email, password } = req.body;
    try{
    const user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
           
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            message: "User LoggedIn successfully",
        })
    } else {
        // console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
});




//Email VERIFICATION

const sendOTP = asyncHandler(async (req, res,next) => {
    const {email} = req.body;
    console.log(email);
    const otp = generateOTP().toString();
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);          // 5 minutes in milliseconds
    // console.log(expirationTime);
    const otpDocument = new otpModel({
        email,
        otp,
        expirationTime
    })
    await otpDocument.save();
    const message = `Your OTP is ${otp}`
    try {
        //Sending email,subject and message
        await sendEmail(email, "OTP Request", message);
        res.status(200).json({ message: "OTP sent successfully to your registered mail." });
    } catch (err) {
      
        res.status(500).send('There was an error while sending an email');
    }

    });

const verifyOTP = asyncHandler(async (req, res,next) => {
    const { email,otp } = req.body;

    try {
        const otpDocument = await otpModel.findOne({
            email,
            expirationTime: { $gt: new Date(),},
            otp
        });

        if (otpDocument && otpDocument.otp === otp) {
            await otpDocument.deleteOne();
            res.status(200)
                .json({ message: "OTP verified Successfully" });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
});



export {
    registerUser,
   
    loginUser,
    
    sendOTP,
    verifyOTP
};