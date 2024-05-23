import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'
import Work from './Work'
import ContactForm from './ContactForm'
import SkillSection from './Skills'

import { Canvas } from '@react-three/fiber';
import RoadComponent from './Journey'

const Home = () => {
  return (
    <div className=' bg-deep-purple bg- w-screen h-full '>
      <style>
            {`
              ::-webkit-scrollbar {
                width: 0px; /* Safari and Chrome */
              }
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>
       
        <div className='flex'>
        <Description/>
      
        </div >
        
        <SkillSection/>
        <div className='h-96'>

        </div>
        <RoadComponent/>
        <ContactForm/>
        <Header/>
      
       <div className='h-12'>

       </div>
        <Footer/>
    </div>
  )
}

export default Home