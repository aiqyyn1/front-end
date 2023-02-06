
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../photos/photo.png'
import styles from '../stylesheets/home.module.css'
export default function Home() {

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
    </div>
  );
}
