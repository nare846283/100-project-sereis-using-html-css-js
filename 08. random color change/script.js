var main = document.querySelector("#main");
var changeColorBtn = document.querySelector("#changeColorBtn");

function changeColor() {
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  var color = `rgb(${r},${g},${b})`;
  console.log(color);
  main.style.background = color;
}

changeColorBtn.addEventListener("click", function () {
  alert("hello");
  changeColor();
});
