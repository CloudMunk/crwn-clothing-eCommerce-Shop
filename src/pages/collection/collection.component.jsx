import React from 'react';
import { connect } from 'react-redux';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection, ...otherProps }) => {
    const { title, items } = collection;
    return (
    <div className="collection-page">
        <h2 className="title">{ title }</h2>
        <div className="items">
            {
                items.map(item => 
                    <CollectionItem key={item.id} item={item} {...otherProps} />
                )
            }
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    // Curried function that returns another function from inside shop selectors
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);