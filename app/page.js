'use client';
import { useQuizStore } from '@/store/useQuizStore';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';

export default function Home() {
  const { stage } = useQuizStore();

  return (
    // 外層容器：負責滿版黃色背景圖 (style 行將在這裡處理背景圖的讀取)
    <main 
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 md:p-10"
      style={{ backgroundImage: "url('/bg1.png')" }} 
    >
      
      {/* 關鍵：這就是你要的置中白色實心懸浮框 div */}
      <div className="w-full max-w-[400px] h-[640px] bg-[#ffffff] relative flex flex-col shadow-2xl p-6 md:p-10 rounded-[32px] overflow-hidden border-0">
        
        {/* 所有的測驗畫面組件（Component）都應該被放在這個白色區塊裡面 */}
        {stage === 'start' && <StartScreen />}
        {stage === 'quiz' && <QuizScreen />}
        {stage === 'loading' && <LoadingScreen />}
        {stage === 'result' && <ResultScreen />}
        
      </div>

    </main>
  );
}