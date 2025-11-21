import React from 'react';
import type { UseFormRegister } from 'react-hook-form';
import styles from './QuestionForm.module.css';

interface QuestionFormProps {
  index: number;
  register: UseFormRegister<any>;
  remove: (index: number) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ index, register, remove }) => {
  return (
    <div className={styles.card}>
      <input
        {...register(`questions.${index}.text`, { required: true })}
        placeholder="Question text"
        className={styles.input}
      />

      <select
        {...register(`questions.${index}.type`)}
        className={styles.select}
      >
        <option value="boolean">True/False</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="open-text">Open Text</option>
      </select>

      <input
        {...register(`questions.${index}.options`)}
        placeholder="Comma-separated options"
        className={styles.input}
      />

      <button
        type="button"
        onClick={() => remove(index)}
        className={styles.buttonRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default QuestionForm;
