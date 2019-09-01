import React from 'react';

const Column = ({ heading, children }) => {
  return (
    <div className='column'>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default Column;
