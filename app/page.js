'use client';
import { useQuizStore } from '@/store/useQuizStore';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';

export default function Home() {
  const { stage } = useQuizStore();

  return (
    <main 
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 md:p-10"
      style={{ backgroundImage: "url('/bg1.png')" }} 
    >
      
      {/* 這裡移除了 border-4 以及 border 顏色，僅保留圓角與陰影 */}
      <div className="w-full max-w-[400px] h-[660px] bg-[#FFFEF9] relative flex flex-col shadow-[0_20px_50px_rgba(183,120,78,0.3)] p-6 md:p-8 rounded-[40px] overflow-hidden pd-6">
        
        {stage === 'start' && <StartScreen />}
        {stage === 'quiz' && <QuizScreen />}
        {stage === 'loading' && <LoadingScreen />}
        {stage === 'result' && <ResultScreen />}
        
      </div>

    </main>
  );
}