import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <nav className={styles.nav}>
    <Link to="/create" className={styles.link}>Create Quiz</Link>
    <Link to="/quizzes" className={styles.link}>All Quizzes</Link>
  </nav>
);

export default Header;
