var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input")
var javob = document.querySelector(".h1")

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    var Input = elInput.value.trim()

    var userAll = [
        ""
    ]

    userAll.unshift(Input);

    console.log(userAll);

    javob.textContent = (userAll);
});