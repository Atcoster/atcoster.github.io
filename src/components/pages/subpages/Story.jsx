import React, { Component } from 'react';

class Story extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			pageName : 'STORY!'
		}
	}

	render() {
		return (
			<div className='story'>
				<article className='story__content'>
					<h2 className='story__title'>
						{ this.state.pageName }
					</h2>
					<p className='story__text'><strong>How I got into coding!</strong></p>
					<p className='story__text'>
						{
							`From an early age, I got interested in creating apps & games and because of that I got involved 
							in a forum with game & app developers. After spending some time on the forum I started learning the 
							basics of HTML, CSS and PHP. That's how I got involved into code.`
						}
					</p>
					<p className='story__text'><strong>Study!</strong></p>
					<p className='story__text'>
						{
							`I decided to move to The Netherland to study about programming. 
							I started studying Mediatechnology at Grafisch Lyceum Rotterdam and after that I did a 
							Bachelor Degree at Rotterdam University of Applied Sciences.`
						}
					</p>
					<p className='story__text'><strong>Front-end passion!</strong></p>
					<p className='story__text'>
						{
							`After doing both front and back-end development I found out that I get more excited while doing front-end.
							One of the reason is that I love working with Javascript, it's flexible and you can create 
							stuff for every platform with it, but also because I am interested in UI and UX`
						}
					</p>
				</article>
			</div>
		);
	}
}

export default Story;
