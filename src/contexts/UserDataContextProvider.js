import { useState } from "react";
import UserDataContext from "./UserDataContext";

const UserDataContextProvider = ({ children }) => {
  let [screenNumber, setScreenNumber] = useState(0);
  const [name, setName] = useState("");
  const [hide, setHide] = useState(true);

  const changeScreen = () => {
    setScreenNumber(screenNumber++);
    console.log(screenNumber);
  };
  const previousScreen = () => {
    setScreenNumber(screenNumber--);
    console.log(screenNumber);
  };

  const hideButton = () => {
    setHide(hide ? " " : "d-none");
  };

  return (
    <UserDataContext.Provider
      value={{
        changeScreen,
        screenNumber,
        setScreenNumber,
        hide,
        setHide,
        hideButton,
        previousScreen,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
