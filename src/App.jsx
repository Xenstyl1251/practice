import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>WELCOME! 1</h1>
        <h2>WELCOME!</h2>
        <span>WELCOME!</span>
        <label>WELCOME!</label>
        <a href={'/product'+"1"}>Go to product</a>
        <button onClick={()=> console.log("cleck")}>click me</button>
      </div>
    </>
  )
}

export default App
