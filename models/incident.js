const { Schema, model } = require("mongoose");

const incidentsSchema = new Schema({
    country: {
        name: String,
        long: Number,
        lat: Number
    },
    year: Number,
    month: String,
    description: String
});

module.exports = model("Incident", incidentsSchema);
