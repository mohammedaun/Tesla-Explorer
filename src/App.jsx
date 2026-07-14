import { useRef } from 'react'
import { StageProvider } from './context/StageContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import TeslaExplorer from './components/TeslaExplorer/TeslaExplorer.jsx'
import InfoPanel from './components/InfoPanel/InfoPanel.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  const explorerRef = useRef(null)

  const scrollToExplorer = () => {
    explorerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <StageProvider>
      <div className="app">
        <Navbar />
        <Hero onExplore={scrollToExplorer} />
        <div ref={explorerRef}>
          <TeslaExplorer />
        </div>
        <InfoPanel />
        <Footer />
      </div>
    </StageProvider>
  )
}
