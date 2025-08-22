import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./../pages/Home.jsx";
import About from "./../pages/About.jsx";
import Contact from "./../pages/Contact.jsx";
import Navbar from "../components/navbar.jsx";
import React from "react";
import Projects from "./../pages/Projects.jsx";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
