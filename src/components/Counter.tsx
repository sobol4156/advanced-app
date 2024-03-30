import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
      <button className="counter" onClick={() => {setCount(count + 1)}}>increment {count}</button>
    </div>
  )
}


