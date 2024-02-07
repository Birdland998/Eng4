
import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/js.jpeg';

const Cakes = () => {
	return (
		<div className="favContainer">
			<h2>What is Code</h2>

			<div className="favContent">
				<Slide left>
				<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
						Code, in the context of computing, refers to instructions written in a programming language that a computer can execute. It consists of statements and algorithms to perform specific tasks or solve problems, enabling the computer to carry out desired functions.
						</p>
					</div>
				</Slide>
			</div>
			
		</div>
	);
};

export default Cakes;
