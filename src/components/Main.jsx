import React, { Component } from 'react';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

class Main extends Component {

	constructor( props ) {
		super( props );
	}

	handleScroll( e ) {
		window.scrollBy( e.deltaY, 0 );

		e.preventDefault();
	}

	render() {
		return (
			<div className='main' ref= {( main ) => { this.main = main; } } onWheel= { this.handleScroll.bind( this ) } >
				<Header />
				<Home />
				<About />
				<Projects />
			</div>
		);
	}
}

export default Main;
