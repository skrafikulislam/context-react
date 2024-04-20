import React, {  useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return user ? <div>Welcome {user.data.username}</div> : <h1>please Login</h1>;
};

export default Profile;
