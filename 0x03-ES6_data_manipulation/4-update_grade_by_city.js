export default function updateStudentGradeByCity(students, city, newGrades) {
  let st_from_city = students.filter((student) => student.location === city);
  st_from_city.map((student) => {
    newGrades.map((newGrade) => {
        if (student.id === newGrade.studentId) student.grade = newGrade.grade;
    });
    if (!student.grade) student.grade = 'N/A';
  });
  return st_from_city;
}
