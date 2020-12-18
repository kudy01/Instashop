import React from 'react';

import './Category.styles.scss';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

const Category = ({ match }) => {
	console.log(match)
	return (
		<div className='category'>
			<h2> Category</h2>
		</div>
	)
}

export default Category;