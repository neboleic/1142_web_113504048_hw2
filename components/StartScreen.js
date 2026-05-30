'use client';
import { useQuizStore } from '@/store/useQuizStore';

export default function StartScreen() {
  const setStage = useQuizStore((state) => state.setStage);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-white">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-2xl font-normal text-black mb-8">測驗標題</h1>
      </div>
      
      <button 
        onClick={() => setStage('quiz')}
        className="w-full max-w-[200px] py-3 bg-gray-200 text-black font-normal mb-12 hover:bg-gray-300 transition-colors"
      >
        開始
      </button>
    </div>
  );
}