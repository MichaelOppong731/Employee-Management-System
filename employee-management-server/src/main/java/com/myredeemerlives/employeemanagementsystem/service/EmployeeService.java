package com.myredeemerlives.employeemanagementsystem.service;

import java.util.List;

import com.myredeemerlives.employeemanagementsystem.model.EmployeeModel;

public interface EmployeeService {

    EmployeeModel createEmployee(EmployeeModel employeeModel);

    List<EmployeeModel> getEmployees();

    boolean deleteEmployee(Long id);

    EmployeeModel getEmployeeById(Long id);

    EmployeeModel updateEmployee(Long id, EmployeeModel employeeModel);

}
