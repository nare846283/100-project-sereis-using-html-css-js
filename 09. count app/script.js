let counter = document.querySelector("h1");
let incr = document.querySelector("#incr");
let decr = document.querySelector("#decr");
let reset = document.querySelector("#reset");

var count = 0;
incr.addEventListener("click", function () {
  count++;
  counter.innerHTML = count;
  if (count > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "red";
  }
});

decr.addEventListener("click", function () {
  count--;
  counter.innerHTML = count;
  if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "green";
  }
});

reset.addEventListener("click", function () {
  if (count < 0 || count > 0) {
    counter.style.color = "black";
    counter.innerHTML = "0";
  }
});
