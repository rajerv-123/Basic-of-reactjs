import React from "react";
import { useContext } from "react";
import UserContext from "../UseContext/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return <div>Profile:{user?.username}</div>;
}

export default Profile;
