const windowEl = document.querySelector("#window");
const logout = document.querySelector("#logout");
const again = document.querySelector("#again");

let state = "active";
let timer;

const setState = (next) => {
  state = next;
  windowEl.dataset.state = next;
};

logout.addEventListener("click", () => {
  if (state !== "active") return;
  clearTimeout(timer);
  setState("leaving");
  logout.disabled = true;

  timer = setTimeout(() => {
    setState("signed-out");
  }, 2050);
});

again.addEventListener("click", () => {
  if (state !== "signed-out") return;
  clearTimeout(timer);
  setState("returning");
  again.disabled = true;

  timer = setTimeout(() => {
    setState("active");
    logout.disabled = false;
    again.disabled = false;
  }, 620);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state === "signed-out") {
    again.click();
  }
});
