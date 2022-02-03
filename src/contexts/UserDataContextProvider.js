import UserDataContext from "./UserDataContext";

const UserDataContextProvider = ({ children }) => {
  return <UserDataContext.Provider>{children}</UserDataContext.Provider>;
};

export default UserDataContextProvider;
