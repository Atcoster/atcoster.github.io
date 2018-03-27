import React, { Component } from 'react';

class Skills extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			page   : 'SKILLS',
			skills : [
				'HTML5', 'CSS3', 'JavaScript', 'Angular', 'React',
				'MongoDB', 'NodeJS', 'Sass/Scss', 'jQuery', 'Webpack',
				'Express', 'Redux', 'Grunt', 'NPM',	'Git',
				'JSON', 'Bootstrap', 'Ionic', 'Firebase', 'SQL',
				'C#', 'PHP', 'UI', 'API', 'Wordpress', 'Photoshop',
				'Illustrator', 'Trello', 'Scrum', 'Slack', 'NoSql',
				'bla', 'bla', 'bla', 'bla', 'bla', 'bla',
				'bla', 'bla', 'bla', 'bla', 'bla', 'bla',
				'bla', 'bla', 'bla', 'bla', 'bla', 'bla',
				'bla', 'bla'
			]
		}
	}

	render() {

		return (
			<div className='skills'>
				<article className='skills__content'>
					<h2 className='skills__title'>
						{ this.state.page }
					</h2>
					<ul className='skills__list'>
						{
							this.state.skills.map(( skill, index ) => {
								const SKILL   = skill.toLowerCase();
								const DEFAULT = 'noimage.svg';
								const ICON    = 'html5'      === SKILL ||
												'css3'       === SKILL ||
												'javascript' === SKILL ? `${ SKILL }.svg` : DEFAULT;

								return (
									<li key= { index } className='skills__item' >
										<img src= {`./src/assets/icons/skills/${ ICON }`} alt= { SKILL }/>
									</li>
								)
							} )
						}
					</ul>
				</article>
			</div>
		);
	}
}

export default Skills;
