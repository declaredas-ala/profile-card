import React from 'react'
import img from '../ala.jpg'

const Avatar = () => {
    return <img className="avatar" src={img} alt="Jonas Schmedtmann" style={
        {
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "2px solid #2662EA",
            margin: "20px"
        }
    }/>;
  
}

export default Avatar
