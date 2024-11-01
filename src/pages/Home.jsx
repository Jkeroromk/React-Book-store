import React from 'react'
import Landing from '../Components/Landing'
import Highlight from '../Components/Highlight'
import Featured from '../Components/Featured'
import Discount from '../Components/Discount'
import Explore from '../Components/Explore'

const Home = () => {
  return (
    <>
      <Landing />
      <Highlight />
      <Featured />
      <Discount />
      <Explore/>
    </>
  )
}

export default Home