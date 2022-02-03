const PersonalData = () => {
  return (
    <>
      {" "}
      <div className="personal-data">
        <form>
          <div className="form-row">
            <div className="col">
              <label htmlFor="name">First name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="col">
              <label htmlFor="lastname">Last name</label>
              <input
                id="lastname"
                type="text"
                className="form-control"
                placeholder="Enter last name"
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="col">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="Email"
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

export default PersonalData;
