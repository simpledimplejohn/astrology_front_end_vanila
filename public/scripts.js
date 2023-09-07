console.log("scripts connects")
const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthdate = document.getElementById("birthdate").value;
    const birthTime = document.getElementById("birthTime").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    let element = document.getElementById("output");
    
    


    let userInfo = `User Info Is:<br>
    First Name: ${firstName}<br>
    Last Name: ${lastName}<br>
    Birthdate: ${birthdate}<br>
    Birth Time: ${birthTime}<br>
    Latitude: ${latitude}<br>
    Longitude: ${longitude}`;
    
    // Set the "output" element's text content
    element.innerHTML = userInfo;
});






