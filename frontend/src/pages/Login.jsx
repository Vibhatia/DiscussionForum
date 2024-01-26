import React from 'react'
import style from './Register.module.css';
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
const Login = () => {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const { login } = useUser();
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]: value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/loginUser', user);
            console.log('Post request successful:', response.data);
         login(response.data);
          navigate('/dashboard');
          setUser({
            email: '',
            password:''
          });

          } catch (error) {
         
            console.error('Error making post request:', error.message);
          }


    }
  return (
    <div>
      <div className={style.container}>
        <Navbar/>
        <div className={style.form}>
            <div className={style.formHeading}>
                Login Account
            </div>
            <div className={style.inputFields}>
               
                <div className={style.input}>
                    <input 
                    type = "text" 
                    placeholder='Enter Email Id' 
                    value = {user.email} 
                    onChange={handleChange}
                    name="email"/>
                </div>
                <div className={style.input}>
                    <input 
                    type = "passsword" 
                    placeholder='Enter your password' 
                    value={user.password} 
                    onChange={handleChange}
                    name="password"/>
                </div>
                <div className={style.input}>
                    <button style={{padding:'10px 60px'}} onClick={handleSubmit}> Continue <span style={{marginLeft:'10px'}}>&#8594;</span> </button>
                </div>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Login;
