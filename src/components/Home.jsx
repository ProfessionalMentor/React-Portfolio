import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Home.css"
function Home() {
  return (
    <>
    <div className="img1">
     <img src="src/assets/img1.png" alt="" />

    </div>
    <div id="home">
      <div className="maintxt">
        <h1>Hi'There I'm <span>Muhammad Ali</span> </h1>
        <h2>I'm a Web Developer</h2>
        <h3>Feel Free to Contact</h3>
      </div>
      <div className="icons1">
    <FaTwitter className='icon1 icon-twitter' />
    <FaYoutube className='icon1 icon-youtube' />
    <FaInstagramSquare className='icon1 icon-instagram' />
    <FaFacebook className='icon1 icon-facebook' />
       
    </div>
    <div className="btn1">
    <button>Download CV</button>
    <button>Contact Me</button>
    </div>
    </div>
   

  
    </>
  )
}

export default Home