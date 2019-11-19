var y = "";
var h = "";
var n = [];
var i = 0;
function button(x) {
  document.getElementById("result").innerHTML = 0;
  var z = y + x;
  document.getElementById("formul").innerHTML = z;
  y = z;
  document.getElementById("pos").addEventListener("click", function pos() {
    z += "+";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });
  document.getElementById("mul").addEventListener("click", function mul() {
    z += "*";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });
  document
    .getElementById("division")
    .addEventListener("click", function division() {
      z += "/";
      y = z;
      document.getElementById("formul").innerHTML = z;
    });
  document.getElementById("neg").addEventListener("click", function neg() {
    z += "-";
    y = z;
    document.getElementById("formul").innerHTML = z;
  });

  document.getElementById("equal").addEventListener("click", function equal() {
    document.getElementById("result").innerHTML = "=" + eval(z);
    document.getElementById("result").style.color = "rgb(14, 68, 3)";
    m = h + z + "=" + eval(z) + "<br/>";
    document.getElementById("history").innerHTML = m;
    n[i] = z + "=" + eval(z) + "<br />";
    i = i + 1;

    document.getElementById("test").innerHTML = n.join("");
    h = m;
    z = "";
    y = "";
  });
}

document.getElementById("raz").addEventListener("click", function raz() {
  document.getElementById("result").style.color = "black";
  document.getElementById("formul").innerHTML = 0;
  document.getElementById("result").innerHTML = 0;
});
