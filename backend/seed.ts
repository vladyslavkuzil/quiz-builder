const { Quiz, Question } = require('./models');

async function seed() {
  const quiz = await Quiz.create({ title: 'Sample Quiz' });
  await Question.bulkCreate([
    { text: 'Is the sky blue?', type: 'boolean', options: [], QuizId: quiz.id },
    { text: 'Choose fruits', type: 'multiple-choice', options: ['Apple','Banana'], QuizId: quiz.id },
  ]);
  console.log('Seed complete!');
  process.exit();
}

seed();
