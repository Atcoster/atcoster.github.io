import React, { Component } from 'react';
import Header from './layout/Header';
import Scroll from '../utils/ScrollAnimation.js';
import DetectBrowser from '../utils/DetectBrowser';
import DetectMobile from '../utils/DetectMobile.js';
import Nav from '../utils/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

class Main extends Component {

	componentDidMount() {
		if ( DetectMobile.os()) {
			let social    = document.querySelector( '.social' );
			let container = document.querySelector( '.container' );

			container.appendChild( social );
		}
	}

	handleScroll( event ) {
		Nav.activeHandler();

		let steps = event.deltaY;
		let isFirefox = DetectBrowser.firefox();

		if ( isFirefox ) {
			steps *= 50;
		}

		DetectMobile.os() ? window.scrollBy( 0, steps ) : window.scrollBy( steps, 0 );

		event.preventDefault();
	}

	handleNavClick( event ) {
		Scroll.toSection( event, 1000 );
		event.preventDefault();
	}

	render() {
		return (
			<div className='container' ref={( main ) => { this.main = main; } }
			     onWheel={ this.handleScroll.bind( this ) } onTouchMove={ this.handleScroll.bind( this ) }>
				<Header handleNavClick= { this.handleNavClick.bind( this ) }/>
				<Home />
				<About />
				<Projects />
			</div>
		);
	}
}

export default Main;
