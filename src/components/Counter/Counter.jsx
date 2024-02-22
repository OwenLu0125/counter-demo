import { useState } from 'react';
import React from 'react';
import './Counter.css';

const containerStyle = {
  backgroundColor: '#0AB5B5',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: '15px',
  padding: '15px',
};

function Counter() {
  const [count, setCount] = useState(128);
  return (
    <div className='container' style={containerStyle}>
      <div
        className='chevron chevron-down'
        onClick={() => setCount(count + 1)}></div>
      <div className='number'>{count}</div>
      <div
        className='chevron chevron-up'
        onClick={() => setCount(count + 1)}></div>
    </div>
  );
}

export default Counter;
