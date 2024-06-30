// import React, { useRef } from "react";

// const UseRef = () => {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//      // Access the DOM node using the ref and focus the input field
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         ref={inputRef}
//         placeholder="Focus me on button click"
//       />
//       <button onClick={focusInput}>Focus</button>
//     </div>
//   );
// };

// export default UseRef;




import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRef = () => {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef(0)

    useEffect(() => {
        // Store the current count value in the ref
        prevCountRef.current = count;
      }, [count]);

    const previousCount = prevCountRef.current


  return (
    <div>
        <h1>Current Count : {count}</h1>
        <h2>Previous Count : {previousCount}</h2>
        <button onClick={() => setCount((count+1))}>Increment</button>
    </div>
  )
}

export default UseRef
