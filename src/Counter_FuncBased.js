import React, {useState, useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); //use useState() hook to manage local state inside component

  //functions for incrementing, decrementing,and reset counter value
  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  const reset = () => setCount(0);

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </div>
    );
  }

export default Counter;