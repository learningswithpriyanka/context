import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Logout() {
  const { setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser({ username: null, password: null });
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
