import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import {  useTheme } from "./ThemeContext"; // Updated import

export const Banner = () => {
    const { isDarkMode } = useTheme(); // Use the useTheme hook
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  const bannerClass = isDarkMode ? 'navbar bg-neutral text-neutral-content' : 'navbar bg-base-100';

  return (
    <section className={bannerClass} id="home">
      <Container className={`${isDarkMode ? 'dark' : 'light'}`}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner-text">
              <h1>
                {`Hi! I'm Jude, I'm an aspiring`} <span className="wrap">{text}</span>
              </h1><br/>
              <p>
                 with a passion for creating dynamic and
                responsive web applications. I specialize in front-end
                development, but I'm also proficient in back-end technologies.
              </p>

              <button>
                Let's Connect
                <Link to={"/about"}>
                <ArrowRightCircle size={25} />
                </Link>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHmexaZOYA-Bw/profile-displayphoto-shrink_800_800/B4EZTwwQ..GwAc-/0/1739205973694?e=1749081600&v=beta&t=E3UK9xQ2mWCRmY-rBX9YgsdQDelAuqH0AijfwZRyCi8"
              alt="Header Img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;