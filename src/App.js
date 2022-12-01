import React from 'react'
import Card from './components/Card'
import Category from './components/Category'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Food />
      <Category />
    </>
  )
}

export default App