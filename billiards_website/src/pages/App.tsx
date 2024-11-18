//import { useState } from 'react'
import '../styles/App.css'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar isHomepage={true}/>
      <section>
        <HeroSection />
      </section>
      <section>
        <InfoSection/>
      </section>
      <Footer />
    </>
  )
}

export default App
