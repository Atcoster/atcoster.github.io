import DetectMobile from './DetectMobile.js';

const NAV = {
	activeHandler : ( event ) => {
		let isMobile = DetectMobile.os(),
		    originalClass = 'nav__link',
		    activeClass   = ` ${originalClass}--active`,
		    offset        = isMobile ? window.pageYOffset : window.pageXOffset,
		    homeRect      = document.querySelector( '.home' ).getBoundingClientRect(),
		    storyRect     = document.querySelector( '.story' ).getBoundingClientRect(),
		    skillsRect    = document.querySelector( '.skills' ).getBoundingClientRect(),
		    projectsRect  = document.querySelector( '.projects' ).getBoundingClientRect(),
		    items         = document.querySelectorAll( `.${originalClass}` ),
		    activeSection = '';

		for ( let item of items ) {
			if ( 0 < item.className.indexOf( 'active' )) {
				item.className = originalClass;
			}
		}

		if ( event ) {
			event.currentTarget.className = originalClass + activeClass;
		} else {
			if ( !isMobile ) {
				let	skewedWidth        = 250,
				    homeFixedWidth     = homeRect.width - skewedWidth,
					storyFixedWidth    = storyRect.width - skewedWidth,
					skillsFixedWidth   = skillsRect.width - skewedWidth,
				    projectsFixedWidth = projectsRect.width - skewedWidth;

				if ( offset < homeFixedWidth )
					activeSection = 'home';

				if ( offset >= homeFixedWidth && offset <= homeFixedWidth + storyFixedWidth )
					activeSection = 'story';

				if ( offset >= homeFixedWidth + storyFixedWidth && offset <= homeFixedWidth + storyFixedWidth + skillsFixedWidth )
					activeSection = 'skills';

				if ( offset > homeFixedWidth + storyFixedWidth + skillsFixedWidth &&
					offset <= homeFixedWidth + storyFixedWidth + skillsFixedWidth + projectsFixedWidth )
					activeSection = 'projects';
			} else {
				let header         = document.querySelector( '.header' ),
				    headerheight   = header.getBoundingClientRect().height,
				    homeHeight     = homeRect.height - headerheight,
				    storyHeight    = storyRect.height - headerheight,
				    skillsHeight   = skillsRect.height - headerheight,
				    projectsHeight = projectsRect.height - headerheight;

				if ( offset <= homeHeight )
					activeSection = 'home';

				if ( offset > homeHeight && offset < homeHeight + storyHeight )
					activeSection = 'story';

				if ( offset >= homeHeight + storyHeight && offset <= homeHeight + storyHeight + skillsHeight )
					activeSection = 'skills';

				if ( offset >= homeHeight + storyHeight + skillsHeight && offset <= homeHeight + storyHeight + skillsHeight + projectsHeight )
					activeSection = 'projects';
			}
		}

		for ( let item of items ) {
			let itemHref = item.href.split( '#' )[ 1 ].toString();
			if ( itemHref === activeSection ) {
				item.className = originalClass + activeClass;
			}
		}
	}
}

export default NAV;
