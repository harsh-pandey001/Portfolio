import React from 'react'
import Header  from './Components/header/Header';
import Nav  from './Components/nav/Nav';
import About  from './Components/about/About';
import Experiance  from './Components/experiance/Experiance';
import Services from './Components/services/Services';
import Portfolio  from './Components/portfolio/Portfolio';
import Testimonial  from './Components/testimonial/Testimonial';
import Contact  from './Components/contact/Contact';
import Footer  from './Components/footer/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Footer/>
    </>
  )
}

export default App