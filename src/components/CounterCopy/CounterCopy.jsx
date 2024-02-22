import React from 'react';
import './CounterCopy.css';

const containerStyle = {
  backgroundColor: '#4c00ff',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: '15px',
  padding: '15px',
};

function CounterCopy() {
  return (
    <div className='container' style={containerStyle}>
      <div className='chevron chevron-down'></div>
      <div className='number'>128</div>
      <div className='chevron chevron-up'></div>
    </div>
  );
}

export default CounterCopy;
