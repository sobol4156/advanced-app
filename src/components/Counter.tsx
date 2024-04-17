import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div className={classes.counter}>
      <button className="counter" onClick={() => {setCount(count + 1)}}>increment {count}</button>
    </div>
  )
}


