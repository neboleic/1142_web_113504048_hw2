'use client';
import { useQuizStore } from '@/store/useQuizStore';

export default function StartScreen() {
  const setStage = useQuizStore((state) => state.setStage);

  return (
    <div className="flex flex-col items-center justify-between h-full py-12 px-10 text-center">
      <div className="flex flex-col items-center mt-4">
        <div className="w-[180px] mb-8">
          <img
            src="/covermochi.png"
            alt="封面麻糬"
            className="w-full h-auto object-contain"
          />
        </div>

        <h1 className="text-[28px] font-bold leading-tight">
          測測你是哪種
          <br />
          <span className="text-[var(--accent-brown)]">天才麻糬</span>
        </h1>

        <p className="text-[var(--primary-text)]/70 font-medium leading-relaxed mt-6 text-[15px]">
          叮鈴～叮鈴！
          <br />
          麻糬攤車上擺滿各種口味的麻糬
          <br />
          圓滾滾、甜滋滋、軟Q誘人
          <br />
          你忍不住想：如果我是麻糬⋯⋯
        </p>
      </div>

     
      <button
        onClick={() => setTimeout(() => setStage('quiz'), 120)}
        className="mochi-btn w-full max-w-[240px] py-5 mb-2 bg-[var(--mochi-yellow)] text-[var(--primary-text)] text-xl shadow-[0_6px_0_var(--accent-brown)] active:shadow-[0_0px_0_var(--accent-brown)]"
      >        開始測驗
      </button>
    </div>
  );
}