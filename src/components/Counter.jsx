import React, { useReducer } from 'react'
import { reducer } from './Reducer'

const Counter = () => {
    const [ state, discpatch] = useReducer(reducer,{count:0} )
  return (
    <div>
        <h4>
            this is counter
        </h4>
        <p>count:{state.count}</p>
        <button onClick={()=> discpatch({type:"increment"})}className='btn btn-primary mx-2'>+</button>
        <button onClick={()=> discpatch({type:"decrement"})}className='btn btn-primary mx-2'>-</button>
    </div>
  )
}

export default Counter

