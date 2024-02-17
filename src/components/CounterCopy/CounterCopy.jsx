import React from 'react';
import './CounterCopy.css';

const shadow = {
  boxShadow: '0 0 10px 10px #f26072',
  padding: 20,
};

const Counter = () => {
  return (
    <div className='container' style={shadow}>
      <div className='chevron chevron-up' />
      <div
        className='number'
        style={{
          color: '#FFE8E8',
          textShadow: '2px 2px #434a54',
        }}>
        0
      </div>
      <div className='chevron chevron-down' />
    </div>
  );
};

export default Counter;
