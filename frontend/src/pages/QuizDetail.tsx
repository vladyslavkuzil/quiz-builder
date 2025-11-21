import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import styles from './QuizDetail.module.css';

interface Question {
  text: string;
  type: string;
  options?: string[];
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

const QuizDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await api.get(`/quizzes/${id}`);
        setQuiz(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch quiz');
      }
    };
    fetchQuiz();
  }, [id]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q, i) => (
        <div key={i} className={styles.question}>
          <div className={styles.questionTitle}>
            {q.text} ({q.type})
          </div>
          {q.type === 'checkbox' && q.options && (
            <ul className={styles.optionList}>
              {q.options.map((opt, j) => (
                <li key={j}>{opt}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizDetail;
