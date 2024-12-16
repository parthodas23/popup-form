let trigger = document.querySelector(".trigger");
let signBtn = document.querySelector(".sign");
let container = document.querySelector(".container");
signBtn.addEventListener("click", () => {
  trigger.classList.add("click");
  container.classList.remove("hide");
});

let closeBtn = document.querySelector(".close");
let submitBtn = document.querySelector(".submit");
let message = document.querySelector(".message");
let inp = document.querySelectorAll("input");
submitBtn.addEventListener("click", () => {
    trigger.classList.add("click");
    if (inp.value != "") {
        message.textContent = "Successfuly Submited";
        inp.value = "";
        setTimeout(() => {
            container.classList.add("hide");
        }, 2100);
    }
});
