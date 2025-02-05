// import React from 'react'

// import { Feather } from "@expo/vector-icons"
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 text-white bg-black" id="contact">
      <div className='container px-8 mx-auto md:px-16 lg:px-24'>
        <h2 className='mb-12 text-4xl font-bold text-center'>Reach Me</h2>
        <div className='flex flex-col items-center md:flex-row md:space-x-12'>
          <div className='flex-1'>
            <h3 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Let's Talk</h3>
            <p>I am open to discussing web development and mobile application development or partnership opportunities.</p>
            <div className="mt-8 mb-4">
              <FaEnvelope className='inline-block mr-2 text-green-400'/>
              <a href="mailto:mohammedelormf@gmail.com" className='hover:underline'>
                mohammedelormf@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone  className='inline-block mr-2 text-green-400'/>
                <span>+233538249825</span>
              
            </div>
            <div className="mb-4">
              <FaMapMarkerAlt   className='inline-block mr-2 text-green-400'/>
                <span>Tesano, Accra, Ghana</span>
              
            </div>
              
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input type="text" 
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400" 
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="text" 
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400" 
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea  
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400" 
                  rows= {5}
                  placeholder="Enter Your Message"
                />
              </div>
              <button className="hidden px-8 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
          
