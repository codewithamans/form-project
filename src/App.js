import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/table" element={<Table />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
