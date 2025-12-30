import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Imports
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Page Imports
import Home from './pages/Home/Home';
import About from './pages/About';
import Services from './pages/Services';
import PortfolioPage from './pages/PortfolioPage'; // ✅ Ab ye file Step 1 mein bana di hai
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// --- 🛠️ SCROLL FIX (No Separate File Needed) ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- MAIN APP ---
const App = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col relative overflow-x-hidden">
      
      {/* 1. Scroll Fix & Navbar */}
      <ScrollToTop />
      <Navbar />
      
      {/* 2. Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* 3. Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;