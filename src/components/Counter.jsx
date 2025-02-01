import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber, interval }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prev) => {
        if (prev >= targetNumber) {
          clearInterval(timerId);
          return prev;
        }
        return prev + 1;
      });
    }, interval);
  }, [targetNumber, interval]);

  return count;
};

export default Counter;
