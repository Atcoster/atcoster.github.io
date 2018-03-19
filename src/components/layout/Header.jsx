import React, { Component } from 'react';
import Logo from '../partials/Logo';
import Navigation from '../partials/Navigation';
import Social from '../partials/Social';

class Header extends Component {

	render() {
		return (
			<aside className='header'>
				<Logo />
				<Navigation />
				<Social />
			</aside>
		);
	}
}

export default Header;
