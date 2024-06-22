import React, { useState } from "react";

const Counter = () => {
  // core javascript
  //   using core js, we will need to take reference of every element where counter value needs to be updated
  //   let counter = 13;
  //   const removeValue = () => {
  // console.log("removed");
  // counter = counter - 1;
  // console.log(counter);
  //   };

  //   const addValue = () => {
  // console.log("added");
  // counter = counter + 1;
  // console.log(counter);
  //   };

  // using ReactJS
  // no need to take referrences
  const [counter, setCounter] = useState(0);
  const [alert, setAlert] = useState("");

  const removeValue = () => {
    if (counter > 0) {
    //   setCounter(counter - 1);
    setCounter(prevCounter => prevCounter-1)
      setAlert(" ");
    } else {
      setAlert("Value can not be less than 0.");
    }
  };

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setAlert(" ");
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col bg-gray-500 p-4 gap-2">
        <h1>Counter</h1>
        <h4>Counter Value : {counter} </h4>
        {alert && <p className="text-red-400 text-sm">{alert}</p>}
        <button className="bg-red-400 p-2" onClick={removeValue}>
          Decrease
        </button>
        <button className="bg-green-400 p-2" onClick={addValue}>
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
