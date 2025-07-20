import { createContext, useCallback, useState } from "react";

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
  }
  
  // const themeToggle = useCallback(() => themeToggleNoStab(theme), [])

  
	return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
    {children}
    </ThemeContext.Provider>
  )
}

export default Theme;