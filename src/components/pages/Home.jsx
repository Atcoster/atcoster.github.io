import React, { Component } from 'react';
import DetectMobile from '../../utils/DetectMobile';
import Particles from 'react-particles-js';
import Typed from 'react-typed';

class Home extends Component {

	componentDidMount() {
		let headerHight = document.querySelector( '.header' ).getBoundingClientRect().height;
		let home        = document.querySelector( '.home' );
		let paddingTop  = headerHight + 20;
		let isMobile    = DetectMobile.os();

		if ( isMobile ) {
			home.style.paddingTop = `${ paddingTop }px`;
		}
	}

	render() {
		return (
			<section className='home'>
			<Particles
					params = {
						{
							'particles' : {
								'line_linked' : {
									'shadow' : {
										'enable' : true,
										'color'  : '#fff',
										'blur'   : 3
									},
									'distance' : 150,
									'shape'    : {
										'type'    : 'circle',
										'polygon' : {
											'nb_sides' : 5
										}
									}
								}
							},
							'interactivity' : {
								'detect_on' : 'canvas',
								'events'    : {
									'onhover' : {
										'enable' : true,
										'mode'   : 'repulse'
									}
								}
							}
						}
					}
					style={
						{
							position : 'absolute',
							width    : '100vw',
							left     : 0,
							top      : 0,
							zIndex   : 97
						}
					}
				/>
				<article className='home__content'>
					<h1 className='home__title'>
						<Typed
							strings= {
								[
									'Bienvenid@!',
									'Welcome!',
									'Welkom!'
								]
							}
							typeSpeed = { 50 }
							backSpeed = { 50 }
							attr= 'placeholder'
							loop >
							<input type='text'/>
						</Typed>
					</h1>
					<h3 className='home__subtitle'>I am Andji, a Front-end Developer.</h3>
					<p className='home__text'>
						From an early age I have been very passionate about programming and technology in general.
						In recent years I have worked on Front-end as well as Back-end projects, but my passion is on the Front-end.
						My knowledge lies mainly in the area of HTML(5), Sass/Scss combined with BEM, JavaScript (ES5 / ES6)
						and I have experience with Angular / TypeScript, ReactJS and Node.js.
						During the development of applications I like working in Scrum teams and I pay attention to details to
						get the best out of the project. I am also creative, curious / eager to learn and enthusiastic.
					</p>
				</article>
			</section>
		);
	}
}

export default Home;
