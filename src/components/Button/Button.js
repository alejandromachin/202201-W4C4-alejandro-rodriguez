import { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";

const Button = () => {
  const { changeScreen } = useContext(UserDataContext);
  const action = (event) => {
    event.preventDefault();
    changeScreen();
  };

  return (
    <button type="submit" className="btn btn-primary" onClick={action}>
      Submit
    </button>
  );
};

export default Button;
