const { Router } = require("express");
const News = require("../backend/models/News");

const nRouter = Router();


nRouter.post("/new", (req, res) => {
    let {
        title,
        description,
        date,
        author,
        location,
        tags,
        total_views,
        category,
    } = req.body;
    if (total_views > 50 && total_views < 100) {
        category = "trending";
    } else if (total_views > 100) {
        category = "top";
    } else if (date === new Date()) {
        category = "new";
    } else {
        category = "";
    }
    const news = new News({
        title,
        description,
        date,
        author,
        location,
        tags,
        total_views,
        category,
    });
    news.save();
    res.send(news);
});

nRouter.get("/get", async (req, res) => {
    const news = await News.find();
    res.send(news);
});

nRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const {
        title,
        description,
        date,
        author,
        location,
        tags,
        total_views,
        category,
    } = req.body;
    const news = await News.findByIdAndUpdate(id, {
        title,
        description,
        date,
        author,
        location,
        tags,
        total_views,
        category,
    });
    res.status(200).send("News Updated Successfully")
});

nRouter.get("/get/:query", function (req, res) {
    let query = req.params.query;
    News.find({
        $text:{
        $search: query
    }
    }, function (err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error: "Error"
            }))
        }
    })
})

module.exports = nRouter;