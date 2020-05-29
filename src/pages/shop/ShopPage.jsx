import React, { useState } from 'react';

import CollectioPreview from '../../components/Collection-Preview'

import SHOP_DATA from './shop.data.js';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div>
      <h1 className='text-2xl font-extrabold text-gray-900 mb-4'>Collections</h1>
      <div>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectioPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    </div>
  )
};

export default ShopPage;