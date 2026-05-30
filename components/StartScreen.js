'use client';
import { useQuizStore } from '@/store/useQuizStore';

export default function StartScreen() {
  const setStage = useQuizStore((state) => state.setStage);

  return (
    <div className="flex flex-col items-center justify-center h-full text-black">
      {/* 簡約標題 */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-normal tracking-wider">測驗標題</h1>
        <p className="text-gray-500 font-normal leading-relaxed mt-4">
          敘述敘述敘述敘述敘述敘述敘述
        </p>
      </div>

      {/* 簡約灰色按鈕 */}
      <button 
        onClick={() => setStage('quiz')}
        className="px-10 py-4 bg-gray-200 text-black font-normal text-xl hover:bg-gray-300 transition-all active:translate-y-0"
      >
        開始
      </button>
    </div>
  );
}