import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
	
	unsubscribeFromSnapShot = null;

	componentDidMount = () => {
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot( async snapShot => {
			convertCollectionsSnapshotToMap(snapShot)
		})
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
		    <Route exact path={`${match.path}`} component={CollectionsOverview} />
		    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		  </div>
		)
	}
  
}

export default ShopPage;
