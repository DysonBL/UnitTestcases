import React, { useState } from "react";
import "../Apitest/Api.css";

const Register = () => {
    const [Submit, setSubmit] = useState(false);
    const [data, setdata] = useState({
        Fname: "",
        Sname: "",
        Email: "",
        Npsw: "",
        Cpsw: "",
    })
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        let localdata = localStorage.getItem("data")

        if (localdata) {

            let local = JSON.parse(localdata)
            local.push(data)
            localStorage.setItem("data", JSON.stringify(local))
        }
        else {
            localStorage.setItem("data", JSON.stringify([data]))
        }
        setSubmit(true)
    }

    return (
        <>
        <div className="reg">
            <h2>Register FORM TESTING</h2>
            <h3>Register Here...</h3>
     <div className="container">
         
     {!Submit && <p>Your Register Here</p>}
          {Submit && <p> Register succes.....</p>}
          
            <div>
                <label>F.Name :</label>
                <input
                    type="Fname"
                    data-testid="Fname"
                    name="Fname"
                    onChange={handleChange}
                    placeholder="Enter the First Name"
                />
            </div>
            <div>
            <label>S.Name :</label>
                <input
                    type="Sname"
                    data-testid="Sname"
                    name="Sname"
                    onChange={handleChange}
                    placeholder="Enter the Second Name"
                    required
                />
            </div>
            <div>
            <label>Email  Id :</label>
                <input
                    type="Email"
                    data-testid="Email"
                    name="Email"
                    onChange={handleChange}
                    placeholder="Enter @gmail.com"
                    required
                />
            </div>
            <div>
            <label>N.Password:</label>
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter New Password"
                onChange={handleChange}
                required
              />
            </div>
            <div>
            <label>c.password :</label>
            <input
                type="password"
                className="form-control"
                data-testid="password"
                id="exampleInputPassword2"
                placeholder="Enter Conform Password"
                onChange={handleChange}
                required
              />

            </div>



            <button variant="contained" onClick={handleSubmit} > SignIN</button>
           
</div>
</div>
        </>
    )
}
export default Register