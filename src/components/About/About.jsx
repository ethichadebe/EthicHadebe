import './About.css'
import about_img from '../../assets/about.webp'
import react from '../../assets/skill_icons/react.png'
import springboot from '../../assets/skill_icons/spring-boot-logo.png'
import node from '../../assets/skill_icons/node.png'
import java from '../../assets/skill_icons/java.png'
import kotlin from '../../assets/skill_icons/Kotlin_Icon.png'
import androidStudio from '../../assets/skill_icons/android-studio-icon.webp'
import mysql from '../../assets/skill_icons/mysql.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-left">
        <h2>
          Ethic Hadebe: <span className='highlight'>Software developer</span>, <span className='highlight'>tech innovator</span>, and architect of transformative digital solutions. His work reflects a passion for empowering users and businesses through intuitive web and mobile experiences, all designed to solve real-world challenges
        </h2>
        <div className="skills-container">
        <div className='skill'>
            <img src={androidStudio} alt="" className='skill-icon' />Android Studio
          </div>
          <div className='skill'>
            <img src={java} alt="" className='skill-icon' />Java
          </div>
          <div className='skill'>
            <img src={node} alt="" className='skill-icon' />Node.js
          </div>
          <div className='skill'>
            <img src={springboot} alt="" className='skill-icon' />Spring Boot
          </div>
          <div className='skill'>
            <img src={kotlin} alt="" className='skill-icon' />Kotlin
          </div>
          <div className='skill'>
            <img src={react} alt="" className='skill-icon' />React
          </div>
          <div className='skill'>
            <img src={mysql} alt="" className='skill-icon' />MySql
          </div>
        </div>
      </div>
      <div className="about-right">
        <img src={about_img} className='about-img' alt="Ethic Hadebe" />
      </div>
    </div>
  )
}

export default About