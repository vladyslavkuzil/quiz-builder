import { Request, Response } from 'express';
const { Quiz, Question } = require('../models');

exports.createQuiz = async (req: Request, res: Response) => {
    console.log("Creating quiz with data:", req.body);
  try {
    const { title, questions } = req.body;
    const quiz = await Quiz.create({ title });

    const createdQuestions = await Promise.all(
      questions.map((q: any) => Question.create({ ...q, quizId: quiz.id }))
    );

    res.status(201).json({ quiz, questions: createdQuestions });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.findAll({ include: [{ model: Question, as: 'questions' }] });
    const data = quizzes.map((q: any) => ({
      id: q.id,
      title: q.title,
      numQuestions: q.questions.length,
    }));
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQuizById = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id, { include: [{ model: Question, as: 'questions' }] });
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.json(quiz);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

    await quiz.destroy();
    res.status(204).send();
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
