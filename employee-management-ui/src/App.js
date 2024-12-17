import { Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeLIst";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </>
  );
}

export default App;
