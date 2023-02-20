
import React, { useState, useEffect } from 'react'
import '../stylesheets/check.css'
import axios from 'axios';
import logo from '../photos/photo.png'
import { Link } from 'react-router-dom';

function Download() {
  const [data, setData]=useState({})
  const url2="http://localhost:8081/upload"
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle]=useState('');
  const [description, setDescription]=useState('');
  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("video", video);
    formData.append("preview_image", image);
    formData.append("title", title);
    formData.append("description", description);
  
    try {
      const response = await fetch(url2, {
        method: "POST",
        body: formData,
      
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Request failed");
      }
      else{
        console.log("VSE OK")
      }
  
  
    } catch (error) {
      console.error(error);
    }
  };





  return(
      <div className='check_download'>
        <div className='navbar_download'>
        <div className='nav_download'>
          <img src={logo} className='img_download'></img>
          <div className='cont_download'>
            <Link className='hover:underline' to='/Home' >HOME</Link>
           <Link to='/Reg'>REG IN</Link>
            <Link className='hover:underline' to='/Log'>LOG IN</Link>
          </div>
        </div>
      </div>
       <div className='welcome_download'>

        <div className='user'>Welcome !: {data.name} {data.surname} </div>
        </div>
        <div className='main_download'>
         <form onSubmit={handleSubmit}  className='form_download'>
        
         
      
          <div className='flex justify-center flex-col gap-9 m'>
          <div className='text-center '>Hello!</div>
           <div>In this page you can download your video</div>
          </div>
          <div className='flex'>
           
           <div className='templates_download'>
       
          <div className='flex gap-5'>
            <label>Download video</label>
          <input type='file' accept='.mp4' onChange={handleVideoChange} required/>
          </div>
          <div className='flex gap-5'>
            <label>Downlod photo</label>
          <input type='file' accept="image/*" onChange={handleImageChange} required />
          </div>
          <div className='flex gap-5'>
            <label>Write  title</label>
          <input type='text' onChange={(e)=>setTitle(e.target.value)} placeholder='title' required/>
          </div>
          <div className='flex gap-5'>
            <label>Write description</label>
          <input type='text' onChange={(e)=>setDescription(e.target.value)} placeholder='description ' required/>
          </div>
          <button className=' bg-lime-400 h-16
w-48 mb-5'>submit</button>
          </div>
    
          </div>
         </form>
  
      </div>
      </div>
  )
}

export default Download;

