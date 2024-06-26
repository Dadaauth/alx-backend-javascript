export default function createReportObject(employeesList) {
  const obj = {};
  obj.allEmployees = {};
  for (const [key, value] of Object.entries(employeesList)) {
    obj.allEmployees[key] = value;
  }
  obj.getNumberOfDepartments = () => Object.keys(employeesList).length;
  return obj;
}
