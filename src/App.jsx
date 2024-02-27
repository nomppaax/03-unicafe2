import React, { useState } from "react";

const Display = ({ value }) => <div>{value}</div>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, counter }) => {
  const average = (good * 1 + bad * -1) / counter;
  const positivePercentage = (good / counter) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {counter}</div>
      <div>average {average}</div>
      <div>positive {positivePercentage}%</div>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [counter, setCounter] = useState(0);

  const setToGood = () => {
    setGood(good + 1);
    setCounter(counter + 1);
  };
  const setToNeutral = () => {
    setNeutral(neutral + 1);
    setCounter(counter + 1);
  };
  const setToBad = () => {
    setBad(bad + 1);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={setToGood} text="good" />
      <Button handleClick={setToNeutral} text="neutral" />
      <Button handleClick={setToBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} counter={counter} />
    </div>
  );
};

export default App;
