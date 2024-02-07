import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Favorite from './components/Favorite';
import Change from './components/change';

import Cakes from './components/Cakes';
import Chefs from './components/Chefs';
import Conclu from './components/conclu';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Hero></Hero>
			<Change id="Cause"></Change>
			<Favorite></Favorite>
			<Chefs id="menu"></Chefs>
			<Cakes id="Effect"></Cakes>
			<Conclu></Conclu>
			<Footer></Footer>
			
		</Router>
	);
}

export default App;
