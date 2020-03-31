import React from "react";

import collectionsOverview from "../../components/collections-overview/collections-overview.component"

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <collectionsOverview />
    </div>
);

export default ShopPage;
