
import React, { useState, useEffect } from 'react'
import '../stylesheets/check.css'
import axios from 'axios';

function Download() {
  const [data, setData]=useState({})
  const [file, setFile]=useState(null);
  const url="http://localhost:3000/Check"
  const url2="http://localhost:3000/upload"
useEffect(()=>{
  axios.get(url).then(res=>{
    setData(res.data)
  })
},[])
const handleFileUpload = (event)=>{
  setFile(event.target.files[0].name);
  
   }

   const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", file);
    try {
      const response = await axios({
        method: "post",
        url: url2,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

 


  return(
      <div className='check'>
   
        <div className='user'>Welcome !: {data.name} {data.surname} </div>
         <form onSubmit={(e)=>handleSubmit(e)}>
          <input type='file' accept='.mp4' onChange={handleFileUpload}/>
          <button>submit</button>
         </form>
  
      </div>
  )
}

export default Download;
