import './App.css'
import NavBar from './Components/NavBar'
import RRoutes from './Components/Routes'

import Footer from './Components/Footer';
import React, {useState} from 'react';




function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});


  return (
    <div className="App">
      <NavBar token={token} setToken={setToken} setUser={setUser} user={user}/>
      <RRoutes token={token} setToken={setToken} setUser={setUser} user={user}/>
      <Footer/>
    </div>
  )
}


export default App