let themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  themeToggle.innerHTML =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "Light"
      : "Dark";
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // themeToggle.innerHTML = document.body.classList.contains("dark")
  //   ? "Light"
  //   : "Dark";

  // if (document.body.classList.contains("light")) {
  //   trans();
  //   document.body.classList.remove("light");
  //   document.body.classList.add("dark");
  // } else {
  //   trans();
  //   document.body.classList.remove("dark");
  //   document.body.classList.add("light");
  // }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};
