import mongoose from "mongoose";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const otpSchema = new mongoose.Schema({
     email : {
        type:String,
        required: [ true , "Email is required"]
     },
     otp:{
        type: String,
        require:[true , " OTP Required"]
     },
     expirationTime:{
        type: Date,
        required: true,
     }
});

const otpModel = mongoose.model('OTP' , otpSchema);

export default otpModel;