const ref = document.querySelector("#inputForm");

ref.addEventListener("sumbmit", handler);

function handler(e) {
  e.preventDefault;
  alert("submit");
}
