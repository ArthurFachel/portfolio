import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Skills from './components/Skills'
import StatsBar from './components/StatsBar'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="relative z-10 min-h-screen">
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <Projects />
      <Publication />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
