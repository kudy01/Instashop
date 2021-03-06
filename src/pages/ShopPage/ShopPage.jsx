import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPage from '../CollectionPage/CollectionPage';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shopdata/shop.actions';
import { selectCollectionsIsLoaded } from '../../redux/shopdata/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	

	componentDidMount() {
	    const { fetchCollectionsStart } = this.props;

	    fetchCollectionsStart();
	  }

	render() {
		const { match, isCollectionsLoaded } = this.props;

		return (
			<div className='shop-page'>
		    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
		    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} />
		  </div>
		)
	}
  
}

const mapStateToProps = createStructuredSelector({

	isCollectionsLoaded: selectCollectionsIsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
