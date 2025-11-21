import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import CreateQuiz from './pages/CreateQuiz';
import QuizList from './pages/QuizList';
import QuizDetail from './pages/QuizDetail';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
    <Header />
      <Routes>
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quizzes/:id" element={<QuizDetail />} />
      </Routes>
    </div>
  );
};

export default App;
