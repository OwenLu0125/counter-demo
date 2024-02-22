import './App.css';
import Counter from './components/Counter/Counter';
import CounterCopy from './components/CounterCopy/CounterCopy';

const count = [1, 2, 3, 4]

function App() {
  return (
    <>
      {count.map((index) =>
        <Counter key={`key-${index}`} />
      )}

    </>
  );
}

export default App;
