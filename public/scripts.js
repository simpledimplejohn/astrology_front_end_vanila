

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
    const timezone = 5
    const matches = birthdate.match(/(\d{4})-(\d{2})-(\d{2})/)
    const year = matches[1];
    const month = matches[2];
    const day = matches[3];
    console.log("birthdate",birthdate)
    console.log(matches)
    const newUser = new User()

    newUser.setUserData(firstName, lastName, birthdate, birthTime, latitude,longitude, timezone, year, month, day)
    console.log(newUser);

    let element = document.getElementById("output");
    
    let userInfo = `User Info Is:<br>
    First Name: ${newUser.firstName}<br>
    Last Name: ${newUser.lastName}<br>
    Birthdate: ${newUser.birthdate}<br>
    Birth Time: ${newUser.birthTime}<br>
    Latitude: ${newUser.latitude}<br>
    Longitude: ${newUser.longitude}`;
    
    // Set the "output" element's text content
    element.innerHTML = userInfo;
});






