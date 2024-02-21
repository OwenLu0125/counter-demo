import React from 'react';
import './Counter.css';

const shadow = {
  boxShadow: 'rgb(234 182 69) 0px 0px 10px 10px',
  padding: 20,
  gap: '1rem',
  // display: 'flex',
  // alignItems: 'center',
  // flexdirection: 'row',
  // backgroundColor: '#0ab5b5',
  // borderRadius: '15px',
};

const Counter = () => {
  return (
    <div className='container' style={shadow}>
      <div className='chevron chevron-down' />
      <div
        className='number'
        style={{
          color: '#FFE8E8',
          textShadow: '2px 2px #434a54',
        }}>
        0
      </div>
      <div className='chevron chevron-up' />
    </div>
  );
};

export default Counter;
