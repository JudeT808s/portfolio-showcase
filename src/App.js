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
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/projects" element={<ProjectsIndex />} /> 
        <Route path="/projects/:slug" element={<ProjectsShow/>} /> 

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
