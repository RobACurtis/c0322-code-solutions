/* exported getStudentNames */
function getStudentNames(students) {
  var name = [];
  for (var x in students) {
    name.push(students[x].name);
  }
  return name;
}
