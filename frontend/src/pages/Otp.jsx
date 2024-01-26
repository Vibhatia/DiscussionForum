import React,{useState} from 'react'
import style from './Otp.module.css';
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Otp = () => {
    const [otp,setOTP] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const data = JSON.parse(localStorage.getItem('data'))
            console.log(data);
            const response = await axios.post('http://localhost:5000/api/v1/auth/verifyOTP', {email:data.email,otp:otp});
            console.log(response);
            
            const responseUser = await axios.post('http://localhost:5000/api/v1/auth/registerUser', data);
            console.log('Post request for registration successful:', responseUser.data);
            if(response && responseUser){
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigate('/confirmation');
            }
        }catch(error){
            console.log(error.message);
        }
    }
  return (
    <>
    <div className={style.container}>
      <Navbar/>
      <div className={style.form}>
          <div className={style.formHeading}>
              Create your Account
          </div>
          <p style={{marginTop:'10px',textAlign:'center',width:'80%'}}>Please verify your email Id to continue.<br/>We have sent the OTP to this email.</p>
          <div className={style.inputFields}>
    
              <div className={style.input}>
                  <input type = "text" placeholder='Enter OTP' value = {otp} onChange={(e)=>setOTP(e.target.value)}/>
              </div>
              <div className={style.input}>
                  <button onClick={handleSubmit}> Continue <span style={{marginLeft:'10px'}}>&#8594;</span> </button>
              </div>
          </div>
      </div>


    </div>
  </>
  )
}

export default Otp
