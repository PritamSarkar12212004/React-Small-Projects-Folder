import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function profiles() {
  const { userName, password } = useContext(UserContext);

  return (
    <div className="w-fill h-1/2 flex justify-center flex-col items-center">
      <h1 className="text-3xl">Hello Dear</h1>
      {userName ? (
        <h1 className="text-3xl">
          {" "}
          Profile name is :- <span className="text-red-600">{userName}</span>
        </h1>
      ) : (
        <h1 className="text-3xl ">
          Profile name is :- <span className="text-red-600">Gust</span>
        </h1>
      )}
      {password ? (
        <h1 className="text-3xl">{password}</h1>
      ) : (
        <h1 className="text-3xl ">
          {" "}
          Profile password is :- <span className="text-red-600">Nun</span>
        </h1>
      )}
    </div>
  );
}

export default profiles;
