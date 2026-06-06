'use client';
import { useState } from 'react';
import { useQuizStore } from '@/store/useQuizStore';

const QUESTIONS = [
  {
    id: 1,
    title: '題目一',
    description: '老師請原諒我這個期末水深火熱我會繼續進化到你改作業的前一刻的，無論來不來得及趕上你改作業的時候我都會好好把這些麻糬手搓完😭',
    options: [
      { text: '選項一', type: 'A' },
      { text: '選項二', type: 'B' },
      { text: '選項三', type: 'C' },
      { text: '選項四', type: 'D' },
    ]
  },
  {
    id: 2,
    title: '題目二',
    description: '敘述敘述敘述敘述敘述',
    options: [
      { text: '選項一', type: 'A' },
      { text: '選項二', type: 'B' },
      { text: '選項三', type: 'C' },
      { text: '選項四', type: 'D' },
    ]
  },
  {
    id: 3,
    title: '題目三',
    description: '敘述敘述敘述敘述敘述',
    options: [
      { text: '選項一', type: 'A' },
      { text: '選項二', type: 'B' },
      { text: '選項三', type: 'C' },
      { text: '選項四', type: 'D' },
    ]
  },
  {
    id: 4,
    title: '題目四',
    description: '敘述敘述敘述敘述敘述',
    options: [
      { text: '選項一', type: 'A' },
      { text: '選項二', type: 'B' },
      { text: '選項三', type: 'C' },
      { text: '選項四', type: 'D' },
    ]
  }
];

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { addScore, setStage } = useQuizStore();
  const currentQ = QUESTIONS[currentQuestionIndex];

  const handleOptionClick = (type) => {
    addScore(type);
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStage('loading');
    }
  };

  return (
    <div className="flex flex-col h-full p-8 bg-white">
      <div className="flex flex-col items-center mt-12 mb-12">
        <h2 className="text-xl font-normal text-black mb-4">
          {currentQ.title}
        </h2>
        <p className="text-black font-normal text-center">
          {currentQ.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        {currentQ.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(opt.type)}
            className="w-full max-w-[200px] py-3 bg-gray-200 text-black font-normal hover:bg-gray-300 transition-colors"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}