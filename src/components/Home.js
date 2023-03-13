import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../photos/photo.png';
import styles from '../stylesheets/home.module.css';
import axios from 'axios';
import { Player, PosterImage } from 'video-react';
import { Video } from './Video';
const url = 'http://localhost:8081/posts';


const buildImgUrl = (url) => `http://localhost:8081/${url}`;

export default function Home() {
  const [data, setData] = useState({});
  const [showVideo, setShowVideo]=useState(null)
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  const navigate=useNavigate();
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <img src={logo} className={styles.img}></img>
          <div className={styles.cont}>
            <Link className='hover:underline' to='/Home'>
              HOME
            </Link>
            <Link to='/Reg'>REG IN</Link>
            <Link className='hover:underline' to='/Log'>
              LOG IN
            </Link>
          </div>
        </div>
      </div>
   
      {!showVideo && data.posts?.map((res, id) => {

        return (
        
        <div key={id}>
           <div >{res.title}</div>
        <img src={buildImgUrl(res.pathToPreview)} onClick={()=>setShowVideo(buildImgUrl(res.pathToVideo))} />
       <div>{res.description}</div>
        </div>
   
        )
      })}
      {showVideo && <video src={showVideo} controls autoPlay></video>}
  
      
   
      
      
      
       
      

       
  
    </div>
  );
}
