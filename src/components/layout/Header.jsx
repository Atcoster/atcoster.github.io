import React, { Component } from 'react';
import Logo from '../partials/Logo';
import Navigation from '../partials/Navigation';
import Social from '../partials/Social';
import PropTypes from 'prop-types';

class Header extends Component {

	constructor( props ) {
		super( props );
	}

	handleNavClick( e ) {
		this.props.handleNavClick( e );
	}

	render() {
		return (
			<aside className='header'>
				<Logo />
				<Navigation handleNavClick= { this.handleNavClick.bind( this ) } />
				<Social />
			</aside>
		);
	}
}

Header.propTypes = {
	handleNavClick : PropTypes.func.isRequired
}

export default Header;
