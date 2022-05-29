var teacher_array = [];
var display_array = [];
function submit() {
  for (var counter = 1; counter < 5; counter++) {
    var teacher = document.getElementById("name" + counter).value;
    teacher_array.push(teacher);
  }
  for (var counter = 0; counter < 4; counter++) {
    var teacher = "<h2>" + "NAME - " + teacher_array[counter] + "</h2>";
    display_array.push(teacher);
  }

  var Display1 = display_array.join("and");
  document.getElementById("display_name_with_commas").innerHTML = display_array;
  document.getElementById("display_name_without_commas").innerHTML = Display1;
  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
  display_array.sort();
  document.getElementById("display_name_with_commas").innerHTML = display_array;
}
