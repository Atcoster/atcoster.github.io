import React, { Component } from 'react';

class Social extends Component {

	render() {
		return (
			<ul className='social'>
				<li className='social__item'>
					<a href="#">
						<i className="social__item-icon social__item-icon--competa"></i>
					</a>
				</li>
				<li className='social__item'>
					<a href="#">
						<i className="social__item-icon social__item-icon--github"></i>
					</a>
				</li>
			</ul>
		);
	}
}

export default Social;
