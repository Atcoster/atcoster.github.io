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
					<p className='story__text'><strong>How i got into coding!</strong></p>
					<p className='story__text'>
						{
							`Since i was a child I've loved everything related to technology.
							When i was around 16 years old i got a nokia n-gage (mobile phone).
							I started looking on the internet for apps like music players and games to download and play on it.
							These games and apps where not free and the demo versions had limited functionalities.
							I had no creditcard to buy them. One day I found a forum where the administrators where giving them 
							for free with serial codes.	I started helping on these forums and became moderator and some 
							months after i became friend with the administrators.
							`
						}
					</p>
					<p className='story__text'>
						{
							`I became a little bit curious on how to create an app for symbian phones and how do these people 
							get the serial code. I asked the forum administrators about it, and they told me they where programmers. 
							After some months of helping I became also a co-administrator and got some more acces to the settings of 
							the forums settings and code. I started playing with the Html and Css, like changing the colors and images. 
							There's where i got into coding.`
						}
					</p>
					<p className='story__text'><strong>One goal, become a professional Developer!</strong></p>
					<p className='story__text'>
						{
							`I decided to move to The Netherland to study about programming. I worked very hard to save money and when 
							i was ready I left evrything behind (family, house and friends). It was hard in the beginning, 
							but i had a goal (become a professional developer). I started studying (Mediatechnology) at Grafish Lyceum Rotterdam 
							and finished my study in 3 years. After that I felt that I wasn't ready to start working at a company, 
							so i decided to do a Bachelor Degree at Rotterdam University of Applied Sciences.
							Because of some personal and family circumstances it took me a little bit more then what it should to graduate. 
							I didn't give up, i came here for one reason and i was determined to get it. While studying I started doing websites for 
							friends and freelance work.	It was a good combination beside school, but i missed something, 
							i had nobody to talk to about tech / development stuff. And thats why i decided to join a company 
							instead of working as freelancer. And here I am now working for Competa and learning new things everyday.`
						}
					</p>
				</article>
			</div>
		);
	}
}

export default Story;
