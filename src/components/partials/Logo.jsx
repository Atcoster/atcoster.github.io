import React, { Component } from 'react';
import Logo from '../../assets/icons/logo.svg';

class Navigation extends Component {

	render() {
		return (
			<a className='logo' href="http://atcoster.github.io/portfolio" target="_blank" rel="noopener noreferrer">
				<img src={ Logo } alt='logo'/>
			</a>
		);
	}
}

export default Navigation;
