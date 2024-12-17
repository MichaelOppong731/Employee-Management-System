import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getAllEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteSingleEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(id, requestBody) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, requestBody);
  }
}

export default new EmployeeService();
