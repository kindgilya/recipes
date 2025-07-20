import { createContext, useContext, useState } from "react";
import styles from "./counter.module.scss";
import cn from 'classnames';

const Context = createContext({});

const Value = () => {
    const {count} = useContext(Context);
  return (
    <span className="counter__number">{count}</span>
  )
}

const CounterBtnMinus = ({use, children}) => {
		const {count, setCount} = useContext(Context);
	return (
		<button className={cn(styles['btn'], styles[`btn--${use}`])} onClick={() => setCount(count === 0 ? 0 : count - 1)}>{children}</button>
	)
}

const CounterBtnPlus = ({use, children}) => {
    const {count, setCount} = useContext(Context);
  return (
    <button className={cn(styles['btn'], styles[`btn--${use}`])} onClick={() => setCount(count + 1)}>{children}</button>
  )
}

const Counter = ({children}) => {
  const [count, setCount] = useState(0);
  return (
    <div className={cn(styles['counter'])}>
        {
            <Context.Provider value={{count, setCount}}>
                {children} 
            </Context.Provider>
        }
    </div>
  )
}

Counter.Value = Value;
Counter.CounterBtnMinus = CounterBtnMinus;
Counter.CounterBtnPlus = CounterBtnPlus;

export default Counter

/* 

<CounterBtn use='primary' handler={() => setCount(count === 0 ? 0 : count - 1)}>-</CounterBtn>
        <Value>{count}</Value>
        <CounterBtn use='primary' handler={() => setCount(count + 1)}>+</CounterBtn>

*/