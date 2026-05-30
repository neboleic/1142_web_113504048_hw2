'use client';
import { useQuizStore } from '@/store/useQuizStore';

export default function StartScreen() {
  const setStage = useQuizStore((state) => state.setStage);

  return (
    <div className="flex flex-col items-center justify-center h-full text-black p-6">
      
      {/* 上半部：圖片與文字群組 */}
      <div className="flex flex-col items-center text-center w-full">
        
        {/* 標題上方的圖片區塊 */}
        <div className="w-full max-w-[140px] aspect-video mb-8 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
          <img 
            src="/cover1.png" 
            alt="首頁圖片" 
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-normal tracking-wider">測測你是哪種天才麻糬</h1>
        <p className="text-gray-500 font-normal leading-relaxed mt-4">
          叮鈴～叮鈴！
          <br />麻糬攤車上擺滿各種不同口味的麻糬
          <br />圓滾滾、甜滋滋、軟Q誘人的麻糬
          <br />你忍不住想了想，如果我是麻糬⋯⋯
        </p>
      </div>

      {/* 下半部：開始按鈕 */}
      <button 
        onClick={() => setStage('quiz')}
        className="w-full h-full max-w-[200px] max-h-[40px] py-4 bg-yellow-200 text-black font-normal text-xl hover:bg-yellow-300 transition-colors mb-4"
      >
        開始測驗
      </button>
      
    </div>
  );
}