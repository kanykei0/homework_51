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

  return (
    <div>
      <button onClick={generateRandomNumbers}>New numbers</button>
      <div className='numbers-block'>
        <Ball number={numbers[0]}/>
        <Ball number={numbers[1]}/>
        <Ball number={numbers[2]}/>
        <Ball number={numbers[3]}/>
        <Ball number={numbers[4]}/>
      </div>
    </div>
  );
};

export default App;
