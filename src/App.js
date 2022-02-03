import { useContext } from "react";
import AccessData from "./components/AccessData/AccessData";
import Login from "./components/Login/Login";
import PersonalData from "./components/PersonalData/PersonalData";
import UserDataContext from "./contexts/UserDataContext";

function App() {
  let { screenNumber } = useContext(UserDataContext);

  return (
    <div className="container">
      {screenNumber === 0 && <PersonalData />}
      {screenNumber === 1 && <AccessData />}
      {screenNumber === 2 && <Login />}
    </div>
  );
}

export default App;
