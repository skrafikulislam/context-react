import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ data });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="username"
        value={data.username}
        onChange={handleChange}
        name="username"
      />
      <input
        type="text"
        placeholder="password"
        value={data.password}
        onChange={handleChange}
        name="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
