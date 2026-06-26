'use client';
import { useEffect } from 'react';
import { useQuizStore } from '@/store/useQuizStore';

export default function LoadingScreen() {
  const { scores, setStage, setResultData } = useQuizStore();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch('/api/result', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: scores }),
        });
        const resData = await response.json();
        if (resData.success) {
          setResultData(resData.data);
          setTimeout(() => setStage('result'), 1500);
        }
      } catch (error) {
        console.error('API 錯誤:', error);
      }
    };
    fetchResult();
  }, [scores, setStage, setResultData]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <div className="text-6xl animate-bounce">🍡</div>
      <div className="text-xl font-bold text-[var(--primary-text)]">
        正在搓出你的麻糬⋯⋯
      </div>
    </div>
  );
}