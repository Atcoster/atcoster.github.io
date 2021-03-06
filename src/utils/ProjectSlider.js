const SLIDER = {
	scrollToProject : ( value ) => {
		let slider       = document.querySelector( '.slider__list' ),
			projects     = document.querySelectorAll( '.project' ),
			projectWidth = document.querySelector( '.project:first-child' ).clientWidth;

		[].forEach.call( projects, ( project, index ) => {
			project.className = index === value ? 'project project--active' : 'project';
		} )

		slider.style.marginLeft = `${ -value * ( projectWidth + 50 ) }px`;
	}
}

export default SLIDER;
