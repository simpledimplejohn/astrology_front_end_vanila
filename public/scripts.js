// getting from the form
console.log("scripts connects")
const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submits")
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthdate = document.getElementById("birthdate").value;
    const birthTime = document.getElementById("birthTime").value;
    const birthPlace = document.getElementById("firstName").value;

    console.log(firstName)
    let element = document.getElementById("output");
    element.textContent = `User Info Is  \n
    ${firstName}`
});





