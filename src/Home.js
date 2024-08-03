import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("details")}>Details</button>
      <nav>
        <Link to="phone">Phone</Link>
        <Link to="computer">Computers</Link>
      </nav>
    </>
  );
}

export default Home;
