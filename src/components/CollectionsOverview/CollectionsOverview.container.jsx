import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shopdata/shop.selector';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview)
//connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;