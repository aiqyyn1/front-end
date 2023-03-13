import React from 'react'

export const Video = ({showVideo}) => {
  
  return (
    <div>
   
      <video src={showVideo} controls autoPlay></video>
    </div>
  )
}
