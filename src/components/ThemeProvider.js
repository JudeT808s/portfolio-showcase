const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        return true;
      } else if (storedTheme === 'light') {
        return false;
      } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    });
  
    useEffect(() => {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      const root = document.documentElement;
    
      if (isDarkMode) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }
    }, [isDarkMode]);
    
  
    const toggleTheme = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  export { ThemeProvider, useTheme };