import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'
import Work from './Work'
import SkillSection from './Skills'
import MyComponent from './ContactForm'
import AboutMe from './Aboutme'



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
        <AboutMe/>
        
        <SkillSection/>
        <div className='h-96'>

        </div>
        {/* <RoadComponent/> */}
        {/* <ContactForm/> */}
       
        <Header/>
      
        <div className='h-44'></div>  
<MyComponent/>
<div className='h-44'>
</div>
     
        <Footer/>
    </div>
  )
}

export default Home