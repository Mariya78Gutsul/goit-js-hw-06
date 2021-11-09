const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length !== +inputEl.getAttribute("data-length")
  ) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
});
