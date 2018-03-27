const DETECTBROWSER = {
	ieOrEdge : ( ) => {
		const UA = window.navigator.userAgent;

		let msie    = UA.indexOf( 'MSIE ' ),
			trident = UA.indexOf( 'Trident/' ),
			edge    = UA.indexOf( 'Edge/' );

		if ( 0 < msie ) {

			// IE 10 or older => return version number
			return parseInt( UA.substring( msie + 5, UA.indexOf( '.', msie )), 10 );
		}

		if ( 0 < trident ) {

			// IE 11 => return version number
			let rv = UA.indexOf( 'rv:' );
			return parseInt( UA.substring( rv + 3, UA.indexOf( '.', rv )), 10 );
		}

		if ( 0 < edge ) {

			// Edge (IE 12+) => return version number
			return parseInt( UA.substring( edge + 5, UA.indexOf( '.', edge )), 10 );
		}

		return false;
	},
	firefox : ( ) => {
		return -1 < navigator.userAgent.toLowerCase().indexOf( 'firefox' );
	}
}

export default DETECTBROWSER;
