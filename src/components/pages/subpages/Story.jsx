import React, { Component } from 'react';

class Story extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			pageName : 'STORY!'
		}
	}

	render() {
		return (
			<div className='story'>
				<article className='story__content'>
					<h2 className='story__title'>
						{ this.state.pageName }
					</h2>
					<p className='story__text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic voluptas, omnis amet officiis
						laboriosam delectus quae exercitationem maiores libero quod mollitia labore, eum architecto odio.
						Fuga corporis delectus nostrum magni minus, eum ab dolor architecto nihil ea maiores eligendi qui
						sequi provident vel fugiat perferendis nesciunt beatae aut perspiciatis reiciendis ratione! Iusto
						consequuntur dolor soluta cum, atque animi ab.
					</p>

					<p className='story__text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic voluptas, omnis amet officiis
						laboriosam delectus quae exercitationem maiores libero quod mollitia labore, eum architecto odio.
						Fuga corporis delectus nostrum magni minus, eum ab dolor architecto nihil ea maiores eligendi qui
						sequi provident vel fugiat perferendis nesciunt beatae aut perspiciatis reiciendis ratione! Iusto
						consequuntur dolor soluta cum, atque animi ab.
					</p>
				</article>
			</div>
		);
	}
}

export default Story;
