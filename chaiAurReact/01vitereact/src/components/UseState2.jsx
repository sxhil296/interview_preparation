import React, { useState } from "react";

const UseState2 = () => {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "F40",
    year: 2020,
    color: "Red",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "Blue" };
    });
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}.
      </h2>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
};

export default UseState2;
