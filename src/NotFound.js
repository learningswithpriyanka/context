import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
//   navigate("/")
  useEffect(() => {
    navigate("/");
  });
  return <div>NotFound</div>;
}

export default NotFound;
