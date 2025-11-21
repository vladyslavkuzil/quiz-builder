import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const quizRoutes = require('./routes/quizzes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/quizzes', quizRoutes);

module.exports = app;
