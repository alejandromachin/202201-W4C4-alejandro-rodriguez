import { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";
import Button from "../Button/Button";

const Login = () => {
  const { hide } = useContext(UserDataContext);

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

            <Button />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
