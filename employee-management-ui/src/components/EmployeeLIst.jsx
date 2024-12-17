import { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import EmployeeRecord from "./EmployeeRecord";

function EmployeeList() {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteSingleEmployee(id).then(() => {
      if (employees) {
        setEmployees((prevEmployees) => {
          return prevEmployees.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-600 rounded text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="shadow border-b-2">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium uppercase tracking-wider text-gray-500 py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium uppercase tracking-wider text-gray-500 py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium uppercase tracking-wider text-gray-500 py-3 px-6">
                Email Id
              </th>
              <th className="text-right font-medium uppercase tracking-wider text-gray-500 py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <EmployeeRecord
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                  employee={employee}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
