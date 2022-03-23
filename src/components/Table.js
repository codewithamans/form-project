import React, { useEffect, useState } from "react";

function Table() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const storedval = localStorage.getItem("form");
    if (!storedval) {
      setValue([
        {
          cname: "",
          email: "",
          phno: "",
          qrating: "",
          brating: "",
          cleanrating: "",
          overallexp: "",
        },
      ]);
    } else {
      setValue(JSON.parse(storedval));
    }
  }, []);
  return (
    <>
      <div className="container">
        <h1>All Feedback</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Form Name</th>
              <th scope="col">Customer Name</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Service rating</th>
              <th scope="col">Beverage rating</th>
              <th scope="col">Cleanliness rating</th>
              <th scope="col">Dinning experience</th>
            </tr>
          </thead>
          <tbody>
            {value.map((data, index) => {
              return (
                <>
                  <tr key={index}>
                    <th scope="row">Aromatic Form</th>
                    <td>{data.cname}</td>
                    <td>{data.email}</td>
                    <td>{data.phno}</td>
                    <td>{data.qrating}</td>
                    <td>{data.brating}</td>
                    <td>{data.cleanrating}</td>
                    <td>{data.overallexp}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
