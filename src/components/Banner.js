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
              src="https://media.licdn.com/dms/image/v2/D4E03AQHmexaZOYA-Bw/profile-displayphoto-shrink_800_800/B4EZTwwQ..GwAc-/0/1739205973694?e=1749081600&v=beta&t=E3UK9xQ2mWCRmY-rBX9YgsdQDelAuqH0AijfwZRyCi8"
              alt="Header Img"
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

              <button>
                Let's Connect
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
