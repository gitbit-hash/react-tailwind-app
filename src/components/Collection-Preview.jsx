import React from 'react';

import CollectionItem from './Collection-Item';

const CollectionPreview = ({ title, items }) => (
  <div className='flex flex-col mb-8'>
    <h1 className='text-3xl text-gray-700 font-bold mb-6'>{title}</h1>
    <div className='flex justify-between'>
      {
        items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;