const express = require("express");
const nRouter = require("./routes/news");


const app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/news", nRouter);
app.get("/", (req, res) => {
    res.send("not working");
});

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});