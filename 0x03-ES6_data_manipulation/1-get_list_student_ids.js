export default function getListStudentIds(arg) {
  if (Array.isArray(arg)) return arg.map((student) => student.id);
  else return [];
}
