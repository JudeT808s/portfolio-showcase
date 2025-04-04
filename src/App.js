import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, listAll } from 'firebase/storage';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Activity from './pages/Activity';
import ProjectsIndex from './pages/projects/index';
import ProjectsShow from './pages/projects/Show';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [imageList, setImageList] = useState([]);

  


  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:slug" element={<ProjectsShow />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
