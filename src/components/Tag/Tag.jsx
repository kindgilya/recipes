import styles from "./tag.module.scss";
import cn from 'classnames';

const Tag = ({children, themeClass}) => {
  return (
    <span className={cn(styles["tag"], themeClass && styles[themeClass])}>{children}</span>
  )
}

export default Tag;