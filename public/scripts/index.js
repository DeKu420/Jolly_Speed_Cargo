const ham = document.getElementById("hamburger");
const navBar = document.querySelector("#navBar");
console.log(ham, navBar);
ham.addEventListener("click", function () {
  navBar.classList.toggle("open");
});
