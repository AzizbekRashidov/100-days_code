var elHeading = document.querySelector(".heading");
var elForm = document.querySelector(".FAQ");
var elInputAge = document.querySelector(".inputAge");
var elInputName = document.querySelector(".inputName");
var elInputJob = document.querySelector(".inputJob");
var elInputTel = document.querySelector(".inputTel");
var elInputEmail = document.querySelector(".inputEmail");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();


    var Age = elInputAge.value.trim()
    var Name = elInputName.value.trim().toUpperCase()
    var Job = elInputJob.value.trim().toLowerCase()
    var Tel = elInputTel.value.trim().toUpperCase()
    var Email = elInputEmail.value.trim().toLowerCase()

    elHeading.textContent = `Mening yoshim ${Age} da, Mening ismim ${Name}, Men ${Job} da o'qiyman, Telefonim raqamim ${Tel}, Email pochta manzilim ${Email}.`
});