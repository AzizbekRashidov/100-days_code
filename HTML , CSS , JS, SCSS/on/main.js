const elLight = document.querySelector(".light");
const elButton = document.querySelector(".btn");

elButton.addEventListener("click", (evt) => {
    evt.preventDefault(console.log("light"))

    elLight.classList.toggle("night")
});
