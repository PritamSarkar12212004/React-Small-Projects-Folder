import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Updater() {
  const { setUser, setpass } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setUser(username);
    setpass(password);
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <input
        className="rounded bg-blue-400 placeholder:text-red-500 px-2 py-1"
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="rounded bg-blue-400 placeholder:text-red-500 px-2 py-1"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-orange-500 text-white px-4 py-1 rounded-lg"
        onClick={(e) => handleClick(e)}
      >
        Update
      </button>
    </div>
  );
}

export default Updater;
