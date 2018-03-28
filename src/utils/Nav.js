const NAV = {
	activeHandler : ( event ) => {
		let originalClass      = 'nav__link',
			items              = document.querySelectorAll( `.${originalClass}` ),
			activeClass        = ` ${originalClass}--active`,
			offset             = window.pageXOffset,
			homeRect           = document.querySelector( '.home' ).getBoundingClientRect(),
			aboutRect          = document.querySelector( '.about' ).getBoundingClientRect(),
			projectsRect       = document.querySelector( '.projects' ).getBoundingClientRect();

		for ( let item of items ) {
			item.className = originalClass;
		}

		if ( event ) {
			event.currentTarget.className = originalClass + activeClass;
		} else {
			let skewedWidth        = 250,
				homeFixedWidth     = homeRect.width - skewedWidth,
				aboutFixedWidth    = aboutRect.width - skewedWidth,
				projectsFixedWidth = projectsRect.width - skewedWidth,
				activeSection      = '';

			if ( offset < homeFixedWidth )
				activeSection = 'home';

			if ( offset >= homeFixedWidth && offset <= homeFixedWidth + aboutFixedWidth )
				activeSection = 'about';

			if ( offset > homeFixedWidth + aboutFixedWidth && offset <= homeFixedWidth + aboutFixedWidth + projectsFixedWidth )
				activeSection = 'projects';

			for ( let item of items ) {
				let itemHref = item.href.split( '#' )[ 1 ].toString();
				if ( itemHref === activeSection ) {
					item.className = originalClass + activeClass;
				}
			}
		}
	}
}

export default NAV;
