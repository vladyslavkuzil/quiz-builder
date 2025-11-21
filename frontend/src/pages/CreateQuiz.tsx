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
  const { register, control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title: '',
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit = async (data: FormValues) => {
    const formattedQuestions = data.questions.map(q => ({
      text: q.text,
      type: q.type,
      options: q.options ? q.options.split(',').map(o => o.trim()) : [],
    }));

    try {
      const response = await fetch('http://localhost:4000/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title,
          questions: formattedQuestions,
        }),
      });

      if (!response.ok) throw new Error('Failed to create quiz');

      alert('Quiz created successfully!');
      reset();

    } catch (error) {
      console.error(error);
      alert('Error creating quiz');
    }
  };

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
