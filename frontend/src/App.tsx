import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GalaxyBackground from './components/GalaxyBackground'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="bg-black text-white">
      <GalaxyBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App