birthdate = "1878-11-12"
let matches = birthdate.match(/(\d{}4)-(\d{2})-(\d{2})/)
console.log("birthdate",birthdate)
console.log(matches)



let armonth = birthdate.match(/\d{4}-(\d{2})/)
let month = armonth[0]
console.log(month)


potato = birthdate.match(/\d{4}/)
console.log(potato[0])


const testUser =
{
    "firstName": "Zason",
    "lastName": "Zlock",
    "birthdate": "1878-11-12",
    "birthTime": "21:00",
    "latitude": "45.5235",
    "longitude": "-122.6762",
    "timezone": 5,
    "year": "1878",
    "month": "11",
    "date": "12"
}