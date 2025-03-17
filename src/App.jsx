import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Portfolio from "./Pages/Portfolio"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Blogs from "./Pages/Blogs"
import BlogItems from "./Blog/Revolutionizing-Conversations-with-AI"
import Privacypolicy from "./Pages/Privacypolicy"

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
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/blog/Revolutionizing-Conversations-with-AI" element={<BlogItems />} />
        
        
      </Routes>
        <Footer />
    </>
  )
}

export default App
