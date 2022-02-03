import { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";

const Button = ({ text, submit = "submit", actionOnClick }) => {
  const { changeScreen } = useContext(UserDataContext);

  const action = (event) => {
    event.preventDefault();
    changeScreen();
    actionOnClick();
  };

  return (
    <button type={submit} className="btn btn-primary" onClick={action}>
      {text}
    </button>
  );
};

export default Button;
