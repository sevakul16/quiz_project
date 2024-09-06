import React, { useEffect } from "react";
import { useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemeningTime) => prevRemeningTime - 100);
    }, 100);
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
