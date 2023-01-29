import React from 'react'
import logo from '../photos/photo.png'

export default function Home() {
  return (
    <div>
      <div className='nav'>
      <img src={logo} className='img2'></img>
    <div className='logo'>

    <img src='	https://s3.amazonaws.com/cdn.looka.com/images/logos/looka_logo_black.svg' className='img'></img>
    </div>

    <div>
    <div className='burger'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
        </div>
        <div className='sidebar'>
        <li>Log In</li>
        <li>Reg in</li>
        </div>
    </div>

      </div>
    
      <hr></hr>
    </div>
  )
}
