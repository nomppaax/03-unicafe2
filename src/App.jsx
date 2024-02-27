import { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    console.log("value now", newValue);
    setGood(newValue);
  };
  const setToNeutral = (newValue) => {
    console.log("value now", newValue);
    setNeutral(newValue);
  };
  const setToBad = (newValue) => {
    console.log("value now", newValue);
    setBad(newValue);
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
      </div>
    </div>
  );
};

export default App;
