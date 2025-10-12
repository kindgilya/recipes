import styles from "./tag.module.scss";
import cn from "classnames";

const Tag = ({ children, themeClass, counter, setCounterHandler }) => {
  return (
    <span
      className={cn(styles["tag"], themeClass && styles[themeClass])}
      onClick={setCounterHandler}
    >
      {counter && <span>{counter}</span>}
      {children}
    </span>
  );
};

export default Tag;
