import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
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
    fetch("http://localhost:3001/employees/"+id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => {
      alert("successfully Edited");
       navigate("/");
    });
  };
  useEffect(() => {
    fetch("http://localhost:3001/employees/" + id)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setName(res.name);
        setEmail(res.email);
      });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center mt-5 mb-5">Edit Details</h1>
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
    </div>
  );
};

export default Edit;
