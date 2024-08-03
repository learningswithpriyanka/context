import { useReducer, useState } from "react";
const initialstate = { count: 0, name: "priyanka" };

function reducer(state, action) {
  console.log(action);
  const { type, payload: value } = action;
  switch (type) {
    case "plus":
      return { ...state, count: state.count + value, name: "Class" };
    case "minus":
      return { ...state, count: state.count - value, name: "Class" };
    default:
      return { ...state };
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [count, setCount] = useState(0);
  
  return (
    <>
      <p>
        {state.count} - {count}
      </p>
      <button
        onClick={() =>
          setCount((prevCount) => {
            if (prevCount < 10) {
            prevCount=  prevCount + 10;
            } else {prevCount=prevCount - 10;}

            return {name:"priyanka"};
          })
        }
      >
        Plus
      </button>
      <button onClick={() => dispatch({ type: "plus", payload: 5 })}>
        Plus
      </button>

      <button onClick={() => dispatch({ type: "minus", payload: 10 })}>
        Minus
      </button>
    </>
  );
}
export default ReducerDemo;
