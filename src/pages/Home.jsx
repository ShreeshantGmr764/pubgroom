import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactComponent from '../components/contactComponent'

const Home = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Navbar/>
      <Hero/>
      <ContactComponent/>
    </div>
  )
}

export default Home
