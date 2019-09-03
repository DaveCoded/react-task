import React from 'react';

// set props to make the arrow reusable in different contexts throughout app
const Arrow = ({ className, height, width, fill }) => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 86.6 39'>
      <polygon fill={fill} points='43.3 0 0 39 86.6 39 43.3 0' />
    </svg>
  );
};

export default Arrow;
