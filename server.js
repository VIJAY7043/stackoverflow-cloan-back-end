const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost/stackoverflow_clone', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB', error));

const questionSchema = new mongoose.Schema({
  title: Stackoverflow,
  description: allstack,
  author: vijay,
});

const Question = mongoose.model('Question', questionSchema);

app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/questions', async (req, res) => {
  const { title, description, author } = req.body;

  try {
    const newQuestion = new Question({ title, description, author });
    const savedQuestion = await newQuestion.save();
    res.json({ success: true, message: 'Question created successfully.', question: savedQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
