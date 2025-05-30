import React from 'react';
import { ReactComponent as CvIcon } from '../assets/cv.svg';
import { useTheme } from './ThemeContext';
import SectionText from './SectionText';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const cvUrl =
    'https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/JudeMcCreaCV.pdf?alt=media&token=2ebe343a-33f5-49cb-b65a-0ce47426d5ad';

  return (
    <div className="flex flex-col items-center px-4 py-16 space-y-8">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/images%2FIMG_6733.jpeg?alt=media&token=3decfa73-8ded-449b-b634-be02bf561584"
        alt="Jude McCrea"
        className="w-36 h-36 rounded-full object-cover shadow-lg animate-fade-in animate-fade-in-200"
      />

      <h1 className="text-4xl font-bold animate-fade-in animate-fade-in-400">
        About Me
      </h1>

      <div className="max-w-3xl space-y-4 animate-fade-in animate-fade-in-600">
        <SectionText>
          Hello! I’m Jude, a recent graduate from IADT. I have a strong
          foundation in building modern, responsive web applications using
          technologies like React, Tailwind CSS and Firebase. Recently I have
          been taking on projects using React Native, Python and SpringBoot.
        </SectionText>
        <SectionText>
          I love turning ideas into reality and enjoy the process of crafting
          beautiful and functional user interfaces.
        </SectionText>
        <SectionText>
          I'm always eager to learn new technologies and explore innovative
          solutions to solve real-world problems. I am also keen on social
          media production and have experience in camerawork, editing and
          content creation, including working on RTÉ’s Special Forces Ultimate
          Challenge and a mini-doc on Sports Against Racism Ireland.
        </SectionText>
        <SectionText>
          Let’s connect! Feel free to reach out via{' '}
          <a href="mailto:jmccrea6x@gmail.com" className="text-blue-500 underline">
            jmccrea6x@gmail.com
          </a>
          . Open to all collaboration and new opportunities.
        </SectionText>
      </div>

      <div className="flex flex-wrap justify-center gap-6 animate-fade-in animate-fade-in-800">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jude-mccrea/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/JudeT808s"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="GitHub"
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://vimeo.com/335420527"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src="https://cdn.simpleicons.org/vimeo"
            alt="GitHub"
            className="w-10 h-10"
          />
        </a>
        {/* Download CV Button */}
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 btn btn-dark`}
        >
          <CvIcon className="w-5 h-5 fill-current" />
          View my CV
        </a>

      </div>
    </div>
  );
};

export default Hero;
