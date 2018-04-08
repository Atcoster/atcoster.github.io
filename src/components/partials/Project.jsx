import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Project extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			isActive : ''
		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.isActive !== this.state.isActive ) {
			this.setState( {
				isActive : nextProps.isActive
			} );
		}
	}

	handleOnclick() {
		const ID = this.props.id - 1;
		this.props.handleActiveProject( ID );
	}

	render() {
		let project  = this.props.data,
			isActive = this.state.isActive,
			name     = project.name,
			company  = project.company.replace( /\s+/g, '' ).toLowerCase(),
			folder   = project.folder.toLowerCase(),
			thumb    = project.images.thumb.toLowerCase();

		return (
			<li className={`project${ isActive ? ' project--active' : ''}`} onClick={ this.handleOnclick.bind( this ) }>
				<Button/>
				<h4 className='project__name'>
					<span className="project__name__text">{ project.name }</span>
				</h4>
				<img className='project__image' src={`./src/assets/images/projects/${ company }/${ folder }/${ thumb }`} alt={ name }/>
			</li>
		)
	}
}

Project.propTypes = {
	data                : PropTypes.object.isRequired,
	id                  : PropTypes.number.isRequired,
	isActive            : PropTypes.bool.isRequired,
	handleActiveProject : PropTypes.func.isRequired
}

export default Project;
