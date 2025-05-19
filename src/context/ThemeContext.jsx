import { createContext, useState } from "react";

export const ThemeContext = createContext('light');

const Theme = ({children}) => {
	const [theme, setTheme] = useState('light');

	const themeToggle = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        
        if (theme === 'dark') {
            setTheme('light')
        }

				// setTheme(theme === 'light' ? 'dark' : 'light')
    }
  
	return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
    {children}
    </ThemeContext.Provider>
  )
}

export default Theme;