const SLIDER = {
	scrollToProject : ( value ) => {
		let slider       = document.querySelector( '.slider__list' ),
			projects     = document.querySelectorAll( '.project' ),
			projectWidth = document.querySelector( '.project:first-child' ).clientWidth;

		projects.forEach(( project, index ) => {
			project.className = index === value ? 'project project--active' : 'project';
		} );

		slider.style.marginLeft = `${ -value * projectWidth - 85 }px`;
	}
}

export default SLIDER;
