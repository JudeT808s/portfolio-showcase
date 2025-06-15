import { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SkillBadge from "./SkillBadge";
import SkillJSON from "../assets/data/skills.json";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Social Media Manager",
    "Marketing Specialist",
    "Software Engineer",
    "Full Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(500 - Math.random() * 900); // Slower initial typing
  const period = 1000; // Longer pause before deleting

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta * 0.7); // Slower deletion
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(1000); // Longer pause before next word
    }
  };

  return (
    <section id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/IMG_4996.jpeg?alt=media&token=0d1b54e2-8ff6-4dea-8f19-b0732e42f942"
              alt="Header Img"
              className="img-fluid"
              style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="banner-text flex-start">
              <h1>
                {`Hi! I'm Jude, I'm an aspiring`}{" "}
                <span className="wrap">{text}</span>
              </h1>
              <br />
              <p>
                with a passion for creating dynamic and responsive web
                applications. I specialize in front-end development, but I'm
                also proficient in back-end technologies.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {SkillJSON.map((skill, i) => (
                  <SkillBadge key={i} skill={skill} />
                ))}
              </div>
              <Link to={"/about"}>

              <button className="mt-3">
                See more about me!
                  <ArrowRightCircle size={25} />
              </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
