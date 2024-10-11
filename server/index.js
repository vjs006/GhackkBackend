const express = require("express")
const app = express()
const mongoose = require("mongoose")
const WebtoonModel = require('./models/Webtoons')
app.use(express.json());

mongoose.connect("mongodb+srv://vjsofficial006:thisisvijay@cluster0.lmycv.mongodb.net/content?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.get("/webtoons", async (req, res) => {
    try {
        if (Object.keys(req.query).length === 0){
            const result = await WebtoonModel.find({}); // No more callback, use await
            res.json(result);
        } else {
            const result = await WebtoonModel.find({"toonId" : req.query.toonId}); // No more callback, use await
            res.json(result);
        }
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle error
    }
});

app.post("/webtoons", async (req, res) => {
    try {
        const { toonId, title, description, characters } = req.body;  // Destructure required fields

        // Check if all required fields are provided
        if (toonId == null || !title || !description || !Array.isArray(characters) || characters.length === 0) {
            return res.status(400).json({ message: "toonId, title, description, and characters are required." });
        }
        const webtoon = req.body;
        const newWebtoon = new WebtoonModel(webtoon);

        const result = await WebtoonModel.findOne({toonId}); // No more callback, use await
        if (result){
            res.json({message: "the entered webtoon ID already exists."});
        } else{
            await newWebtoon.save();
            res.status(201).json({ message: "Inserted new webtoon successfully." });
        }
 
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handle error
    }
});
// app.post()

app.listen(3001, ()=>{
    console.log("Server Runs on port " + 3001 + "!")
});

