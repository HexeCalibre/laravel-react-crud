import React, { useState } from 'react'

const ClickCountComponent = () => {
    const [clickCount, setClickCount] = useState(0)
    const handleClick = (e) => {
        setClickCount(prev => prev + 1)
    }

    const resetClickCount = (e) => {
        setClickCount(0)
    }
  return (
    <>
      <h1>Click Count Component</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>Click Count: {clickCount}</p>
      <p><button onClick={resetClickCount}>Reset Click Count</button></p>
    </>
  )
}

export default ClickCountComponent
