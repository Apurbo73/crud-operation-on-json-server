import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const getData = async () => {
    const response = await axios.get("http://localhost:3001/employees");
    // console.log(response.data);
    setEmployees(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  //handle Remove:
  const handleRemove = id => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3001/employees/" + id, {
        method: "DELETE"
      }).then(res => {
        alert("Successfully removed");
        window.location.reload();
      });
    }
  };

//handle Edit:
const handleEdit = id => {
  navigate("/employee/edit/" + id);
};
return (
  <div>
    <h1 className="text-center mb-5 mt-5">Employees</h1>
    <div className="text-center">
      <Link to="/employee/add" className=" btn btn-success ">
        Add New (+)
      </Link>
    </div>
    <div className="d-flex flex-wrap">
      {employees.map(employee => {
        const { id, name, email } = employee;
        return (
          <div
            key={employee.id}
            className="card m-3 mt-4"
            style={{ width: "18rem", backgroundColor: "#E1F8DC" }}
          >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body text-center">
              <h6 className="card-text">
                id: {id}
              </h6>
              <h5 className="card-title">
                Name: {name}
              </h5>
              <h6 className="card-title">
                Email: {email}
              </h6>

              <div className="d-flex mb-2 mt-5">
                <a
                  href="#"
                  className="btn btn-primary w-100  m-2"
                  onClick={()=>{handleEdit(id)}}
                >
                  Edit
                </a>

                <a
                  href="#"
                  className="btn btn-danger w-100  m-2"
                  onClick={()=>{handleRemove(id)}}
                >
                  Remove
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default Employee;
