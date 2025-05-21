import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Episodes = () => {
  const [social_media] = useState([{
                                    id: 'Instagram',
                                    icon: faInstagram,
                                    link: "https://www.instagram.com/devethics/"},{
                                    id: 'Facebook',
                                    icon: faGithub,
                                    link: "https://github.com/ethichadebe"},{
                                    id: 'Twitter',
                                    icon: faLinkedin,
                                    link: "https://www.linkedin.com/in/ethic-hadebe-55549014a/"},{
                                    id: 'Envelope',  
                                    icon: faEnvelope,
                                    link: "mailto:ethichadebe@gmail.com"}])
  return (
    <div className='icons'>
      {social_media.map((social_media) =>(
        <a href={social_media.link} key={social_media.id} target="_blank"><FontAwesomeIcon icon={social_media.icon} className='icon'/></a>
      ))}
    </div>
  )
}

export default Episodes