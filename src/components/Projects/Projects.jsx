import React, { useState } from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import tlm from "../../assets/projects/tlm.png"
import tlm_vid from "../../assets/projects/tlm.mp4"
import bdme from "../../assets/projects/bdme.png"
import bdme_vid from "../../assets/projects/bdme.mp4"
import eph from "../../assets/projects/eph.png"
import eph_vid from "../../assets/projects/eph.mp4"
import penuel from "../../assets/projects/penuel.png"
import penuel_vid from "../../assets/projects/penuel.mp4"
import { Link } from 'react-router-dom'

const Projects = () => {
  
  return (
    <div className="grid-wrapper">
      <div className="grid-slide">
        <img src={tlm} alt="Default Background" className="slide-image"/>
        <video src={tlm_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>The lazy Makoti</h3>
          <p>Using React to create a reimagined modern design, for a website that better represents the elegancy of the brand.</p>

          <div className="skills-container">
            <Link to="https://thelazymakoti.ethichadebe.me/" target='_blank' className="skill">
              <FontAwesomeIcon icon={faLink} className='skill-icon'/> Visit website
            </Link>

            <Link to="https://github.com/ethichadebe/tlm" target='_blank' className="skill-git">
              <FontAwesomeIcon icon={faGithub} className='skill-icon'/>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid-slide">
        <img src={eph} alt="Default Background" className="slide-image"/>
        <video src={eph_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>EP Hotspot</h3>
          <p>An android application designed using Figma and developed in Java and Kotlin for a robust, modern and interactive user experience.</p>

          <div className="skills-container">
            <Link to="https://play.google.com/store/apps/details?id=com.eph.ephotspot&hl=en" target='_blank' className="skill">
              <FontAwesomeIcon icon={faLink} className='skill-icon'/> Go to PlayStore
            </Link>
          </div>
        </div>
      </div>

      <div className="grid-slide">
        <img src={bdme} alt="Default Background" className="slide-image"/>
        <video src={bdme_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>BDM Energy</h3>
          <p>Using figma to design and react to develop for a modern and responsive interface</p>

          <div className="skills-container">
            <Link to="https://bdmenergy.co.za/" target='_blank' className="skill">
            <FontAwesomeIcon icon={faLink} className='skill-icon'/> Visit website
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="grid-slide">
        <img src={penuel} alt="Default Background" className="slide-image"/>
        <video src={penuel_vid} autoPlay loop muted className="slide-video"/>
        <div className="grid-slide-content">
          <h3>Penuel The Black Pen</h3>
          <p>Using figma to design and react to develop for a modern and responsive interface</p>

          <div className="skills-container">
            <Link to="https://penuel.ethichadebe.me/" target='_blank' className="skill">
            <FontAwesomeIcon icon={faLink} className='skill-icon'/> Visit website
            </Link>
          </div>
        </div>
      </div>*/}
      </div>
  )
}

export default Projects