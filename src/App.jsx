import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-cyan-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 text-center text-cyan-100/60">
        © {new Date().getFullYear()} • Frontend Architect • Built with love for 3D & motion
      </footer>
    </div>
  )
}

export default App
