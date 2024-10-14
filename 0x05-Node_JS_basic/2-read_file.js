const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const dbFieldNames = fLines[0].split(',');
  const stGroups = {};
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fLines.slice(1)) {
    const studentRec = line.split(',');
    const studentPropValues = studentRec.slice(0, studentRec.length - 1);
    const field = studentRec[studentRec.length - 1];
    if (!Object.keys(stGroups).includes(field)) {
      stGroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    stGroups[field].push(Object.fromEntries(studentEntries));
  }

  const tStudents = Object
    .values(stGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${tStudents}`);
  for (const [field, group] of Object.entries(stGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
