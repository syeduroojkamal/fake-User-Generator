function addUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "name"
      ).innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
      document.getElementById("email").innerText = `${data.results[0].email}`;
      document.getElementById("phone").innerText = `${data.results[0].phone}`;
      document.getElementById("age").innerText = `${data.results[0].dob.age}`;
      document.getElementById(
        "picture"
      ).src = `${data.results[0].picture.large}`;
      document.querySelector(".flexContainer").style.display = "block";
    });
}

document.addEventListener("click", addUser);
addEventListener("DOMContentLoaded", addUser);
