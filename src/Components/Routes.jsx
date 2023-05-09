import React from "react";
import { Route, Routes } from "react-router-dom";
import Activities from "./Activities";
import Home from "./Home";
import LogInRegister from "./LogInRegister";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";

const RRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/activites" element={<Activities />}></Route>
        <Route path="/login" element={<LogInRegister />}></Route>
        <Route path="/myRoutines" element={<MyRoutines />}></Route>
        <Route path="/routines" element={<Routines />}></Route>
      </Routes>
    </div>
  );
};

export default RRoutes;