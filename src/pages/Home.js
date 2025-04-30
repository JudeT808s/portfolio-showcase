import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Projects from "./featuredProjects/Index";
import { Banner } from "../components/Banner";
import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel";
import gifs from "../assets/data/gifs.json"; 
const Home = () => {

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  

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
        <Carousel />
        <Projects />
      </Container>
    </>
  );
};

export default Home;
