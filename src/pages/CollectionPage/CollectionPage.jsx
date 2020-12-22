import React from 'react';

import './CollectionPage.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shopdata/shop.selector';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
	console.log(collection)
	return (
		<div className='collection-page'>
			<h2> CollectionPage</h2>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
