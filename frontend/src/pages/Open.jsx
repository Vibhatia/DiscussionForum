import React from 'react'
import style from './Open.module.css';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';
const Open = () => {
    const isLoggedIn = false;
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));;
    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.content}>
                <div className={style.contentTop}>
                    <div className={style.contentTopFirst}>Valid for Indian members</div>
                    <div className={style.contentTopSecond}>Start posting anonymously where no one will judge you</div>
                    <div className={style.contentTopThird}>Welcome to stranger discussion form</div>
                </div>
                <div className={style.contentBottom}>
                    <div className={style.contentBottomFirst}>
                        <Link to='/register'>
                            <button>
                                Create your account <span style={{ marginLeft: '7px' }}>&#8594;</span>
                            </button>
                        </Link>
                        <Link to='/login'>
                        <p style={{ marginTop: '9px', textDecoration: 'underline', cursor: 'pointer',color:'white' }}>Already have account? Login</p>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Open
