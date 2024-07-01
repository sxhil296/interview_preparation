import React from 'react'
import useCounter from './useCounter'

const CustomCounter = () => {
    const {count, increment, decrement, reset} = useCounter(0)
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>

    </div>
  )
}

export default CustomCounter