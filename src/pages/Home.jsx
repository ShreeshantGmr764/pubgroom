import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Navbar />
      <Hero />
      <Footer />
      <Analytics />
    </div>
  )
}

export default Home
