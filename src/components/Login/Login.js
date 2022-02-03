const Login = () => {
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
