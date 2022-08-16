import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import Header from "./include/header/Header";
import Loader from "./include/loader/Loader";
import Index from "./components/home/Index";
import Footer from "./include/footer/Footer";
import About from "./components/about/About";
import DetailService from "./components/services/DetailService";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" />
          <Route path="/blogs" />
          <Route path="/service" element={<DetailService />} />
          <Route path="/teams" />
          <Route path="/login" />
          <Route path="/register" />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
