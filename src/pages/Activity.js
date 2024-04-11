import { useTheme } from '../components/ThemeContext';

const Activity = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className='justify-self-start text-xl font-semibold mb-4'>What I have been up to:</h1>
      <p className="mb-4">
        Currently working for GladCloud as an Intern, I have been responsible for pre-onboarding on behalf of clients such as Diageo, UberEats, Deliveroo, and DoorDash.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Data Cleanup using SQL and Azure Data Studio</li>
        <li>Setting up Endpoints using Blackknight and Azure</li>
        <li>Making web scrapers using Python</li>
        <li>Data entry and data manipulation with joins</li>
        <li>Excel</li>
      </ul>
      <h1 className="text-xl font-semibold mb-2">My Latest Posts:</h1>
      <h3 className="text-lg font-semibold mb-2">My LinkedIn Posts</h3>
      <div className='sk-ww-linkedin-profile-post' data-embed-id='245652'></div>
      <script src='https://widgets.sociablekit.com/linkedin-profile-posts/widget.js' async defer></script>
    </div>
  );
};

export default Activity;
