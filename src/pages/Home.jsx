import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories.jsx'
import Products from '../components/Products.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories />
    <Products />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home
