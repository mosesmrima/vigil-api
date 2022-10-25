const { Schema, model } = require("mongoose");

const incidentsSchema = new Schema({
    country: {
        name: {
            type: String,
            required: true
        },
        long: {
            type: Number,
            required: true
        },
        lat:{
            type: Number,
            required: true
        },
        required: true
    },
    year: {
        type: Number,
        required: true,
    },
    month: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = model("Incident", incidentsSchema);
