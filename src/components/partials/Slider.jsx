import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from '../partials/Project';
import ProjectSlider from '../../utils/ProjectSlider';

class Slider extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			projects : this.props.data,
			value    : ''
		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.activeID !== this.state.value ) {
			this.setState( {
				value : nextProps.activeID
			} );
			ProjectSlider.scrollToProject( nextProps.activeID );
		}
	}

	componentDidMount() {
		this.setState( {
			value : this.props.activeID - 1
		} )
	}

	onChange( event ) {
		let value = parseInt( event.target.value - 1 );

		ProjectSlider.scrollToProject( value );
		this.props.handleActiveProject( value, 'onChange' );
	}

	handleActiveProject( value ) {
		this.props.handleActiveProject( value, 'onClick' );
	}

	render() {
		let total = this.state.projects.length;

		return (
			<div className='slider'>
				<ul className='slider__list'>
					{
						this.state.projects.map(( project, index ) => {
							let isActive = this.state.value === index ? true : false;

							return (
								<Project key={ index }
										id={ index + 1 }
										isActive={ isActive }
										data={ project }
										handleActiveProject={ this.handleActiveProject.bind( this ) }/>
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
						value={ this.state.value + 1 }
						onChange= { this.onChange.bind( this ) }
					/>
				</div>
			</div>
		);
	}
}

Slider.propTypes = {
	data                : PropTypes.array.isRequired,
	activeID            : PropTypes.number.isRequired,
	handleActiveProject : PropTypes.func.isRequired
}

export default Slider;
