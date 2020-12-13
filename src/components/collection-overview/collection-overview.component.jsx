import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
