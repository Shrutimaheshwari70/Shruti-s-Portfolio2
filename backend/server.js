import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// ✅ CORS allow for local and deployed frontend
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  })
);

// JSON middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log('❌ MongoDB Error:', err));

// Schema & Model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// ✅ POST contact
app.post('/api/contact', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ status: 'success', message: 'Message saved to MongoDB' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// ✅ GET all messages
app.get('/api/messages', async (req, res) => {
  try {
    const allMessages = await Message.find().sort({ date: -1 });
    res.json(allMessages);
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});
// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

