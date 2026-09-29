import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/Hero'
import AboutMe from './components/Aboutme'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Header />
      <HeroSection/>
      <AboutMe/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
