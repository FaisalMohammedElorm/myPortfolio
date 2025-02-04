// import React from 'react'

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from './components/About'
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
