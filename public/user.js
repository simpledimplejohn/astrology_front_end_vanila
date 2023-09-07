class User {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.birthdate = "";
        this.birthTime = "";
        this.latitude = "";
        this.longitude = "";
    }

    setUserData(firstName, lastName, birthdate, birthTime, latitude, longitude) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.birthTime = birthTime;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
