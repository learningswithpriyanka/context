import React, { useState, useEffect, useRef } from "react";
import Login from "./Login";

function RefDemo() {
  const [name, setName] = useState("");
  //   const count = useRef(0);
  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current);
  });

  const handleClick = () => {
    inputRef.current.focus()
  };
  return (
    <>
      {/* <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <Login
        ref={inputRef}
        userName={name}
        pascode="1234"
        onChange={(e) => setName(e.target.value)}
      />
      {/* <div>rendered {count.current}</div> */}
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default RefDemo;
