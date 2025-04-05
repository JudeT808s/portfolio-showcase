import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Keep useState and useEffect if you're using them for other purposes
import { storage } from './firebase';
import { ref, listAll } from 'firebase/storage';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext'; // Make sure this import points to your updated ThemeContext

// import pages
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Activity from './pages/Activity';
import ProjectsIndex from './pages/projects/index';
import ProjectsShow from './pages/projects/Show';

const App = () => {
  const [imageList, setImageList] = useState([]);

  // You can keep other useEffect hooks if they are for different purposes
  // For example, if you are fetching the image list here:
  // useEffect(() => {
  //   const imageListRef = ref(storage, "images/");
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       // ... logic to get image URLs and update imageList
  //     });
  //   });
  // }, []);

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