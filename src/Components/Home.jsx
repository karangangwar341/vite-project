import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'


const Home = () => {
  return (
    <div className='h-screen  bg-deep-purple bg- w-screen '>
        <Header/>
        <div className='flex'>
        <Description/>
        </div>
       
        <Footer/>
    </div>
  )
}

export default Home