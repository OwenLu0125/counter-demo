import './App.css';
import Counter from './components/Counter/Counter';
// import CounterCopy from './components/CounterCopy/CounterCopy';

const count = [1, 2, 3, 4]

function App() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        {count.map((index) =>
          <Counter key={`key-${index}`} />
        )}
      </div>
    </>
  );
}

export default App;
