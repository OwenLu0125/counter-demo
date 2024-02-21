import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter/Counter.jsx';

const key = [1, 2, 3, 4]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div style={{
      display: 'flex',
      gap: '5rem'
    }}>
      {key.map((index) => (
        <Counter key={`counter-${index}`} />
      ))}

      {/* {console.log(key.map((index) => (
        <Counter key={`counter-${index}`} />
      )))} */}
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
