import React, { useEffect, useState } from "react";
import "../index.css";
function Home() {
  const [data, setData] = useState({
    cname: "",
    email: "",
    phno: "",
    qrating: "",
    brating: "",
    cleanrating: "",
    overallexp: "",
  });
  const [formvalue, setFormvalue] = useState([]);
  const [disabled, setDisabled] = useState(true);

  let name, value;
  const handlechange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
    if (!data.cname || !data.email || !data.phno) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const submitit = (e) => {
    alert("form successfully submitted");
    e.preventDefault();
    let val = {
      cname: data.cname,
      email: data.email,
      phno: data.phno,
      qrating: data.qrating,
      brating: data.brating,
      cleanrating: data.cleanrating,
      overallexp: data.overallexp,
    };
    // let arr = [...formvalue, val];
    setFormvalue([...formvalue, val]);
    localStorage.setItem("form", JSON.stringify([...formvalue, val]));
  };
  useEffect(() => {
    const data = localStorage.getItem("form");
    setFormvalue([JSON.parse(data)]);
    if (formvalue[0] == null) {
      setFormvalue([]);
    }
  }, []);
  return (
    <>
      <div className="container">
        <form onSubmit={submitit}>
          <h1>Aromatic Bar</h1>
          <p>
            We are committed to providing you with the best dining experience
            possible, so we welcome your comments. Please fill out this
            questionnaire. Thank you.
          </p>
          <div className="container">
            <label>Customer Name</label>
          </div>
          <div className="container">
            <input
              type="text"
              name="cname"
              value={data.cname}
              onChange={handlechange}
            />
            {!data.cname ? (
              <div style={{ color: "red" }}>Please enter your name</div>
            ) : null}
          </div>
          <div className="container">
            <label>Email</label>
          </div>
          <div className="container">
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handlechange}
            />{" "}
            {!data.email ? (
              <div style={{ color: "red" }}>Please enter your email</div>
            ) : null}
          </div>
          <div className="container">
            <label>Phone No.</label>
          </div>
          <div className="container">
            <input
              type="text"
              name="phno"
              value={data.phno}
              onChange={handlechange}
            />{" "}
            {!data.phno ? (
              <div style={{ color: "red" }}>Please enter your phone no.</div>
            ) : null}
          </div>
          <div className="container">
            <h3 className="fontchange my-2">
              1. Please rate the quality of the service you received from your
              host.
            </h3>
            <div>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  name="qrating"
                  value="Excellent"
                  onChange={handlechange}
                />
                Excellent
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Good"
                  name="qrating"
                  onChange={handlechange}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Fair"
                  name="qrating"
                  onChange={handlechange}
                />
                Fair
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Bad"
                  name="qrating"
                  onChange={handlechange}
                />
                Bad
              </label>
            </div>
          </div>
          <div className="container">
            <h3 className="fontchange my-2">
              2. Please rate the quality of your beverage.
            </h3>
            <div>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  name="brating"
                  value="Excellent"
                  onChange={handlechange}
                />
                Excellent
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Good"
                  name="brating"
                  onChange={handlechange}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2 "
                  value="Fair"
                  name="brating"
                  onChange={handlechange}
                />
                Fair
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Bad"
                  name="brating"
                  onChange={handlechange}
                />
                Bad
              </label>
            </div>
          </div>
          <div className="container">
            <h3 className="fontchange my-2">3. Was our restaurant clean?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  name="cleanrating"
                  value="Excellent"
                  onChange={handlechange}
                />
                Excellent
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Good"
                  name="cleanrating"
                  onChange={handlechange}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Fair"
                  name="cleanrating"
                  onChange={handlechange}
                />
                Fair
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Bad"
                  name="cleanrating"
                  onChange={handlechange}
                />
                Bad
              </label>
            </div>
          </div>
          <div className="container">
            <h3 className="fontchange my-2">
              4. Please rate your overall dining experience.
            </h3>
            <div>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  name="overallexp"
                  value="Excellent"
                  onChange={handlechange}
                />
                Excellent
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Good"
                  name="overallexp"
                  onChange={handlechange}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Fair"
                  name="overallexp"
                  onChange={handlechange}
                />
                Fair
              </label>
              <label>
                <input
                  type="radio"
                  className="radio mx-2"
                  value="Bad"
                  name="overallexp"
                  onChange={handlechange}
                />
                Bad
              </label>
            </div>
          </div>
          <div className="container my-4  ">
            <button
              type="submit"
              className="px-3 bg-success"
              style={{ color: "white" }}
              disabled={disabled}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
