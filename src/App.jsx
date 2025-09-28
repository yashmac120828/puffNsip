import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import AboutUs from "./components/AboutUs"
import Menu from "./components/Menu"
import FullMenu from "./components/FullMenu"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
