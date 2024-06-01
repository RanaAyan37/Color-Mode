let main = document.querySelector("#main");
let btn = document.querySelector("#btn");
let h1 = document.querySelector("#h1");
let Mode = "dark";

btn.addEventListener("click", function () {
  if (Mode === "dark") {
    main.style.backgroundColor = "black";
    h1.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.innerText = "Light Mode";
    Mode = "light";
  } else {
    main.style.backgroundColor = "white";
    h1.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.innerHTML = "Dark Mode";
    Mode = "dark";
  }
});
