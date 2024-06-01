import React, { useState } from 'react'
import { useCounts } from '../hooks/useCounts'

const Counter = () => {
    
let {count, handleReset, handleRestar, handleSumar} = useCounts(1, 1, 10);
    
    return (
    <div className='counter-container'>
        {count}
        <button onClickCapture={handleSumar}>Sumar</button>
        <button onClick={handleRestar}>Restar</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter