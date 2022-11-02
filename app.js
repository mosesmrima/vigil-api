const express = require("express");
const mongoose = require("mongoose")
const incidentsRouter = require("./routes/incidents")
const uri = "mongodb+srv://mrima:V60NCKzaRadUzIZ1@vigil.vdcinmp.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "vigil" }, () => console.log("connected"))

mongoose.connection.on('error', err => {
    console.log(err);
});

const app = express();

app.use("/incidents", incidentsRouter)

app.use(express.json())
app.use(express. urlencoded({extended: false}))

app.listen(5000, () => {
    console.log("Express server is listening on port 5000");
});


