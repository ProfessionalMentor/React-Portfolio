import React from 'react';
import "./Services.css"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';


function Services() {
  return (
    <div>
     <div className="icon-container">
     <FaHtml5 className="icon icon-html5" />
      <FaCss3Alt className="icon icon-css3" />
      <FaJsSquare className="icon icon-js" />
      <br />
      <FaReact className="icon icon-react" />
      <FaNodeJs className="icon icon-nodejs" />
      <SiMongodb className="icon icon-mongodb" />
     </div>
    </div>
  );
}

export default Services




       
    

