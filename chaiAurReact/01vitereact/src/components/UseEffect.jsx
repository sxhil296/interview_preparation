import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect is called after the component renders
  useEffect(() => {
    // This effect runs after every render
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)} className="rounded bg-black text-white px-4 py-2">
        Click
      </button>
    </div>
  );
};

export default UseEffect;
