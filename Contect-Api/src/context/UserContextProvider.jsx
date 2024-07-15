import React from "react";
import Usercontect from "./UserContext";

const UserContectProvider = ({ children }) => {
  const [userName, setUserName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <Usercontect.Provider
      value={{ userName, setUserName, password, setPassword }}
    >
      {children}
    </Usercontect.Provider>
  );
};
export default UserContectProvider;
