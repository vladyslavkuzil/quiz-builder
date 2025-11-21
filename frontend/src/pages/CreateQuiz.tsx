import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import QuestionForm from '../components/QuestionForm';
import styles from './CreateQuiz.module.css';

interface Question {
  text: string;
  type: string;
  options?: string;
}

interface FormValues {
  title: string;
  questions: Question[];
}

const CreateQuiz: React.FC = () => {
  const { register, handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      title: '',
      questions: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions'
  });

  // ----------- SUBMIT -------------
  const onSubmit = async (data: FormValues) => {
    const formattedQuestions = data.questions.map(q => ({
      ...q,
      options: q.options ? q.options.split(',').map(opt => opt.trim()) : []
    }));

    try {
      const res = await fetch('http://localhost:4000/quizzes', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: data.title,
          questions: formattedQuestions
        })
      });

      if (!res.ok) throw new Error('Failed request');

      alert('Quiz created successfully!');
      reset();

    } catch (err) {
      console.error(err);
      alert('Failed to create quiz.');
    }
  };

  // ----------- RENDER -------------
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h1>Create Quiz</h1>

      <input
        {...register('title', { required: true })}
        placeholder="Quiz Title"
        className={styles.input}
      />

      {fields.map((field, index) => (
        <QuestionForm
          key={field.id}
          index={index}
          register={register}
          remove={remove}
        />
      ))}

      <button
        type="button"
        className={styles.buttonAdd}
        onClick={() => append({ text: '', type: 'boolean', options: '' })}
      >
        Add Question
      </button>

      <button type="submit" className={styles.buttonSubmit}>
        Submit Quiz
      </button>
    </form>
  );
};

export default CreateQuiz;
