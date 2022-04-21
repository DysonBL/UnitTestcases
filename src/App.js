import "./App.css";
import { useState } from "react";
import Apitest from "./Components/Apitest";

function App() {
  const[Submit,setSubmit]=useState(false)

    const [data,setdata]=useState({
        email :"",
       password :"",
        
    })
    
    const handleChange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
      
    }
  const handileSubmit = () => {
    setSubmit(true);
     }
  

  
  return (
    <div className="App">
      <h1>Learn in Unit testing</h1>
      <h1>LOGIN FORM TESTING</h1>
      {!Submit&&<p>Your login Here</p>}
      { Submit && <p> Login succes.....</p>}
            <div>
        <label>E.Mail</label>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={handleChange}
          placeholder="Enter the Mail"
        />
      </div>

      <div>
        <lable>Password</lable>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enater the password"
        />
        <div>
          <button onClick={handileSubmit}>Sumbit</button>
        </div>
        <Apitest/>
      </div>
      
    </div>
  );
}

export default App;
