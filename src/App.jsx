import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import WhoWeServe from './pages/WhoWeServe'
import SegmentPage from './pages/SegmentPage'
import WhoWeAre from './pages/WhoWeAre'
import DigitalSolutions from './pages/DigitalSolutions'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/who-we-serve/:segment" element={<SegmentPage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
