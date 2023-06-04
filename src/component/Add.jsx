import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //handle change:
  const handleChange = e => {
    e.preventDefault();
    const valueType = e.target.name;
    if (valueType === "name") {
      setName(e.target.value);
    }
    if (valueType === "email") {
      setEmail(e.target.value);
    }
  };
  //handle Submit:
  const handleSubmit = e => {
    const data = { name, email };
    e.preventDefault();
    console.log(name);
    console.log(email);
    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => {
      alert("successfully saved");
      navigate("/");
    });
  };
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Add Employee</h1>
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email"
          />
        </div>

        <button type="submit" className="btn btn-success w-100 mb-2">
          Submit
        </button>
        <Link to="/" type="submit" className="btn btn-primary w-100">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Add;
