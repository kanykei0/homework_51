import { useState } from 'react';
import Ball from './Ball/Ball';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const generateRandomNumbers = () => {
    setNumbers(()=>{
      const newNumbers: number[] = [];
      while (newNumbers.length < 5) {
        const random = Math.floor(Math.random() * 32 + 5);
        if (!newNumbers.includes(random)) {
          newNumbers.push(random);
        }
      }
      newNumbers.sort((a, b) => a - b);
      return newNumbers;
    });
  };

  const renderNumbers = () => {
    return numbers.map((i)=>{
      return(<Ball key={i} number={i}/>);
    });
  };

  return (
    <div>
      <button onClick={generateRandomNumbers}>New numbers</button>
      <div className='numbers-block'>{renderNumbers()}</div>
    </div>
  );
};

export default App;
