document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#searchBtn");
  const searchBar = document.querySelector(".searchbar-wrapper");
  const textInput = document.querySelector("#textInput");
  var flag = 0;

  const buttonClickHandler = () => {
    if (flag == 0) {
      searchBar.style.width = "300px";
      textInput.style.width = "240px";
      textInput.style.paddingLeft = "10px";
      flag = 1;
    } else {
      flag = 0;
      searchBar.style.width = "60px";
      textInput.style.width = "0px";
      textInput.style.paddingLeft = "0px";
    }
  };

  btn.addEventListener("click", buttonClickHandler);
});
