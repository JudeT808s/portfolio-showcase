import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Hero from "../components/Hero";
import Projects from "./projects/index";
import { Banner } from "../components/Banner";
import { Container } from "react-bootstrap";

const Home = () => {

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  
  // Apply the theme to the whole page

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
      <Container>
        <Banner />
        <Projects />
      </Container>
    </>
  );
};

export default Home;
