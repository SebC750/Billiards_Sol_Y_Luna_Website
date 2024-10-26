//import { useState } from 'react'
import '../styles/App.css'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import InfoCards from "./components/InfoCards"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Navbar />
      <section>
        <HeroSection />
      </section>
      <section id="info-section">
        <InfoCards />
      </section>
      <section>

      </section>
      <section>

      </section>
      <Footer />
    </>
  )
}

export default App
