import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
