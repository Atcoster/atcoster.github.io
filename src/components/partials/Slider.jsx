import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Project from '../partials/Project';
import ProjectSlider from '../../utils/ProjectSlider';
import Swipeable from 'react-swipeable';

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

	onChangeInput( event ) {
		let value = parseInt( event.target.value - 1 );

		ProjectSlider.scrollToProject( value );
		this.props.handleActiveProject( value, 'onChange' );
	}

	handleActiveProject( value ) {
		this.props.handleActiveProject( value, 'onClick' );
	}

	swiping( e, deltaX ) {
		let slider        = document.querySelector( '.slider' );
		let sliderList    = document.querySelector( '.slider__list' );
		let allItems      = document.querySelectorAll( '.project' );
		let min           = slider.getBoundingClientRect().left;
		let marginLeft    = parseInt( sliderList.style.marginLeft, 10 );
		let posX          = deltaX;
		let sliderWidth   = 0;
		let swipe         = '';

		[].forEach.call( allItems, ( item ) => {
			let itemWith = item.getBoundingClientRect().width;
				sliderWidth += itemWith;
		} );

		if ( posX < 0 ) {
			posX  = -50;
			swipe = 'left';
		} else {
			posX  = 50;
			swipe = 'right';
		}

		if ( marginLeft + sliderWidth <= min + 50 ) {
			if (  swipe === 'right' ) {
				return;
			}
		}

		if ( marginLeft >= min ) {
			if ( swipe === 'left' ) {
				return;
			}
		}

		sliderList.style.marginLeft = `${ marginLeft - posX }px`;
	}

	render() {
		let total = this.state.projects.length;

		const sliderStyle = {
			marginLeft : 0
		};

		return (
			<div className='slider'>
			<Swipeable onSwiping={ this.swiping }>
				<ul className='slider__list' style={ sliderStyle }>
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
			</Swipeable>
				<div className='slider__control'>
					<input
						className='slider__input'
						type='range'
						min='1'
						max={ total }
						steps='1'
						value={ this.state.value + 1 }
						onChange= { this.onChangeInput.bind( this ) }
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
