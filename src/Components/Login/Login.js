import React from "react";
import { useState } from "react";

const Login = () => {
  const [Submit, setSubmit] = useState(false);

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handileSubmit = () => {
    setSubmit(true);
    let Data = localStorage.getItem("data");
    let newDatas = JSON.parse(Data);
    let newData = newDatas.find(
      (item) => item.Email === data.email && item.Cpsw === data.password
    );

    if (newData) {
      alert("your succesfully Login..");
    } else {
      alert("Your Email and Password Miss match");
    }
  };

  return (
    <div>

      <div className="log ">
        <div className="container">
          <h2>LOGIN FORM TESTING</h2>

          {!Submit && <p>Login Here</p>}
          {Submit && <p> Login succes.....</p>}

          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="test@mail.com"
                className="form-control"
                data-testid="test@mail.com"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter @gmail.com"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password "
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Check me out</label>
            </div>
          </form>
          <div>
            <button
              data-testid="Submit"
              className="btn btn-primary"
              onClick={handileSubmit}
            >
              Sumbit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
