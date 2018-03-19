import React, { Component } from 'react';
import Story from '../partials/Story';
import Skills from '../partials/Skills';

class About extends Component {

	render() {
		return (
			<section className='about'>
				<Story />
				<Skills />
			</section>
		);
	}
}

export default About;
