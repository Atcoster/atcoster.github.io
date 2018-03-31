import React, { Component } from 'react';
import Story from './subpages/Story';
import Skills from './subpages/Skills';

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
