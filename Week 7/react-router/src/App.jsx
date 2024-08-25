import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(() => import('./assets/components/Dashboard'));
import { Landing } from './assets/components/Landing'
import './App.css'

function App() {
  
  return (
    <>

      <div>
        <BrowserRouter>
          <AppBar/> <br />
          <Routes>
            <Route path="/dashboard" element={ <Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
            <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate();
    return (
      <div>
        <button onClick={()=>{
          navigate("/")
        }}> landing Page </button> 

        <button onClick={()=>{
          navigate("/dashboard")
        }}> Dashboard </button>
      </div>
    )
}

export default App