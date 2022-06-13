const express = require("express");
const nRouter = require("./routes/news");
const connection = require("./backend/database/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.use("/news", nRouter);
app.get("/", (req, res) => {
    res.send("not working");
});

app.listen(PORT, async () => {
    await connection;
    console.log("Successfully Connected to db");
    console.log(`Server started at port`);
});