const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

btn.addEventListener("click", function () {
  console.log("CLICKED!!");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});


