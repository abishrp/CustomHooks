import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("outer render")

  // Without useCallback
  const increment = () => {
    console.log("Executing increment");
    setCount(count + 1);
  };

  // With useCallback
  const decrement = useCallback(() => {
    console.log("Executing decrement");
    setCount(count - 1);
  }, [count]); // Dependency array ensures the callback is recreated only if 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;


