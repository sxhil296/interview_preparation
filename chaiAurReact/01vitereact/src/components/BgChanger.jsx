import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-4 inset-x-0 px-2 rounded-md">
        <div className="flex flex-wrap gap-2 bg-white shadow-lg px-4 py-2 rounded-md">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-4 text-white rounded-md"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("green")}
            className="outline-none px-4 text-white rounded-md"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
           onClick={() => setColor("yellow")}
            className="outline-none px-4 text-white rounded-md"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
           onClick={() => setColor("blue")}
            className="outline-none px-4 text-white rounded-md"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
