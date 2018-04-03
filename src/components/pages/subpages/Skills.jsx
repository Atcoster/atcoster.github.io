import React, { Component } from 'react';

class Skills extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			pageName : 'SKILLS',
			skills   : [
				'HTML5', 'CSS3', 'JavaScript', 'Angular', 'React',
				'MongoDB', 'NodeJS', 'Sass_Scss', 'jQuery', 'Webpack',
				'Express', 'Redux', 'Grunt', 'NPM',	'Git', 'Java',
				'JSON', 'Bootstrap', 'Ionic', 'Firebase', 'SQL',
				'CSHARP', 'PHP', 'UX_UI', 'API', 'Swift', 'Android', 'Wordpress',
				'Photoshop', 'Illustrator', 'Trello', 'Scrum', 'Slack', 'NoSql', 'XML'
			]
		}
	}

	render() {

		return (
			<div className='skills'>
				<article className='skills__content'>
					<h2 className='skills__title'>
						{ this.state.pageName }
					</h2>
					<ul className='skills__list'>
						{
							this.state.skills.map(( skill, index ) => {
								const SKILL   = skill.toLowerCase();

								return (
									<li key= { index } className='skills__item' >
										<img src= {`./src/assets/icons/skills/${ SKILL }.svg`} alt= { SKILL }/>
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
