import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// ✅ Import missing components
import Navbar from './Components/Navbar'; // <-- Adjust path as needed
import Footer from './Components/Footer'; // <-- Adjust path as needed

function App() {
  return (
    <Router>
      <Navbar />
      
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/footer' element={<Footer/>}/>
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
