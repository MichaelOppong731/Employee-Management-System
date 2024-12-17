import { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        // console.log(response);
        alert("Employee added successfully");
        navigate("/employeeList");
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const clear = (e) => {
    e.preventDefault();
    setEmployee({
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl trackling-wider ">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="firstName"
            value={employee.firstName}
            type="text"
            className="h-10 w-96 my-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="lastName"
            value={employee.lastName}
            type="text"
            className="h-10 w-96 my-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="emailId"
            value={employee.emailId}
            type="email"
            className="h-10 w-96 my-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="bg-green-400 rounded text-white font-semibold py-2 px-6 hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={clear}
            className="bg-red-400 rounded text-white font-semibold py-2 px-6 hover:bg-red-700"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
