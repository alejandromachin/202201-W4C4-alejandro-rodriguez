import { useContext } from "react";
import UserDataContext from "../../contexts/UserDataContext";

import Button from "../Button/Button";

const AccessData = () => {
  const { hideButton, previousScreen } = useContext(UserDataContext);

  return (
    <>
      <div className="access-data">
        <form>
          <div className="form-row">
            <div className="col">
              <label htmlFor="username">UserName</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
            </div>
            <div className="col">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="confirm_password">Repeat password</label>
              <input
                id="confirm_password"
                type="password"
                className="form-control"
              />
            </div>
            <Button
              text="Previous"
              submit="button"
              actionOnClick={previousScreen}
            />
            <Button text="Submit" submit="submit" actionOnClick={hideButton} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AccessData;
