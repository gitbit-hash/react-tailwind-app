import React from 'react';

const FromInput = ({ handleChange, label, ...otherProps }) => (
  <div className='relative px-0 py-10'>
    <input className='inputText font-medium text-grey-800'
      onChange={handleChange}
      {...otherProps} />
    {
      label ?
        (<label
          className='floating-label'>
          {
            label
          }
        </label>)
        : null
    }
  </div>
);

export default FromInput;