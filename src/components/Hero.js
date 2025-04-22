import { ReactComponent as CvIcon } from "../assets/cv.svg";
import { useTheme } from './ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center mb-96 px-4 animate-fade-in">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/images%2FIMG_6733.jpeg?alt=media&token=3decfa73-8ded-449b-b634-be02bf561584"
        alt="Jude McCrea"
        className="w-36 h-36 max-w-[144px] max-h-[144px] rounded-full object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">About Me</h1>

      <div className="max-w-3xl mt-8">
        <p className="mb-4 mx-3">
          Hello! I'm Jude, a recent graduate from IADT. I have a strong
          foundation in building modern, responsive web applications using
          technologies like React, Tailwind CSS and Firebase.
        </p>
        <p className="mb-4 mx-3">
          I love turning ideas into reality and enjoy the process of crafting
          beautiful and functional user interfaces.
        </p>
        <p className="mb-4 mx-3">
          I'm always eager to learn new technologies and explore innovative
          solutions to solve real-world problems.
        </p>
        <p className="mb-4 mx-3">
          Let's connect! Feel free to reach out to me via email at{" "}
          <a href="mailto:jaytbas@gmail.com" className="text-blue-500">
            jaytbas@gmail.com
          </a>{" "}
          or below are my socials. I'm open to collaboration and new
          opportunities.
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/jude-mccrea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://github.com/JudeT808s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github"
              />
            </a>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/Jude%20McCreaCV.pdf?alt=media&token=9a644c56-967f-4dea-acf8-c661f23dd040"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Use the CvIcon directly */}
              <CvIcon className={`w-10 h-10 ${isDarkMode ? "invert" : ""}`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
