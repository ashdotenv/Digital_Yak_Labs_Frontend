import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Portfolio from "./Pages/Portfolio"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
        <Footer />
    </>
  )
}

export default App
