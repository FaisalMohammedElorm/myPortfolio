// import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white font-semibold px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-3xl font-bold hidden md:inline">Faisal</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-500">Home</a>
          <a href="#about" className="hover:text-gray-500">About Me</a>
          <a href="#services" className="hover:text-gray-500">Services</a>
          <a href="#projects" className="hover:text-gray-500">Projects</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
      </div>
    </nav>
  )
}

export default Navbar
