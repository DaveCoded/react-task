import React from 'react';

const Header = ({ changeFunc, inputVal }) => {
  const legend =
    // validate input number and conditionally render message
    (inputVal && inputVal < 1) || (inputVal && inputVal > 10) ? (
      <legend>Please select a number between 1 and 10</legend>
    ) : null;

  return (
    <header>
      <div style={{ position: 'relative' }}>
        <h1>Posts Page</h1>
        <fieldset>
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
            value={inputVal}
            onChange={changeFunc}
          />
          {legend}
        </fieldset>
      </div>
    </header>
  );
};

export default Header;
