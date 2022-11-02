const Incident = require("../models/incident");

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}


const getAll = async (req, res) => {

    try {
        const incidents = await  Incident.find().select({_id: 0, __v: 0, id: 0});
        res.status(200).json({success: true, data: incidents})
    } catch (e) {
        res.status(500).json({
            success: false, error: "server error"});
    }
}

const getByYear = async (req, res) => {
    const conditions = {};

    conditions.year = Number(req.params.year);
    if(req.query.month) {
        conditions.month = req.query.month.charAt(0).toUpperCase() + req.query.month.slice(1)
    }

    if (isNaN(conditions.year)) {
        return res.status(400).json({ success: false, error: "Year should be a number"});
    }
    try {
        const incidents = await Incident.find(conditions).select({__v: 0, _id: 0});
        res.status(200).json({success: true, data: incidents});
    } catch (e) {
        res.status(500).json({success: false, error: "server error"});
    }
}


const getByCountry = async (req, res) => {
    const conditions = {};
    conditions.country = titleCase(req.params.country);
    if (req.query.year) {
        conditions.year = req.query.year;
    }
    if(req.query.month) {
        conditions.month = req.query.month.charAt(0).toUpperCase() + req.query.month.slice(1);
    }

    try {
        const incidents = await Incident.find(conditions).select({__v: 0, _id: 0});
        res.status(200).json({success: true, data: incidents});
    } catch (e) {
        res.status(500).json({success: false, error: "server error"});
    }
}

module.exports = { getAll, getByYear, getByCountry  };