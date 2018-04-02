import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectDetails extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			project : this.props.data,
			id      : '',
			show    : ''
		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.show !== this.state.show ) {
			this.setState( {
				show : nextProps.show
			} );
		}
		if ( nextProps.data !== this.state.project ) {
			this.setState( {
				project : nextProps.data
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
			if ( 0 <= clickedElem.indexOf( elem )) {
				this.props.closeProductDetails();
			}
		}
	}

	handleActiveProject( e ) {
		let clickedElem = e.target.className,
			currentID   = this.state.id,
			newID       = 0 < clickedElem.indexOf( 'larrow' ) ? currentID - 1 : currentID + 1;

		this.props.handleActiveProject( newID, 'onClick' );
	}

	render() {
		let project      = this.state.project,
			activeClass  = this.state.show ? ' details--active' : '',
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
			images.push( <img key={ index } src={`./src/assets/images/projects/${project.folder}/${ img }`} alt={ project.name } /> );
		} )

		return (
			<div className={`details ${ activeClass }`} onClick={ this.closeProductDetails.bind( this )}>
				<div className='details__wrapper'>
					<div className='details__control'>
						<span className='details__icon details__icon--larrow' onClick={ this.handleActiveProject.bind( this ) }></span>
						<span className='details__icon details__icon--rarrow' onClick={ this.handleActiveProject.bind( this ) }></span>
						<span className='details__icon details__icon--close' onClick={ this.closeProductDetails.bind( this ) }></span>
					</div>
					<article className='details__info'>
						<h2 className='details__name'> { project.name } </h2>
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
			</div>
		)
	}
}

ProjectDetails.propTypes = {
	data                : PropTypes.object.isRequired,
	closeProductDetails : PropTypes.func.isRequired,
	handleActiveProject : PropTypes.func.isRequired,
	show                : PropTypes.bool.isRequired,
	id                  : PropTypes.number.isRequired
}

export default ProjectDetails;
