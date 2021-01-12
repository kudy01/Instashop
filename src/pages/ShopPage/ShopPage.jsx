import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shopdata/shop.actions';
import { selectIsCollectionFetching, selectCollectionsIsLoaded } from '../../redux/shopdata/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	

	componentDidMount() {
	    const { fetchCollectionsStartAsync } = this.props;

	    fetchCollectionsStartAsync();
	  }

	render() {
		const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

		return (
			<div className='shop-page'>
		    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
		    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} />
		  </div>
		)
	}
  
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectCollectionsIsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
