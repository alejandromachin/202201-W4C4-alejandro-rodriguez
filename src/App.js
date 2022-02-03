import AccessData from "./components/AccessData/AccessData";
import Login from "./components/Login/Login";
import PersonalData from "./components/PersonalData/PersonalData";

function App() {
  return (
    <div className="container">
      <PersonalData />
      <AccessData />
      <Login />
    </div>
  );
}

export default App;
