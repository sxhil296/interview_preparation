import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const findCube = () => {
    console.log("Calculation done!");
    return Math.pow(number, 3);
  };

//   const result = findCube(number);
const result = useMemo(()=>{return findCube(number)}, [number])
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Cube of the number : {result}</h2>
      <button onClick={()=>setCounter(counter + 1)}>Counter++</button>
      <h2>Counter Value : {counter}</h2>
    </div>
  );
};

export default UseMemo;
