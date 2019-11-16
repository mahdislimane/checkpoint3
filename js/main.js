var y = "";
function button(x) {
  var z = y + x;
  document.getElementById("formul").innerHTML = z;
  y = z;
  document.getElementById("pos").addEventListener("click", function() {
    z += "+";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });
  document.getElementById("mul").addEventListener("click", function() {
    z += "*";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });
  document.getElementById("division").addEventListener("click", function() {
    z += "/";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });
  document.getElementById("neg").addEventListener("click", function() {
    z += "-";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });
  document.getElementById("equal").addEventListener("click", function() {
    document.getElementById("result").innerHTML = eval(z);
  });
}
document.getElementById("raz").addEventListener("click", function() {
  z = "";
  y = "";

  document.getElementById("formul").innerHTML = 0;
  document.getElementById("result").innerHTML = 0;
});
