const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./resources/countries.json").toString());
const codes = []

for(let i = 0; i < data.refCountryCodes.length; i++) {
    codes.push({
        country: data.refCountryCodes[i].country,
        latitude: data.refCountryCodes[i].latitude,
        longitude: data.refCountryCodes[i].longitude
    })
}

const countries = {
    countryCoordinates: codes
}

const json = JSON.stringify(countries);

fs.writeFileSync("./resources/countryCoordinates.json", json, "utf8")
