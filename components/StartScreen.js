'use client';
import { useQuizStore } from '@/store/useQuizStore';

export default function StartScreen() {
  const setStage = useQuizStore((state) => state.setStage);

  return (
    <div className="flex flex-col items-center justify-center h-full py-10 px-2 text-[#401900]">
      
      <div className="flex flex-col items-center text-center w-full">
        
        {/* 圖片容器：刪除了白底、陰影、內距與圓角限制，讓 PNG 原圖直接呈現 */}
        {/* 使用 object-contain 確保圖片不會被裁切，保持原比例 */}
        <div className="w-full max-w-[180px] mb-8">
          <img 
            src="/cover1.png" 
            alt="首頁圖片" 
            className="w-full h-auto object-contain"
          />
        </div>

        <h1 className="text-[28px] font-bold tracking-tight text-[#401900] leading-tight">
          測測你是哪種<br/>
          <span className="text-[#B7784E]">天才麻糬</span>
        </h1>

        <p className="text-[#401900]/70 font-medium leading-relaxed mt-6 text-[15px]">
          叮鈴～叮鈴！
          <br />麻糬攤車上擺滿各種不同口味的麻糬
          <br />圓滾滾、甜滋滋、軟Q誘人的麻糬
          <br />你忍不住想了想，如果我是麻糬⋯⋯
        </p>
      </div>

     {/* 【終極 3D 按鈕：使用 shadow 來做厚度】
        py-4: 你現在可以直接在這裡改 padding，絕對會立刻變胖變瘦！
        shadow-[0_6px_0_#B7784E]: 往下投射一個 6px 且不暈開的焦糖色實心陰影，當作按鈕底座。
        active:translate-y-[6px]: 點擊時，按鈕本體往下位移 6px。
        active:shadow-[0_0px_0_#B7784E]: 點擊時，原本的陰影瞬間收合為 0px。
        (這兩行加起來，就會產生「完美按壓到底」的立體錯覺！)
      */}
      <button 
        onClick={() => {
          setTimeout(() => setStage('quiz'), 150);
        }}
        className="w-full max-w-[220px] h-[40px] mt-12 mb-4 py-6 bg-[#FFE88D] text-[#401900] font-bold text-xl rounded-full shadow-[0_6px_0_#B7784E] active:shadow-[0_0px_0_#B7784E] active:translate-y-[6px] transition-all duration-75 outline-none border-none"
      >
        開始測驗
      </button>
      
    </div>
  );
}