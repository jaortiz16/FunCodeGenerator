import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DrawingCanvas from './components/DrawingCanvas'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DrawingCanvas />
    </>
  )
}

export default App
