import React, { Component } from 'react';

class Navigation extends Component {

	render() {
		return (
			<ul className='nav'>
				<li className='nav__item'>
					<a href="#home">
						<i className="nav__item-icon nav__item-icon--home"></i>
					</a>
				</li>
				<li className='nav__item'>
					<a href="#about">
						<i className="nav__item-icon nav__item-icon--about"></i>
					</a>
				</li>
				<li className='nav__item'>
					<a href="#projects">
						<i className="nav__item-icon nav__item-icon--projects"></i>
					</a>
				</li>
			</ul>
		);
	}
}

export default Navigation;
