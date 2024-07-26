import { useState } from 'react'
import './App.css'
import Navbar from '../component/navbar/navbar'
import { Explore } from '../component/explore/explore'
import { Search } from '../component/search/search'
import { About } from '../component/about us/about'
import { Cart } from '../component/cart/cart'
import WhyChooseUs from '../component/whychoose/choose'
import { Footer } from '../component/footer/footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Explore/>
      <Search/>
      <About/>
      <Cart/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default App
