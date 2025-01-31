import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactComponent from '../components/contactComponent'
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Navbar/>
      <Hero/>
      <ContactComponent/>
      <Analytics/>
    </div>
  )
}

export default Home
