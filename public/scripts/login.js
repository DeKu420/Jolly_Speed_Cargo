document.getElementById("login").style.display = "block";
document.getElementById("login").className += " active";

function openTab(e, process) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(process).style.display = "block";
  e.currentTarget.className += " active";
}

const reg_email = document.getElementById("email");
const reg_pass = document.getElementById("password");
const reg_name = document.getElementById("name");
const reg_btn = document.getElementById("reg_btn");

reg_btn.addEventListener("click", async function () {
  let response = await fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: reg_name.value,
      email: reg_email.value,
      password: reg_pass.value,
    }),
  });

  let data = await response.json();
  console.log(data);
  if (data.token) {
    alert("You have registered successfully");
  } else {
    alert("An error occurred");
  }
});

// login

const log_email = document.getElementById("login_email");
const log_pass = document.getElementById("login_password");
const log_btn = document.getElementById("login_btn");

log_btn.addEventListener("click", async function () {
  let response = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: log_email.value,
      password: log_pass.value,
    }),
  });

  let data = await response.json();
  console.log(data);
  if(data.token){
    if(data.admin){
      window.location.replace("/admin");
    }
    else{
      alert("You are not an admin")
    }
  }else{
    alert("An error occurred.");
  }
});
