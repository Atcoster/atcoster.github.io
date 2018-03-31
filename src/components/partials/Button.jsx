import React, { Component } from 'react';

class Button extends Component {

	render() {
		return (
			<button className='button project__button'>
				<span className='button__text'>VIEW CASE</span>
				<span className='button__arrow project__button__arrow'></span>
			</button>
		)
	}
}

export default Button;
