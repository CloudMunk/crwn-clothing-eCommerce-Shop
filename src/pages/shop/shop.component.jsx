import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Firestore
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// Actions
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    // Setting state without using constuctor & super, React does this in the background for us now.
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount () {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        });
    }


    render () {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} 
                />
            </div>
        );
    }
}

  
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);