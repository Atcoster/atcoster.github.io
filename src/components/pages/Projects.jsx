import React, { Component } from 'react';
import Slider from '../partials/Slider';
import ProjectDetails from '../partials/ProjectDetails';
import Data from '../../data/projects.json';

class Projects extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			pageName     : 'PROJECTS',
			projects     : [],
			activeID     : 1,
			detailActive : false
		}
	}

	componentWillMount() {
		let projects       = Data.projects,
		    activeProjects = [];

		for ( let project of projects ) {
			if ( project.show ) {
				activeProjects.push( project );
			}
		}

		this.setState( {
			projects : activeProjects
		} )
	}

	handleActiveProject( active, event ) {
		let activeID      = active,
			displayDetail = 'onClick' === event;

		if ( 0 > activeID ) {
			activeID = 0;
		}

		if ( activeID >= this.state.projects.length - 1 ) {
			activeID = this.state.projects.length - 1;
		}

		this.setState( {
			activeID     : activeID,
			detailActive : displayDetail
		} )
	}

	closeProductDetails() {
		this.setState( {
			detailActive : false
		} )
	}

	render() {
		let projects = this.state.projects,
			total    = this.state.projects.length,
			activeID = this.state.activeID

		return (
			<section className={`projects ${ this.state.detailActive ? ' projects--overflow' : ''}`}>
				<div className='projects__content'>
					<h2 className='projects__title'>
						{ this.state.pageName }
						<span className="projects__total">{ total }</span>
					</h2>
					<Slider data={ projects } activeID={ activeID } handleActiveProject={ this.handleActiveProject.bind( this ) }/>
				</div>
				<ProjectDetails data={ projects }
								id={ activeID }
								show={ this.state.detailActive }
								closeProductDetails={ this.closeProductDetails.bind( this )}
								handleActiveProject={ this.handleActiveProject.bind( this ) }/>
			</section>
		);
	}
}

export default Projects;
