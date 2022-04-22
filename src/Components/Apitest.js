import React, { useState, useEffect } from "react";
import axios from "axios";

const Apitest = () => {
  const [Data, setData] = useState([])
  useEffect(() => {
    (
      async () => {
        await axios
          .get("https://reqres.in/api/users?page=2")
          .then((res) => {
            setData(res.data.data)
          })
          .catch((error) => {
          });
      }
    )()
  }, [])
  console.log(Data, "state22")
  return (
    <div>
    
      <table>
        <thead><h1>Api testing</h1>
          <tr>
            <th>Id.No</th>
            <th>FirstName</th>
            <th>SecondName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Data && Data.map((res, index) => {
            return (
              <>
                <tr>
                  <td>{res.id}</td>
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
