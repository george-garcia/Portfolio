import { MotionConfig } from 'framer-motion'
import { Background } from './components/Background'
import { ScrollProgress } from './components/ScrollProgress'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { TechMarquee } from './sections/TechMarquee'
import { Projects } from './sections/Projects'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    // reducedMotion="user" stills the entrance/hover transforms for people with
    // "reduce motion" enabled; the CSS animations opt out via media query.
    <MotionConfig reducedMotion="user">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
