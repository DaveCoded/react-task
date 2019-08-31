import React, { useState, useRef } from 'react';

import './Accordion.css';
import Arrow from './Arrow';

const Accordion = ({ title, content, postId, userId }) => {
  const [activeState, setActiveState] = useState('');
  const [heightState, setHeightState] = useState('0px');
  const [rotateState, setRotateState] = useState('accordion__icon');

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setActiveState(activeState === '' ? 'active' : '');
    setHeightState(
      activeState === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`
    );
    setRotateState(
      activeState === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    );
  };

  return (
    <div className='accordion__section'>
      <button className='accordion' onClick={toggleAccordion}>
        <h3 className='accordion__title'>{title}</h3>
        <Arrow
          className={`${rotateState}`}
          width='15'
          fill='var(--color-toggle)'
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${heightState}` }}
        className='accordion__content'>
        <p className='accordion__text'>
          {content}
          <br />
          <br />
          Reference number: {postId}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
