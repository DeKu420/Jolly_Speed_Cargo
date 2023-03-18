const tbody = document.querySelector("tbody");

const getData = async function () {
  let response = await fetch("http://localhost:8000/booking/get");
  let data = await response.json();
  console.log(data);
  displayData(data);
};

const displayData = (data) => {
  tbody.innerHTML = "";
  tbody.innerHTML = `<th>Name</th><th>Email</th><th>Pickup</th><th>Destination</th><th>Service</th><th>Phone</th><th>Status</th>`;
  data.forEach((el) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = el.name;

    let td2 = document.createElement("td");
    td2.innerHTML = el.email;

    let td3 = document.createElement("td");
    td3.innerHTML = el.pickup;

    let td4 = document.createElement("td");
    td4.innerHTML = el.destination;

    let td5 = document.createElement("td");
    td5.innerHTML = el.service;

    let td6 = document.createElement("td");
    td6.innerHTML = el.phone;

    let td9 = document.createElement("td");
    td9.innerHTML =
      el.status == 1
        ? "Booked"
        : el.status == 2
        ? "Shipped"
        : el.status == 3
        ? "Delivered"
        : "Enquired";

    let td7 = document.createElement("td");
    td7.innerHTML = "Edit";
    td7.style.cursor = "pointer";
    td7.addEventListener("click", function () {
      dial.showModal();
      editBtn.addEventListener("click", async function () {
        let response = await fetch(`http://localhost:8000/booking/${el._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: statusSel.value,
          }),
        });
        dial.close();
        window.location.reload();
      });
    });

    let td8 = document.createElement("td");
    td8.innerHTML = "Delete";
    td8.style.cursor = "pointer";
    td8.style.backgroundColor = "red";
    td8.style.color = "white";
    td8.addEventListener("click", function () {
      dialDel.showModal();
      deleteBtn.addEventListener("click", async function () {
        let response = await fetch(`http://localhost:8000/booking/${el._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        window.location.reload();
      });
    });

    tr.append(td1, td2, td3, td4, td5, td6, td9, td7, td8);
    tbody.append(tr);
  });
};

getData();

const userBody = document.getElementById("user_body");

const getUserData = async function () {
  let response = await fetch("http://localhost:8000/users");
  let data = await response.json();
  console.log(data);
  displayUserData(data);
};

const displayUserData = (data) => {
  userBody.innerHTML = "";
  userBody.innerHTML = `<th>Name</th><th>Email</th><th>Admin</th>`;
  data.forEach((el) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = el.name;

    let td2 = document.createElement("td");
    td2.innerHTML = el.email;

    let td4 = document.createElement("td");
    td4.innerHTML = el.admin;

    let td5 = document.createElement("td");
    td5.innerHTML = "Edit";

    let td6 = document.createElement("td");
    td6.innerHTML = "Delete";
    td6.style.backgroundColor = "red";
    td6.style.color = "white";

    tr.append(td1, td2, td4, td5, td6);
    userBody.append(tr);
  });
};

getUserData();

const dial = document.querySelector("dialog");
const closeBtn = document.getElementById("editClose");
const editBtn = document.getElementById("editBtn");
const statusSel = document.getElementById("statusSelect");

closeBtn.addEventListener("click", function () {
  dial.close();
});

const dialDel = document.querySelector("#delDial");
const deleteClose = document.getElementById("deleteClose");
const deleteBtn = document.getElementById("deleteBtn");

deleteClose.addEventListener("click", function () {
  dialDel.close();
});
