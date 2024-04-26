import HolbertonCourse from "./2-hbtn_course";

const course = new HolbertonCourse("PHP", 20, ["Lucie", "Guillaume"]);
course.name = "PHP2";
course.length = 10;
course.students = ["Thomas"];
console.log(course);

try {
    course.name = 12;
} catch(err) {
    console.log(err);
}

try {
    course.length = "12";
} catch (err) {
    console.log(err);
}

try {
    course.students = "Thomas";
} catch (err) {
    console.log(err);
}