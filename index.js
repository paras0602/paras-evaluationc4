const express = require("express");
const nRouter = require("./routes/news");
const connection = require("./backend/database/db");

const app = express();
var port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/news", nRouter);
app.get("/", (req, res) => {
    res.send("not working");
});

app.listen(port, async () => {
    await connection;
    console.log("Successfully Connected to db");
    console.log(`Server started at port`);
});