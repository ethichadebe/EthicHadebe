import React, { useState } from 'react'
import './Projects.css'
import tlm from "../../assets/projects/tlm.png"
import tlm_vid from "../../assets/projects/tlm.mp4"
import bdme from "../../assets/projects/bdme.png"
import bdme_vid from "../../assets/projects/bdme.mp4"
import eph from "../../assets/projects/eph.png"
import eph_vid from "../../assets/projects/eph.mp4"
import { Link } from 'react-router-dom'

const Projects = () => {
  const [isTlmHovered, setTlmIsHovered] = useState(false);
  const [isBdmeHovered, setBdmeIsHovered] = useState(false);
  
  return (
    <div className="grid-wrapper">
      <div className="grid-slide">
        <img src={tlm} alt="Default Background" className="slide-image"/>
        <video src={tlm_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3></h3>
          <p></p>
        </div>
      </div>

      <div className="grid-slide">
        <img src={bdme} alt="Default Background" className="slide-image"/>
        <video src={bdme_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className="grid-slide">
        <img src={eph} alt="Default Background" className="slide-image"/>
        <video src={eph_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3></h3>
          <p></p>
        </div>
      </div>
  </div>
)
}

export default Projects