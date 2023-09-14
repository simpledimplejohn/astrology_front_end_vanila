const zodiacSigns = [
    "blank",  //0
    "Aries",  //1
    "Taurus", //2
    "Gemini", //3
    "Cancer", //4
    "Leo",    //5
    "Virgo",   //6
    "Libra",   //7
    "Scorpio",  //8
    "Sagittarius", //9
    "Capricorn",  //10
    "Aquarius",   //11
    "Pisces"      //12
  ];


console.log("scripts connects")
const form = document.getElementById("userForm");

// Inside your event listener, mark it as async
form.addEventListener("submit", async function (event) {
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

    console.log("firstName",firstName)
    console.log("birthTime",birthTime)
    console.log("timematch",timematch)
    console.log("hour",hour)
    // console.log("date",date)
    const newUser = new User()

    newUser.setUserData(firstName, lastName, birthdate, birthTime, latitude,longitude, timezone, year, month, date, hour)
    console.log("newUser",newUser);

    const data = await sendToBackEnd(newUser); // this does not work
    

    console.log("returned data: ",data)
    console.log("array[1] ",data.chart.output[1].Ascendant.current_sign)
    console.log("arrya[0] ",data.chart.output[0])

    let element = document.getElementById("output");
    let chartelement = document.getElementById("chart")
    
    let chartinfo = `
    Ascendent: ${zodiacSigns[data.chart.output[1].Ascendant.current_sign]}<br>
    Sun: ${zodiacSigns[data.chart.output[1].Sun.current_sign]}<br>
    Moon: ${zodiacSigns[data.chart.output[1].Moon.current_sign]}<br>
    Mars: ${zodiacSigns[data.chart.output[1].Mars.current_sign]}<br>
    Mercury: ${zodiacSigns[data.chart.output[1].Mercury.current_sign]}<br>
    Jupiter: ${zodiacSigns[data.chart.output[1].Jupiter.current_sign]}<br>
    Venus: ${zodiacSigns[data.chart.output[1].Venus.current_sign]}<br>
    Saturn: ${zodiacSigns[data.chart.output[1].Saturn.current_sign]}<br>
    Uranus: ${zodiacSigns[data.chart.output[1].Uranus.current_sign]}<br>
    Neptune: ${zodiacSigns[data.chart.output[1].Neptune.current_sign]}<br>
    Pluto: ${zodiacSigns[data.chart.output[1].Pluto.current_sign]}<br>
    `


    let userInfo = `User Info Is:<br>
    First Name: ${data.user.fname}<br>
    Last Name: ${newUser.lastName}<br>
    Birthdate: ${newUser.birthdate}<br>
    Birth Time: ${hour}<br>
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
    chartelement.innerHTML = chartinfo
});



const sendToBackEnd = async (newUser) => {
    // console.log("hit send to back end") // this is never being hit, why?
    try {
        const response = await fetch('http://localhost:3000/addUserChart', {   
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(newUser), // Send the newUser object as JSON
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Data from backend worked!:', data);
            return data
        } else {
            console.error('Error sending data to the backend.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};


