

console.log("scripts connects")
const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthdate = document.getElementById("birthdate").value;
    const birthTime = document.getElementById("birthTime").value;
    const latString = document.getElementById("latitude").value;
    const longString = document.getElementById("longitude").value;
    const timezone = 5
    const matches = birthdate.match(/(\d{4})-(\d{2})-(\d{2})/)
    const year = parseInt(matches[1],10);
    const month = parseInt(matches[2],10);
    const date = parseInt(matches[3], 10);
    const timematch = birthTime.match(/(\d{2}):/)
    const hour = parseInt(timematch[1],10);
    const latitude = parseInt(latString);
    const longitude = parseInt(longString);
    console.log("matches array",matches)
    console.log("date",date)
    const newUser = new User()

    newUser.setUserData(firstName, lastName, birthdate, birthTime, latitude,longitude, timezone, year, month, date, hour)
    console.log(newUser);

    let element = document.getElementById("output");
    
    let userInfo = `User Info Is:<br>
    First Name: ${newUser.firstName}<br>
    Last Name: ${newUser.lastName}<br>
    Birthdate: ${newUser.birthdate}<br>
    Birth Time: ${newUser.birthTime}<br>
    Latitude: ${newUser.latitude}<br>
    Longitude: ${newUser.longitude}<br>
    timezone: ${newUser.timezone}<br>
    year: ${newUser.year}<br>
    month: ${newUser.month}<br>
    date: ${newUser.date}<br>
    date: ${newUser.hour}<br>
    `;
    
    // Set the "output" element's text content
    element.innerHTML = userInfo;
});






