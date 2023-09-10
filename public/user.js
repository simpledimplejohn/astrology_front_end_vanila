class User {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.birthdate = "";
        this.birthTime = "";
        this.latitude = "";
        this.longitude = "";
        this.timezone = 0;
        this.year = 0;
        this.month = 0;
        this.date = 0;
        this.hours = 0;
        
    }

    setUserData(firstName, lastName, birthdate, birthTime, latitude, longitude, timezone, year, month, date, hours) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.birthTime = birthTime;
        this.latitude = latitude;
        this.longitude = longitude;
        this.timezone = timezone;
        this.year = year;
        this.month = month;
        this.date = date;
        this.hours = hours;
    }
}
