birthdate = "1878-11-12"
let matches = birthdate.match(/(\d{}4)-(\d{2})-(\d{2})/)
console.log("birthdate",birthdate)
console.log(matches)



let armonth = birthdate.match(/\d{4}-(\d{2})/)
let month = armonth[0]
console.log(month)


potato = birthdate.match(/\d{4}/)
console.log(potato[0])