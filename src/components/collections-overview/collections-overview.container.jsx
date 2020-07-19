import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


// Selectors
// Is there a shop or not, returns a boolean.
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

// HOC Components
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.components';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

