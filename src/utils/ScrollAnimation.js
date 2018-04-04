import DetectMobile from './DetectMobile.js';

const SCROLL = {
	toSection : ( event, duration ) => {
		let section     = event.currentTarget.href.split( '#' )[ 1 ].toString(),
			className   = '.' + section,
			element     = document.querySelector( className ),
			offset      = window.pageXOffset,
			elemRect    = element.getBoundingClientRect(),
			currentTime = 0,
			increment   = 20,
			scrollTo    = elemRect.left;

		let isMobile = DetectMobile.os();

		if ( isMobile ) {
			let header       = document.querySelector( '.header' ),
			    headerheight = header.getBoundingClientRect().height;

			offset   = window.pageYOffset;
			scrollTo = elemRect.top - headerheight;
		}

		/* t = current time / o = offset / s = scrollTo / d = duration */
		let easeInOut = ( t, o, s, d ) => {
			let time = t;
			time /= d / 2;

			if ( 1 > time ) return s / 2 * time * time + o;

			time--;

			return -s / 2 * ( time * ( time - 2 ) - 1 ) + o;
		}

		let step = ( ) => {
			currentTime += increment;

			let steps = easeInOut( currentTime, offset, scrollTo, duration );

			if ( isMobile ) {
				window.scrollTo( 0, steps );
			} else {
				window.scrollTo( steps, 0 );
			}

			if ( currentTime < duration ) {
				setTimeout( step, increment );
			}
		}

		step();
	}
}

export default SCROLL;
