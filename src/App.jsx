import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Dashboard from './components/dashboard'


function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <button onClick={()=>{navigate("/Dashboard")}} >
        Dashboard
      </button>
      <button onClick={()=>{navigate("/")}} >
        Home
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
