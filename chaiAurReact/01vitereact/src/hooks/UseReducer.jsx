import React, { useReducer, useState } from "react";

const UseReducer = () => {
  // const [count, setCount] = useState(0)

  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h2>Count : {count}</h2> */}
      <h2>Count : {state.count}</h2>
      <button
        className="font-bold"
        // onClick={() => setCount((prevCount) => prevCount + 1)}
        onClick={() => dispatch({ type: "increase" })}
      >
        +
      </button>
      <button
        className="font-bold"
        // onClick={() => setCount((prevCount) => prevCount - 1)}
        onClick={() => dispatch({ type: "decrease" })}
      >
        -
      </button>
      <br />
      <input type="number" value={state.count} onChange={(e) => dispatch({type:'input', payload: Number(e.target.value)})} />
    </div>
  );
};

export default UseReducer;
