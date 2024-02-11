import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./Style/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
