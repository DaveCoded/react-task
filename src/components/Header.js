import React from 'react';

const Header = () => {
  return (
    <header>
      <div style={{ position: 'relative' }}>
        <h1>Posts Page</h1>
        <label
          htmlFor='my-id'
          style={{ position: 'absolute', left: '-70px', padding: '4px' }}>
          My ID:
        </label>
        <input
          className='my-id'
          name='my-id'
          type='number'
          min='1'
          max='10'
          placeholder='Please select between 1 and 10'
        />
      </div>
    </header>
  );
};

export default Header;
