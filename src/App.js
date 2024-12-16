import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const handleStepChange = (s) => {
    setStep(s);
  };

  const handleCountChange = (c) => {
    setCount(c);
  };

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter({ counterText }) {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [past, setPast] = useState(false);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // Effect to update 'past' based on 'count'
  useEffect(() => {
    if (count < 0) {
      setPast(true);
    } else {
      setPast(false);
    }
  }, [count]);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>{` Step: ${step} `}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>{` Count: ${count} `}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <h1>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} day(s) from today is `
          : `${Math.abs(count)} day(s) ago was `}
        {date.toDateString()}
      </h1>
    </div>
  );
}
