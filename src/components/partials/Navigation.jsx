import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../../utils/Nav';
import DetectMobile from '../../utils/DetectMobile.js';

class Navigation extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			links : DetectMobile.os() ? [ 'home', 'story', 'skills', 'projects' ] : [ 'home', 'about', 'projects' ]
		}
	}

	componentDidMount() {
		Nav.activeHandler();
	}

	handleClick( event ) {
		Nav.activeHandler( event ); // handle the active menu item
		this.props.handleNavClick( event );
	}

	render() {
		return (
			<ul className='nav'>
				{
					this.state.links.map(( link, index ) => {
						const LINK = link.toLowerCase();
						const NAME = LINK.charAt( 0 ).toUpperCase() + LINK.slice( 1 );

						return (
							<li key= { index } className='nav__item'>
								<a href={`#${ LINK }`} onClick={ this.handleClick.bind( this )} className='nav__link'>
									<i className={`nav__icon nav__icon--${ LINK }`}></i>
									<span className='nav__text'>{ NAME }</span>
								</a>
							</li>
						)
					} )
				}
			</ul>
		);
	}
}

Navigation.propTypes = {
	handleNavClick : PropTypes.func.isRequired
}

export default Navigation;
