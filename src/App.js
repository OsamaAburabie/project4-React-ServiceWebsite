// import './App.css';
import React from 'react';
import './style.css';
import Mynav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services/Services';
import Register from './components/Regitster';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Book from './components/Booking/Book';
import {
	HashRouter,
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
localStorage.setItem(
	'user',
	JSON.stringify({ name: '', password: '', email: '', phoneNumber: '' })
);

localStorage.setItem('Data', JSON.stringify({ name: '', info: '' }));
function App() {
	return (
		<Router basename="/">
			<div className="big__container">
				<Mynav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Services" component={Services} />
					<Route path="/Register" component={Register} />
					<Route path="/Profile" component={Profile} />
					<Route path="/Book/:id" component={Book} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
