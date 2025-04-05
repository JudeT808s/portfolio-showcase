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
      // You might also apply the theme to the document body here if your ThemeProvider is the central place for this
      if (isDarkMode) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
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