import { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import Button from "../Button/Button";

const Login = () => {
  const { hide, hideButton, previousScreen } = useContext(UserDataContext);

  return (
    <>
      <div className="access-data">
        <form>
          <div className="form-row">
            <div className="col">
              <label htmlFor="usernameAccess">UserName</label>
              <input
                id="usernameAccess"
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="col">
              <label htmlFor="passwordAccess">Password</label>
              <input
                id="passwordAccess"
                type="password"
                className="form-control"
              />
            </div>
            <Button
              text="Previous"
              submit="button"
              actionOnClick={previousScreen}
            />
            <Button text="Login" submit="submit" actionOnClick={hideButton} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
