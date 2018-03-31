import React, { Component } from 'react';
import Slider from '../partials/Slider';
import Data from '../../data/projects.json';

class Projects extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			pageName : 'PROJECTS',
			projects : Data.projects
		}
	}

	render() {
		let total = this.state.projects.length;

		return (
			<section className='projects'>
				<div className='projects__content'>
					<h2 className='projects__title'>
						{this.state.pageName}
						<span className="projects__total">{ total }</span>
					</h2>
					<Slider data={ this.state.projects }/>
				</div>
			</section>
		);
	}
}

export default Projects;
