import React from 'react'
import style from './Dashboard.module.css';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards.jsx';
import { useUser } from '../UserContext.jsx';
import { useEffect,useState } from 'react';
import axios from 'axios';


const Dashboard = () => {
  const [data,setData] = useState([]);
  const { user } = useUser();
  console.log(user);
  if(!user)
  return <div>Please login to view dashboard</div>;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
      
  //       const response = await axios.get('http://localhost:5000/api/v1/post/allPost');

  //       setData(response.data);
  //       console.log(response.data);
     
      
  //     } catch (error) {
    
  //      return <h1>Error</h1>

  //     }
  //   };

  //   fetchData();
  // }, []); 
  return (
    <div className={style.container}>
      <Navbar/>
      <div className={style.wrapper}>
        <div className={style.firstcolumn}>
          <div className={style.first}>
            <button className={style.firstbutton}>All Post</button>
          </div>
          <div className={style.first}>
            <button className={style.firstbutton}>Commented Post</button>
          </div>
          <div className={style.first}>
            <button className={style.firstbutton}>Replied Post</button>
          </div>
        </div>
        <div className={style.secondcolumn}>
          <h3 style={{margin:'10px 25px'}}>All Posts 12</h3>
          <div className={style.card}>
              <h3 style={{marginTop:'10px',marginLeft:'15px'}}>This is Post Title</h3>
              <div className={style.bottomcard}>
                <div style={{marginRight:'40px'}}>
                  Comment
                </div>
                <div>
                  Reply
                </div>
              </div>

          </div>
          <div className={style.card}>
              <h3 style={{marginTop:'10px',marginLeft:'15px'}}>This is Post Title</h3>
              <div className={style.bottomcard}>
                <div style={{marginRight:'40px'}}>
                  Comment
                </div>
                <div>
                  Reply
                </div>
              </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
