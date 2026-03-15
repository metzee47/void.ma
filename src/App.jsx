import './App.css'
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'
import { Main } from './sections'
import { useState } from 'react'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Main/>
      <Footer />
    </div>
  )
}

export default App
