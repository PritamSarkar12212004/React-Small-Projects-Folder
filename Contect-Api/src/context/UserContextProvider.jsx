import React, { useState } from "react";
import UserContext from "./UserContext";

const UserCotextProvier = ({ children }) => {
  const [user, setUser] = useState("");
  const [pass, setpass] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, pass, setpass }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserCotextProvier;
