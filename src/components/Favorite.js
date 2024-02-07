import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/Cyber Security.jpeg';
const Favorite = () => {
    return (
		<div className="favContainer">
			<h2>Why is this hobby interest</h2>

			<div className="favContent">
				<Slide left>
				<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<h1>
						SECURITY
						</h1>
					</div>
				</Slide>
			</div>
			
		</div>
	);
};

export default Favorite;

