import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Title from './components/Title/Title'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About/>
        </div>
        <Projects/>
        <div className='container'>
          <Title subTitle="Get in touch" title="Contact"/>
          <Contact/>
          <Footer/>
      </div>
    </div>
  )
}

export default App