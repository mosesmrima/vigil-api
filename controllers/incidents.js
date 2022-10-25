const Incident = require("../models/incident");


const getAll = async (req, res) => {

    try {
        const incidents = await  Incident.find().select({_id: 0, __v: 0, id: 0})
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
        conditions.month = req.query.month
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
    conditions.country = req.params.country;
    if (req.query.year) {
        conditions.year = req.query.year;
    }
    if(req.query.month) {
        conditions.month = req.query.month
    }

    try {
        const incidents = await Incident.find(conditions).select({__v: 0, _id: 0});
        res.status(200).json({success: true, data: incidents});
    } catch (e) {
        res.status(500).json({success: false, error: "server error"});
    }
}

module.exports = { getAll, getByYear, getByCountry  };