import React from 'react';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className='flex flex-col w-auto items-center'>
    <img src={imageUrl} alt="" className='mb-1 w-auto' />
    <div className='flex justify-between w-full'>
      <span className='w-full font-medium'>{name}</span>
      <span>${price}</span>
    </div>
  </div>
);

export default CollectionItem;