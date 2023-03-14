function display(value) {
  document.getElementById("result").innerHTML += value;
}
function clearScreen(val) {
  document.getElementById("result").innerHTML = "";
}
function calculate(valued) {
  let p = document.getElementById("result").innerHTML;
  let r = "=" + eval(p);
  document.getElementById("result").innerHTML += r;
}
