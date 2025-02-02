import styles from "./tag.module.scss";
import cn from 'classnames';

const Tag = ({text}) => {
  return (
    <span className={cn(styles["tag"])}>{text}</span>
  )
}

export default Tag;