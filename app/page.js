'use client';
import { useQuizStore } from '@/store/useQuizStore';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';

export default function Home() {
  const stage = useQuizStore((state) => state.stage);

  return (
    <main
      className="flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 md:p-10"
      style={{
        background:
          'linear-gradient(160deg, #FFF7D6 0%, #FFE3EC 45%, #D6F0FF 100%)',
      }}
    >
      <div className="w-full max-w-[400px] h-[680px] bg-[var(--frame-bg)] relative flex flex-col shadow-[0_20px_50px_rgba(183,120,78,0.25)] rounded-[40px] overflow-hidden">
        {stage === 'start' && <StartScreen />}
        {stage === 'quiz' && <QuizScreen />}
        {stage === 'loading' && <LoadingScreen />}
        {stage === 'result' && <ResultScreen />}
      </div>
    </main>
  );
}