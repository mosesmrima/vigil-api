const express = require("express");
const mongoose = require("mongoose")
const incidentsRouter = require("./routes/incidents")

const app = express();

app.use("/incidents", incidentsRouter)

app.use(express.json())
app.use(express. urlencoded({extended: false}))

app.listen(5000, () => {
    console.log("Express server is listening on port 5000");
});


