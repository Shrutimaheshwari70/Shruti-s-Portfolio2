import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ status: "success", message: "Message saved to MongoDB" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
