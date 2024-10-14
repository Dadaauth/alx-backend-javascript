export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

let student_1 = {
    firstName: "Cicada",
    lastName: "Hissing",
    age: 24,
    location: "Secret"
};
let student_2 = {
    firstName: "snide",
    lastName: "Hanoda",
    age: 21,
    location: "Secret"
};

let studentsList: Array<Student> = [
    student_1,
    student_2
];


let header = document.createElement('h2');
header.textContent = 'List of Students';
document.body.appendChild(header);
let table = document.createElement('table');
table.innerHTML = `
<tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    <th>Location</th>
</tr>
`
studentsList.forEach((student: Student, idx: number) => {
        const row = table.insertRow();
        row.insertCell().textContent = idx.toString();
        row.insertCell().textContent = student.firstName;
        row.insertCell().textContent = student.lastName;
        row.insertCell().textContent = student.age.toString();
        row.insertCell().textContent = student.location;
})
document.body.appendChild(table);
