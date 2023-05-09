import React from "react";
import { Route, Routes } from "react-router-dom";
import Activities from "./Activities";
import Home from "./Home";
import LogInRegister from "./LogInRegister";
import MyRoutines from "./MyRoutines";
import PostActivity from "./PostActivity"
import Routines from "./Routines";


const RRoutes = ({token, setToken, user, setUser}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} user={user} setUser={setUser}/>}></Route>
        <Route path="/activities" element={<Activities token={token} setToken={setToken} user={user} setUser={setUser}/>}></Route>
        <Route path="/postActivity" element={<PostActivity token={token} setToken={setToken} user={user} setUser={setUser}/>}></Route>
        <Route path="/login" element={<LogInRegister token={token} setToken={setToken} user={user} setUser={setUser}/>}></Route>
        <Route path="/myRoutines" element={<MyRoutines token={token} setToken={setToken} user={user} setUser={setUser}/>}></Route>
        <Route path="/routines" element={<Routines token={token} setToken={setToken} user={user} setUser={setUser}/>}></Route>
      </Routes>
    </div>
  );
};


export default RRoutes;