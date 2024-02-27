import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, counter }) => {
  const feedbackGiven = counter > 0;

  if (!feedbackGiven) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given yet</div>
      </>
    );
  }

  const average = (good * 1 + bad * -1) / counter;
  const positivePercentage = (good / counter) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={counter} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positivePercentage} />
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
