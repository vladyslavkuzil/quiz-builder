import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import styles from './QuizList.module.css';

interface Quiz {
  id: number;
  title: string;
  numQuestions: number;
}

const QuizList: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    try {
      const res = await api.get('/quizzes');
      setQuizzes(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch quizzes');
    }
  };

  const deleteQuiz = async (id: number) => {
    try {
      await api.delete(`/quizzes/${id}`);
      setQuizzes(quizzes.filter(q => q.id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete quiz');
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className={styles.container}>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.map(q => (
          <li key={q.id} className={styles.quizItem}>
            <Link to={`/quizzes/${q.id}`} className={styles.quizTitle}>
              {q.title} ({q.numQuestions} questions)
            </Link>
            <button className={styles.buttonDelete} onClick={() => deleteQuiz(q.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
