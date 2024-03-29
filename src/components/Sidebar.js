import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggle, show }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={`sideContainer ${show ? 'show' : ''}`}>
			<div className="close" onClick={toggle}>
				Close
			</div>
			<div className="sideMenu">
				<Link to="/" className="sideLink" onClick={() => scrollTo('Cause')}>
					
				</Link>
				<Link to="/" className="sideLink" onClick={() => scrollTo('Effect')}>
					
				</Link>
				<Link to="/" className="sideLink">
					
				</Link>
				<Link to="/" className="sideLink">
					Developer
				</Link>

				<div className="btnWrap">
					<div className="sideRoute"></div>
				</div>
			</div>
		</div>
		// <SidebarContainer isOpen={isOpen} onClick={toggle}>
		// 	<Icon onClick={toggle}>
		// 		<CloseIcon />
		// 	</Icon>

		// 	<SidebarMenu>
		// 		<SidebarLink to="/">Pizzas</SidebarLink>
		// 		<SidebarLink to="/">Desserts</SidebarLink>
		// 		<SidebarLink to="/">Full Menu</SidebarLink>
		// 	</SidebarMenu>

		// 	<SideBtnWrap>
		// 		<SidebarRoute to="/">Order Now</SidebarRoute>
		// 	</SideBtnWrap>
		// </SidebarContainer>
	);
};

export default Sidebar;
