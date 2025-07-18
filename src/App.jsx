import React, { useState } from 'react'

const App = () => {

  const [a, setA] = useState(10)

  return (
    <div>
      <h1>value of a is {a}</h1>
      <button onClick={()=>{setA(30)}}>click me</button>
    </div>
  )
}

export default App
