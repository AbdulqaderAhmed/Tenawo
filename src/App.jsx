import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import Header from "./include/header/Header";
import Loader from "./include/loader/Loader";
import Index from "./components/home/Index";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Router>
        <header>
          <Header />
        </header>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" />
          <Route path="/contact" />
          <Route path="/blogs" />
          <Route path="/services" />
          <Route path="/teams" />
          <Route path="/login" />
          <Route path="/register" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
