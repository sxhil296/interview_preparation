import React, { useCallback, useState } from "react";
import Header from "./Header";

const UseCallback = () => {
  const[count, setCount] = useState(0);

//   const newFun = () => {};
const newFun = useCallback(()=> {}, [])
  return (
    <div>
      <Header newFun={newFun}/>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default UseCallback;
