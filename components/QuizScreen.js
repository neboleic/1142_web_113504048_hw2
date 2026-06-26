'use client';
import { useState } from 'react';
import { useQuizStore } from '@/store/useQuizStore';

const QUESTIONS = [
  {
    id: 1,
    title: '第一題',
    description: '假日的早晨醒來，你最想做的第一件事是？',
    image: '/wakeup.gif',
    options: [
      { text: '泡杯茶，安靜地享受獨處時光', type: 'A' },
      { text: '揪朋友出門吃早午餐、到處晃', type: 'B' },
      { text: '幫家人準備早餐，一起吃飯', type: 'C' },
      { text: '窩著看一部一直想看的電影或書', type: 'D' },
    ],
  },
  {
    id: 2,
    title: '第二題',
    description: '朋友臨時找你幫一個有點麻煩的忙，你的反應是？',
    image: '/plz.gif',
    options: [
      { text: '先冷靜評估，再決定怎麼處理最好', type: 'A' },
      { text: '二話不說就答應，先幫了再說！', type: 'B' },
      { text: '就算自己累一點，也不忍心拒絕', type: 'C' },
      { text: '想想有沒有更聰明省事的解法', type: 'D' },
    ],
  },
  {
    id: 3,
    title: '第三題',
    description: '在一群人的聚會裡，你通常是哪種角色？',
    image: '/party.gif',
    options: [
      { text: '安靜聽大家聊，偶爾說中關鍵的話', type: 'A' },
      { text: '帶動氣氛的開心果，話題中心', type: 'B' },
      { text: '默默照顧每個人，幫忙倒水夾菜', type: 'C' },
      { text: '找一兩個聊得來的人深聊', type: 'D' },
    ],
  },
  {
    id: 4,
    title: '第四題',
    description: '如果可以擁有一個週末，你的理想行程是？',
    image: '/weekend.gif',
    options: [
      { text: '一個人的小旅行，放空充電', type: 'A' },
      { text: '滿檔的活動、聚會、新體驗！', type: 'B' },
      { text: '和最重要的人窩在一起就很滿足', type: 'C' },
      { text: '投入自己的興趣，做喜歡的事', type: 'D' },
    ],
  },
];

const OPTION_COLORS = [
  'var(--mochi-pink)',
  'var(--mochi-green)',
  'var(--mochi-blue)',
  'var(--mochi-yellow)',
];

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const { addScore, setStage } = useQuizStore();
  const currentQ = QUESTIONS[index];
  const progress = ((index + 1) / QUESTIONS.length) * 100;

  const handleOptionClick = (type) => {
    addScore(type);
    if (index < QUESTIONS.length - 1) {
      setIndex(index + 1);
    } else {
      setStage('loading');
    }
  };

  return (
    <div className="flex flex-col h-full px-10 py-12">
      <div className="w-full h-2 bg-[var(--mochi-yellow)]/30 rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-[var(--mochi-yellow)] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-[var(--primary-text)]/50 font-medium mb-8">
        {index + 1} / {QUESTIONS.length}
      </p>

      <div className="flex flex-col items-center mb-6">
        <h2 className="text-xl font-bold mb-2">{currentQ.title}</h2>
        <p className="text-[var(--primary-text)]/80 font-medium text-center leading-relaxed mb-3">
          {currentQ.description}
        </p>
        <img
          src={currentQ.image}
          alt={currentQ.title}
          className="w-[200px] h-auto object-contain"
        />
      </div>

      <div className="flex flex-col gap-3 items-center mt-auto">
        {currentQ.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt.type)}
            className="mochi-btn w-full max-w-[280px] py-4 text-sm text-[var(--primary-text)] font-bold shadow-[0_5px_0_rgba(0,0,0,0.12)] active:shadow-[0_0px_0_rgba(0,0,0,0.12)]"
            style={{ backgroundColor: OPTION_COLORS[i] }}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}