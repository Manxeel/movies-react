import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Peliculas from '../components/Peliculas'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Peliculas />
    </div>
  )
}

export default Home