import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateQuiz from './pages/CreateQuiz';
import QuizList from './pages/QuizList';
import QuizDetail from './pages/QuizDetail';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/create" style={{ marginRight: '10px' }}>Create Quiz</Link>
        <Link to="/quizzes">All Quizzes</Link>
      </nav>
      <Routes>
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quizzes/:id" element={<QuizDetail />} />
      </Routes>
    </div>
  );
};

export default App;
