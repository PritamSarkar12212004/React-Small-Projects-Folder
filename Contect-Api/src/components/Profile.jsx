import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, pass } = useContext(UserContext);
  return (
    <div className="w-full h-1/2 flex justify-center items-center flex-col gap-3 ">
      <h1 className="text-3xl font-bold text-orange-600 capitalize">
        Hello This is User and Pass Provider Projetcs
      </h1>
      <div className="text-red-600 text-2xl capitalize">
        <h1>
          your profile name is :{" "}
          <span className="text-2xl text-blue-600 font-extrabold">{user}</span>
        </h1>
        <h1>
          your password name is :
          <span className="text-2xl text-blue-600 font-extrabold">{pass}</span>
        </h1>
      </div>
    </div>
  );
}

export default Profile;
