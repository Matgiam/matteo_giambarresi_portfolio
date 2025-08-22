import React from "react";
import { Link } from "react-router";
import "../styling/App.css";
import Navbar from "../components/navbar";

function Home() {
	return (
		<div className="site-wrapper">
			<div className="site-first">
				<h1>
					Matteo <br /> Giambarresi
				</h1>
				<img src="./public/test.png" alt="Shanks" />
			</div>
		</div>
	);
}

export default Home;
