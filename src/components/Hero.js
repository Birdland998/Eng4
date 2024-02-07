import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';

const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">CODING👨🏼‍💻</h1>
					<p>
					</p>
					{/*<div className="btn">👨🏼‍💻</div>*/}
				</div>
			</div>
		</div>
	);
};

export default Hero;

