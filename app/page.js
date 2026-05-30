'use client';
import { useQuizStore } from '@/store/useQuizStore';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultScreen from '@/components/ResultScreen';

export default function Home() {
  const { stage } = useQuizStore();

  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-gray-50">
      <div className="w-full max-w-[430px] h-[100vh] md:h-[90vh] md:max-h-[900px] bg-white relative overflow-y-auto overflow-x-hidden flex flex-col">
        {stage === 'start' && <StartScreen />}
        {stage === 'quiz' && <QuizScreen />}
        {stage === 'loading' && <LoadingScreen />}
        {stage === 'result' && <ResultScreen />}
      </div>
    </main>
  );
}