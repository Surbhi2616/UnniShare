import React from 'react'
import Navbar from "./components/Navbar";
import Rent from "./components/Rent"
import Services from "./components/Services"
import Title from "./components/Title"
import About from "./components/About"
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Rent/>
      <div className="container">
        <Title subTitle='Our SERVICES' title='What we Offer'/>
        <Services/>
        <About/>
        <Title subTitle='Testimonial' title='What Students Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
