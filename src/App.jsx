import { useState } from 'react'
import './App.css'


function App() {
  let [count,setCount] = useState(0)

  let [timerId,setTimerId] = useState("")
  
  let start=()=>{
    let id = setInterval(increment,1000)
    setTimerId(id)
  }
  
  let increment=()=>{
    setCount(count=>count+1)
  }
  
  let stop=()=>{
    clearInterval(timerId)
  }
  let reset=()=>{
    clearInterval(timerId)
    setCount(0)
  }
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>

        
    </>
  )
}

export default App
