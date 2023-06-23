const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.RESET:
        return { count: 0};
      default:
        return state;
    }
  }

  const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const increment = () => dispatch({ type: ACTIONS.INCREMENT });
    const decrement = () => dispatch({ type: ACTIONS.DECREMENT });
    const reset = () => dispatch({ type: ACTIONS.RESET });

    return (
      <div className="Counter">
        <p className="count">{state.count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </section>
      </div>
    );
  };

  export default Counter;