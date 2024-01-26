import React from 'react'
import style from './Navbar.module.css';
import { useUser } from '../UserContext';
const Navbar = () => {
    const { user } = useUser();
    return (
    <div className={style.container}>
        <div className={style.left}>
            Logo
        </div>
        <div className={style.right}>
            Anomyous
        </div>
        <div className={style.name}>
            {user &&  <span>Welcome {user.name}</span>}
        </div>

    </div>
  )
}

export default Navbar
