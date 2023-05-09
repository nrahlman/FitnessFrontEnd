import './App.css'
import NavBar from './Components/NavBar'
import RRoutes from './Components/Routes'
import React, {useState} from 'react';




function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});


  return (
    <div className="App">
      <NavBar user={user}/>
      <RRoutes token={token} setToken={setToken} setUser={setUser}/>
    </div>
  )
}


export default App