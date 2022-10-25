const express = require("express");
const router = express.Router();
const {getAll,getByYear, getByCountry} = require("../controllers/incidents");


router.get("/", getAll);
router.get("/year/:year", getByYear);
router.get("/country/:country", getByCountry);



module.exports = router;
