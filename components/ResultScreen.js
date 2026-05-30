'use client';
import { useQuizStore } from '@/store/useQuizStore';

export default function ResultScreen() {
  const { resultData, resetQuiz } = useQuizStore();

  if (!resultData) return null;

  const handleDownload = () => {
    // 這裡未來可以串接 html2canvas 來實作圖片下載功能
    alert('下載功能尚未串接');
  };

  return (
    <div className="flex flex-col h-full p-8 bg-white">
      
      <div className="flex-grow flex items-center justify-center">
        {/* 結果圖預留區塊 */}
        <div className="w-full aspect-square max-h-[400px] bg-gray-200 flex flex-col items-center justify-center">
          <p className="text-black font-normal text-lg mb-2">測驗結果圖</p>
          <p className="text-gray-500 text-sm">({resultData.title})</p>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 mb-8 mt-8">
        <button 
          onClick={resetQuiz}
          className="w-full max-w-[120px] py-4 bg-gray-200 text-black font-normal hover:bg-gray-300 transition-colors"
        >
          再測一次
        </button>
        <button 
          onClick={handleDownload}
          className="w-full max-w-[120px] py-4 bg-gray-200 text-black font-normal hover:bg-gray-300 transition-colors"
        >
          下載結果
        </button>
      </div>
      
    </div>
  );
}