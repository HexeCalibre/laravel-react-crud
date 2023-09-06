import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    const [greetings, setGreetings] = useState("")
    useEffect(() => {
        console.log("greetings changed")
    }, [])
  return (
    <>
      <h1>UseEffect Component</h1>
      <p>
        <button onClick={(e) => setGreetings("Hi")}>Hi</button>
        <button onClick={(e) => setGreetings("Hello")}>Hello</button>
      </p>
      <p>{greetings}</p>
    </>
  )
}

export default UseEffectComponent