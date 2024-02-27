import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [counter, setCounter] = useState(0);

  const setToGood = (newValue) => {
    console.log("value now", newValue);
    setGood(newValue);
    setCounter(counter + 1);
  };
  const setToNeutral = (newValue) => {
    console.log("value now", newValue);
    setNeutral(newValue);
    setCounter(counter + 1);
  };
  const setToBad = (newValue) => {
    console.log("value now", newValue);
    setBad(newValue);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => setToGood(good + 1)}>good</button>

      <button onClick={() => setToNeutral(neutral + 1)}>neutral</button>

      <button onClick={() => setToBad(bad + 1)}>bad</button>
      <div>
        <h1>Statistics</h1>
        <div> good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {counter}</div>
        <div>average {(good * 1 + bad * -1 + neutral * 0) / counter}</div>
        <div>positive {(good / counter) * 100}%</div>
      </div>
    </div>
  );
};

export default App;
