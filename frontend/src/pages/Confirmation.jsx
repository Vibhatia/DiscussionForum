import React from 'react'
import style from './Confirmation.module.css';
import Navbar from '../components/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
const Confirmation = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    console.log(isLoggedIn);
    const navigate = useNavigate();
    return (
    <>
       <div className={style.container}>
      <Navbar/>
      <div className={style.form}>
          <p>Account Created Successfully</p>
          <div className={style.inputFields}>
              <div className={style.input}>
                  <button onClick = {()=>navigate('/dashboard')}> Create your first post <span style={{marginLeft:'10px'}}>&#8594;</span> </button>
              </div>
          </div>
      </div>


    </div>
    </>
  )
}

export default Confirmation
