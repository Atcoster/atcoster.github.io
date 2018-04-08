import React, { Component } from 'react';

class Social extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			links : [
				{
					name : 'competa',
					url  : 'http://www.competa.com'
				},
				{
					name : 'github',
					url  : 'https://github.com/Atcoster'
				}
			]
		}
	}

	render() {
		return (
			<ul className='social'>
			{
				this.state.links.map(( link, index ) => {

					const NAME = link.name.toLocaleLowerCase(),
					      URL  = link.url.toLocaleLowerCase();

					return (
						<li key= { index } className='social__item'>
							<a href={URL} className={`social__icon social__icon--${NAME}`} target="_blank" rel="noopener noreferrer"></a>
						</li>
					)
				} )
			}
			</ul>
		);
	}
}

export default Social;
