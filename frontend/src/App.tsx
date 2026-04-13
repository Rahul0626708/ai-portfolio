import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home     = lazy(() => import('./pages/Home'))
const About    = lazy(() => import('./pages/About'))
const Skills   = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Project'))
const Contact  = lazy(() => import('./pages/Contact'))
const Admin    = lazy(() => import('./pages/Admin'))

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center text-gray-400">
              Loading...
            </div>
          }>
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/about"    element={<About />} />
              <Route path="/skills"   element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact"  element={<Contact />} />
              <Route path="/admin"    element={<Admin />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App