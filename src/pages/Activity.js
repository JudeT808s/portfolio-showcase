import { useTheme } from '../components/ThemeContext';

const Activity = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className='justify-self-start text-xl font-semibold mb-4'>What I have been up to:</h1>
      <p className="mb-4 text-center">
        Previously working for GladCloud as an Intern, my responsiblities were for pre-onboarding on behalf of clients such as Diageo, UberEats, Deliveroo, and DoorDash.
        <br/>
        I am currently developing an app for Android and IOS using Next.js and React Native.
      </p>
    </div>
  );
};

export default Activity;
