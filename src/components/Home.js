
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../photos/photo.png'
import styles from '../stylesheets/home.module.css'
import axios from 'axios';
import {Player, PosterImage} from 'video-react'
const url='http://localhost:8081/../storage/previews/a.JPG'
export default function Home() {
const [data, setData]=useState([]);
  useEffect(()=>{
axios.get((url)).then((res)=>{
  setData(res.data);
})
},[])

 console.log(data);
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <img src={logo} className={styles.img}></img>
          <div className={styles.cont}>
          <Link className='hover:underline' to='/Home' >HOME</Link>
           <Link to='/Reg'>REG IN</Link>
            <Link className='hover:underline' to='/Log'>LOG IN</Link>
          </div>
        </div>
      </div>
<img src={data}></img>
     
    </div>
  );
}
