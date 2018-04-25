import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

class ProjectDetails extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			projects : this.props.data,
			id       : 0,
			show     : ''
		}
	}

	componentDidMount() {
		let count = Object.keys( this.state.projects ).length,
			id    = count <= 1 ? 0 : 1;

		this.setState( {
			id : id
		} )
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.show !== this.state.show ) {
			this.setState( {
				show : nextProps.show
			} );
		}

		if ( nextProps.id !== this.state.id ) {
			this.setState( {
				id : nextProps.id
			} );
		}
	}

	closeProductDetails( event ) {
		let clickedElem  = event.target.className,
			acceptedElem = [ 'active', 'close' ];

		for ( let elem of acceptedElem ) {
			if ( clickedElem.indexOf( elem ) >= 0 ) {
				this.props.closeProductDetails();
			}
		}
	}

	swiped( e, deltaX, deltaY, isFlick, velocity ) {
		const MIN = 60;
		const id  = this.state.id;

		if ( deltaX <= MIN && deltaX >= -MIN ) return;

		let newID = deltaX > 0 ? id + 1 : id - 1;

		this.props.handleActiveProject( newID, 'onClick' );
	}

	handleActiveProject( e ) {
		let clickedElem = e.target.className,
			currentID   = this.state.id,
			newID       = clickedElem.indexOf( 'larrow' ) > 0 ? currentID - 1 : currentID + 1;

		this.props.handleActiveProject( newID, 'onClick' );
	}

	render() {
		let project      = this.state.projects[ this.state.id ],
			activeClass  = this.state.show ? ' details--active' : '',
			company      = project.company.replace( /\s+/g, '' ).toLowerCase(),
			folder       = project.folder.toLowerCase(),
			name         = project.name,
			descriptions = [],
			disciplines  = [],
			techniques   = [],
			images       = [];

		[].forEach.call( project.description, ( desc, index ) => {
			descriptions.push( <p key={ index }> { desc } </p> );
		} );

		[].forEach.call( project.disciplines, ( disc, index ) => {
			let comma = index < project.disciplines.length - 1 ? ',' : '';
			disciplines.push( <span key={ index }> { disc }{ comma } </span> );
		} );

		[].forEach.call( project.techniques, ( tech, index ) => {
			let comma = index < project.techniques.length - 1 ? ',' : '';
			techniques.push( <span key={ index }> { tech }{ comma } </span> );
		} );

		[].forEach.call( project.images.showcase, ( img, index ) => {
			let image = require( `../../assets/images/projects/${ company }/${ folder }/${ img }` );
			images.push(
				<img key={ index }
					src={ image }
					alt={ project.name }
				/>
			);
		} );

		return (
			<div className={`details ${ activeClass }`} onClick={ this.closeProductDetails.bind( this )}>
				<Swipeable onSwiped={ this.swiped.bind( this ) }>
					<div className='details__wrapper'>
						<div className='details__control'>
							<span className={`details__icon details__icon--larrow${ this.state.id <= 0 ? ' details__icon--off' : '' }`}
								onClick={ this.handleActiveProject.bind( this ) }></span>
							<span className={`details__icon details__icon--rarrow
								${ this.state.id >= this.state.projects.length - 1 ? ' details__icon--off' : '' }`}
								onClick={ this.handleActiveProject.bind( this ) }></span>
							<span className='details__icon details__icon--close'
								onClick={ this.closeProductDetails.bind( this ) }></span>
						</div>
						<article className='details__info'>
							<h2 className='details__name'> { name } </h2>
							<div className='details__descriptions'>
								{ descriptions }
							</div>
							<p className='details__disciplines'>
								<strong> Disciplines: </strong>
								{ disciplines }
							</p>
							<p className='details__techniques'>
								<strong> Techniques: </strong>
								{ techniques }
							</p>
						</article>
						<div className='details__images'>
							{ images }
						</div>
					</div>
				</Swipeable>
			</div>
		)
	}
}

ProjectDetails.propTypes = {
	data                : PropTypes.array.isRequired,
	closeProductDetails : PropTypes.func.isRequired,
	handleActiveProject : PropTypes.func.isRequired,
	show                : PropTypes.bool.isRequired,
	id                  : PropTypes.number.isRequired
}

export default ProjectDetails;
