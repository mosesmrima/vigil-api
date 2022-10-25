const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./resources/countries.json").toString());
const countries = []

for(let i = 0; i < data.refCountryCodes.length; i++) {
    countries.push({
        country: data.refCountryCodes[i].country,
        latitude: data.refCountryCodes[i].latitude,
        longitude: data.refCountryCodes[i].longitude
    })
}
console.log(countries);
