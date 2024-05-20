import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex text-xl   gap-3 justify-center pb-6 absolute bottom-0 w-screen text-center'>
       <button className='rounded-full p-2.5 bg-white/0 hover:scale-110 transition-transform'>< FaGithub /></button> 
       <button className='rounded-full p-2.5 bg-white/0 hover:scale-110 transition-transform'><FaLinkedin /></button> 
    </div>
  )
}

export default Footer