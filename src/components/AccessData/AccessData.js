const AccessData = () => {
  return (
    <>
      {" "}
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccessData;
