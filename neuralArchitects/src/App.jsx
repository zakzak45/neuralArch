import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './navbar'
import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
