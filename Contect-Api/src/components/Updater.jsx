import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
function Updater() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const { setUserName, setPassword } = useContext(UserContext);
  const HandleSubmit = (e) => {
    // e.preventDefault();
    setUserName(user);
    setPassword(pass);
  };
  useEffect(() => {
    console.log("In");
    return () => {
      console.log("Out");
    };
  }, [setUserName, setPassword]);
  return (
    <div className="flex flex-col w-1/2 m-auto gap-3">
      <input
        className="rounded px-2 py-1"
        type="text"
        name="userName"
        placeholder="USer name"
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <input
        className="rounded px-2 py-1"
        type="password"
        name="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
      />
      <button
        className="px-2 py-1 bg-red-500 rounded"
        onClick={(e) => HandleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
}

export default Updater;
