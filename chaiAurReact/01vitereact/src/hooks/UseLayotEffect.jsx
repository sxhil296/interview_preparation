import React, { useEffect, useLayoutEffect } from "react";

const UseLayotEffect = () => {
  useEffect(() => {
    console.log("Message from useEffec!");
  });

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect!");
  }, []);
  return <div>UseLayotEffect</div>;
};

export default UseLayotEffect;
