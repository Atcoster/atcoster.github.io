import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from '../partials/Project';
import ProjectSlider from '../../utils/ProjectSlider';

class Slider extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			projects : this.props.data,
			value    : '1'
		}
	}

	onChange( event ) {
		let value = parseInt( event.target.value - 1 );

		this.setState( {
			value : event.target.value
		} )

		ProjectSlider.scrollToProject( value );
	}

	render() {
		let total = this.state.projects.length;

		return (
			<div className='slider'>
				<ul className='slider__list'>
					{
						this.state.projects.map(( project, index ) => {
							return (
								<Project key= { index } data={ project } />
							)
						} )
					}
				</ul>
				<div className='slider__control'>
					<input
						className='slider__input'
						type='range'
						min='1'
						max={ total }
						steps='1'
						value={ this.state.value }
						onChange= { this.onChange.bind( this ) }
					/>
				</div>
			</div>
		);
	}
}

Slider.propTypes = {
	data : PropTypes.array.isRequired
}

export default Slider;
