import React from 'react'
import {useState} from 'react'
import './Counter.scss'

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        return setCount(count+1)
    }
    const decrement = () =>{
        return setCount(count-1)
    }

    return (
        <>
            <button className='buttonInc' onClick={increment}>+1</button>
            <div>count = {count}</div>
            <button onClick={decrement}>-1</button>
        </>
    )
}