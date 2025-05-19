import React, { useContext } from 'react'
import Tag from '../Tag/Tag'
import { ThemeContext } from '../../context/ThemeContext'

const ThemedTag = ({children}) => {
    const {theme} = useContext(ThemeContext)
		const themeClass = theme === 'dark' ? 'tag--dark' : 'tag--light'

  return (
    <Tag themeClass={themeClass}>{children}</Tag>
  )
}

export default ThemedTag