import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Hero from "../components/Hero";
import Projects from "./projects/index";
import { Banner } from "../components/Banner";
import { Container } from "react-bootstrap";
import { useTheme } from "../components/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme(); // Correctly destructure from the useTheme hook

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const containerClass = isDarkMode ? 'dark-theme' : 'light-theme'; // Class for the theme
  
  // Apply the theme to the whole page
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        }).catch((error) => {
          console.error("Error fetching image URL: ", error); // Handle error case
        });
      });
    }).catch((error) => {
      console.error("Error listing images: ", error); // Handle error case for listing images
    });
  }, []);

  return (
    <>
      <Container className={containerClass}>
        <Banner />
        {/* <Hero /> */}
        <Projects />
      </Container>
    </>
  );
};

export default Home;
