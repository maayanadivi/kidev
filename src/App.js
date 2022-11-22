import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Learn from "./components/pages/Learn";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/learn" component={Learn} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
