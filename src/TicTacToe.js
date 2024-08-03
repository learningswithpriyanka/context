import React, { useReducer } from "react";
const styles = {
  box: {
    display: "grid",
    gridTemplateColumns: "repeat(3,50px)",
    gridTemplateRows: "repeat(3,50px)",
  },
  cell: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
  },
};

const initialState = {
  box: Array(9).fill(null),
  xTurn: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "turn":
      const tempBox = [...state.box];
      tempBox[action.payload] = state.xTurn ? "x" : "o";
      return {
        ...state,
        box: tempBox,
        xTurn: !state.xTurn,
      };

    case "clear":
      return initialState;
    default:
      return state;
  }
};
function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (index) => {
    dispatch({ type: "turn", payload: index });
  };
  const handleReset = () => {
    dispatch({ type: "clear" });
  };
  return (
    <>
      <div style={styles.box}>
        {state.box.map((ele, index) => (
          <div
            key={index}
            style={styles.cell}
            onClick={() => handleClick(index)}
          >
            {ele}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>
    </>
  );
}

export default TicTacToe;
