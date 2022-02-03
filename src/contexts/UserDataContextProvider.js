import { useState } from "react";
import UserDataContext from "./UserDataContext";

const UserDataContextProvider = ({ children }) => {
  let [screenNumber, setScreenNumber] = useState(0);

  const changeScreen = () => {
    setScreenNumber(screenNumber++);
  };

  return (
    <UserDataContext.Provider
      value={{ changeScreen, screenNumber, setScreenNumber }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
