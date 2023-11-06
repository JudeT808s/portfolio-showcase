import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

//import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Projects from './pages/projects/index';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/projects" element={<Projects />} /> 

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
