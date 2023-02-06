import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import logo from '../photos/photo.png'
import PasswordChecklist from "react-password-checklist"
import { useNavigate } from 'react-router-dom';
import styles from '../stylesheets/LogIn.module.css'
import axios from 'axios';
export default function LogIn() {
  const [data, setData]=useState({
    name:'',
    surname:'',
    email : '',
    password: ''
  })
  console.log(styles)

  const [repeatPassword, setRepeatPassword]=useState('');

const handleRepeatPassword=(e)=>{
  setRepeatPassword(e.target.value);
}
const url="http://localhost:3000/registration"
const  handle= (e) => {
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(data)
}
let navigate=useNavigate();
const sumbit= (e)=>{

  e.preventDefault();
  const emailChecker=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (data.password===repeatPassword && emailChecker.test(data.email) && data.name.length>0 && data.surname.length>0 ){

   axios.post(url,{
    name:data.name,
     surname:data.surname,
      email:data.email,
     password:data.password
  })
  .then(res=>{
    console.log(res.data)
   })
   navigate("/Download")
 }
}


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
    

   <div className={styles.main}>

    

     <form className={styles.modal}   onSubmit={(e)=>sumbit(e)}>
      <div>
     <h1>Dima & Aiqyn</h1>
     <hr></hr>
     </div>
     <div className={styles.templates}>

  
  

<h2>Videos, workbooks and more.
You’re here, let’s do this.</h2>
    <input placeholder='Enter Your Email' name='email' type='email' onChange={(e)=>handle(e)}  id='email' value={data.email.toString()} required='required'></input>

    
      <div>

     <input placeholder='Enter Your Password' onChange={(e)=>handle(e)} name='password' type='password'id='password' value={data.password} required='required'></input>
     </div>
</div> 



<div className='flex justify-center'>
<div className={styles.button}>
     <button name='regIn' >LOG IN</button>
     </div>

     </div>

  
    
     </form>
   </div>

</div>

 
  )
}