const ham = document.getElementById("hamburger");
const navBar = document.querySelector("#navBar");
ham.addEventListener("click", function () {
  navBar.classList.toggle("open");
});
