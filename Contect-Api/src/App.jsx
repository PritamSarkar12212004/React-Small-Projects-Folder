import React from "react";
import UserContectProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Updater from "./components/Updater";
function App() {
  return (
    <UserContectProvider>
      <div className="w-full h-screen bg-zinc-400">
        <Profile />
        <Updater />
      </div>
    </UserContectProvider>
  );
}

export default App;
