import React from 'react';
import { useState } from 'react';
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

  const handleIncrease = () => {
    setCount(count - 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className='container' style={containerStyle}>
      <div className='chevron chevron-down' onClick={handleIncrease}></div>
      <div className='number'>{count}</div>
      <div className='chevron chevron-up' onClick={handleDecrease}></div>
    </div>
  );
}

export default Counter;
