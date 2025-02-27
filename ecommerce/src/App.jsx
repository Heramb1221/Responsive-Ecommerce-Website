import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero'
import Category from './components/Navbar/Category'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Category/>
    </div>
  )
}

export default App