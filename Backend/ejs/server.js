const express = require("express");
const app = express();

const port = 3000;
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Welcome to the server js");
});

app.get("/Microsoft", (req, res) => {
    res.render("m");
});
app.get("/Google", (req, res) => {
    res.render("g");
});
app.get("/Microsoft/:city", (req, res) => {
    res.send(`Microsoft ${req.params.city}`);
});
app.get("/Google/:city", (req, res) => {
    res.send(`Google ${req.params.city}`);
});

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})