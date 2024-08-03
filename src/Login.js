import React, { forwardRef, useContext } from "react";
import { UserContext } from "./context/UserContext";

const Login = forwardRef(({ userName, passcode, onChange }, ref) => {
  //   const [username, setUername] = useState(userName);
  //   const [password, setPassword] = useState(passcode);
  //   const { setUser } = useContext(UserContext);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setUser({ username: userName, password: passcode });
  //   };

  return (
    <div>
      <h2>Login</h2>
      <input
        ref={ref}
        type="text"
        value={userName}
        onChange={(e) => onChange(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={passcode}
        // onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
});

export default Login;
