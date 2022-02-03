import UserDataContext from "./UserDataContext";

const UserDataContextProvider = ({ children }) => {
  return (
    <UserDataContext.Provider value={"hola"}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
