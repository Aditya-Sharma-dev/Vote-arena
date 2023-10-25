// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/wcdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Create a schema for vote data
const voteSchema = new mongoose.Schema({
  user: String,
  option: String,
  timestamp: Date,
});

const Vote = mongoose.model("Vote", voteSchema);

const yourSchema = new mongoose.Schema({
    name: String,
    points: Number,
});
  
const YourModel = mongoose.model('YourModel', yourSchema);

// Handle POST requests for storing votes
app.post("/store-vote", async (req, res) => {
  const { user, option, timestamp } = req.body;

  if (!user || !option || !timestamp) {
    return res.status(400).json({ error: "Option and timestamp are required" });
  }

  try {
    const vote = new Vote({ user, option, timestamp });
    await vote.save();
    res.status(201).json({ message: "Vote stored successfully" });
    console.log(vote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to store vote" });
  }
});

app.get('/api/fetch-data', async (req, res) => {
    try {
      const data = await YourModel.find(); 
      res.json(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
