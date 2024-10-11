const mongoose = require("mongoose")
const WebtoonsSchema = new mongoose.Schema({
    toonId:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    characters:{
        type: [String],
        required: true,
    }
});

const WebtoonModel = mongoose.model("webtoons", WebtoonsSchema)
module.exports = WebtoonModel