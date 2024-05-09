
import { Navigate, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  
  //create a function named navigate using the usenavigate hook
  const navigate = useNavigate();

  return (
    <div>

      <h1>Welcome to Task Manager</h1>
      <button onClick={()=>{navigate('/users')}} >Check IN</button>
     
    </div>
  )
}

export default App
