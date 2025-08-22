import React from "react";
import { Link } from "react-router";
import "../styling/App.css";
import Navbar from "../components/navbar";

function Home() {
	return (
		<div className="site-wrapper">
			<div className="site-first">
				<h1>
					Matteo <br /> Giamba<span>rresi</span>
				</h1>
				<div className="images">
					<img src="./public/Matteo_intro.png" alt="Shanks" />
				</div>
				<div className="rectangle"></div>
			</div>
		</div>
	);
}

export default Home;
