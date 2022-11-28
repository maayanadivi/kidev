import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Unit1 from "./components/pages/Unit1";
import Unit2 from "./components/pages/Unit2";
import Unit3 from "./components/pages/Unit3";
import Soon from "./components/pages/Soon";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/services" element={Services} />
					<Route path="/unit1" exact element={<Unit1 />} />
					<Route path="/unit2" exact element={<Unit2 />} />
					<Route path="/unit3" exact element={<Unit3 />} />
					<Route path="/soon" exact element={<Soon />} />
					<Route path="/soon" exact element={<Soon />} />
					<Route path="/sign-up" element={SignUp} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
