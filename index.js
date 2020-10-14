const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));

})

// return basic form
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/form.html"));
})

// post endpoint for form
app.post("/submit", (req, res) => {
    console.log({
        name: req.body.name,
        message: req.body.message
    });

    res.send("Thanks for your message! " + req.body.name);
});

// listen to the port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
})
