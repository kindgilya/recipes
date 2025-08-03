import { createContext, useCallback, useState } from "react";

export const ThemeContext = createContext('light');
export const ThemeContextToggle = createContext(() => {});

const Theme = ({children}) => {
	const [theme, setTheme] = useState('light');

  const themeToggle = useCallback(() => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }, [])

	return (
    <ThemeContextToggle.Provider value={themeToggle}>
    <ThemeContext.Provider value={theme}>
    {children}
    </ThemeContext.Provider>
    </ThemeContextToggle.Provider>
  )
}

export default Theme;