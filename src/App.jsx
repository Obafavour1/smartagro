import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Popular from './components/Popular'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Modern from './components/Modern'
import Future from './components/Future'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-greens-200/90 max-w-[1500px]  mx-auto'>
      <Navbar/>
      <Header/>
      <Introduction/>
      <Popular/>
      <Future/>
      <Project/>
      <Testimonial/>
      <Modern/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App