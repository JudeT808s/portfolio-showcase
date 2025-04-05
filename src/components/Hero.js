

const Hero = () => {

    return (
        
        <div className='flex flex-col justify-center items-center mb-96'>
        <img src="https://firebasestorage.googleapis.com/v0/b/jude-portfolio-e99bb.appspot.com/o/images%2F1701554032733.jpg?alt=media&token=3f180279-fea8-45d5-a9af-62d3385881a8" alt="Jude McCrea" className="w-32 h-32 rounded-full" />
        <h1 >About Me</h1>
        <div className='max-w-3xl mt-8'>
        <p className= "mb-4">
          Hello! I'm Jude McCrea, a recent graduate from IADT. I have a strong foundation in building modern,
          responsive web applications using technologies like React, Tailwind
          CSS and Firebase.
        </p>

        <p className= "mb-4">
          I love turning ideas into reality and enjoy the process
          of crafting beautiful and functional user interfaces.
        </p>

        <p className= "mb-4"> 
          I'm always eager to learn new technologies and explore
          innovative solutions to solve real-world problems.
        </p>
        

        <p className= "mb-4"> 
          Let's connect! Feel free to reach out to me via email at{' '}
          <a href="mailto:jaytbas@gmail.com" className="text-blue-500">
            jaytbas@gmail.com
          </a> or below are my socials.
          I'm open to collaboration and new opportunities.
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/in/jude-mccrea/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://github.com/JudeT808s" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" />
            </a>
          </div>
        </div>

      </div>
    </div>
    )
};

export default Hero;
