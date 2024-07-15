import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Profiles from "./components/Profiles";
import Updater from "./components/Updater";
function App() {
  return (
    <UserContextProvider>
      <div className="w-full h-screen bg-zinc-300">
        <Profiles />
        <Updater/>
      </div>
    </UserContextProvider>
  );
}

export default App;
