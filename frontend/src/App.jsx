import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from '../Pages/Home'
import MainLayout from './Components/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout/>
    </>
  )
}

export default App
