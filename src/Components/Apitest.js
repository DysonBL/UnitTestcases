import React,{useEffect,useState}from "react";
import axios from "axios";

const Apitest = () => {
    const [state, dispatch] =useState()
    const [Data,setData]=useState("")
    useEffect(() => {
        if (state) {
            setData(state)
        }
    }, [state])
  axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
      console.log(res.data, "Get");
    })
    .catch((error) => {
      console.log(error, "error");
    });
    console.log(state,"state")
  return (
    <div>
      <h1>Api testing</h1>
      <table>
        <thead>
          <tr>
            <th>Id.No</th>
            <th>Photo</th>
            <th>first_Name</th>
            <th>Second_Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {state &&
            state.map((res) => {
              return (
                <>
                  <tr>
                    <td>{res.id}</td>
                    <td>{res.avatar}</td>
                    <td>{res.first_name}</td>
                    <td>{res.last_name}</td>
                    <td>{res.email}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Apitest;
