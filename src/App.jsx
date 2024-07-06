import { Suspense, lazy,useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
const Home = lazy(()=>import('./components/home'));
const Dashboard = lazy(()=>import('./components/dashboard'));



function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>  
      <div>
      <button onClick={()=>{navigate("/Dashboard")}} >
        Dashboard
      </button>
      <button onClick={()=>{navigate("/")}} >
        Home
      </button>
        <Routes>
          <Route path="/Dashboard" element={<Suspense fallback="Loading..."><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback="Loading..."><Home /></Suspense>} />
        </Routes>
        </div>
    </>
  )
}

export default App
