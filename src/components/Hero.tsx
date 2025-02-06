// import React from 'react'
import HeroImage from '../assets/FaisalDrip.jpg'
import MyCV from '../assets/MY CV.pdf';

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img src={HeroImage} 
        alt="Picture of Me" 
        className="mx-auto mb-8 w-40 h-42 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      <h1 className='text-4xl font-bold'>
        I'm {' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mohammed Faisal Elorm</span>
        , Full Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-400'>
        I'm a Full Stack Developer; I build responsive web and mobile applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact With Me
        </button>
        <a href={MyCV} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
