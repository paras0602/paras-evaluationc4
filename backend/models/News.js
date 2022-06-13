const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    author: String,
    location: String,
    tags: [String],
    total_views: { type: Number, min: 0, max: 1000 },
    category: {
        enum: ["trending", "top", "new"],
    },
});
newsSchema.index({request:"text"})

const News = model("News", newsSchema);

module.exports = News;