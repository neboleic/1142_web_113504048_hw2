'use client';
import { useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import { useQuizStore } from '@/store/useQuizStore';

export default function ResultScreen() {
  const { resultData, resetQuiz } = useQuizStore();
  const captureRef = useRef(null);

  if (!resultData) return null;

  const handleDownload = async () => {
    if (!captureRef.current) return;
    try {
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: '#FFFEF9',
        scale: 2, // 2 倍解析度，下載的圖比較清晰
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `我的麻糬_${resultData.title}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('下載失敗:', error);
      alert('下載失敗，請再試一次');
    }
  };

  return (
    <div className="flex flex-col h-full px-10 py-12">
      {/* 要被截圖的區域 */}
      <div
        ref={captureRef}
        className="flex-grow flex flex-col items-center justify-center px-4 py-6"
        style={{ backgroundColor: '#FFFEF9' }}
      >
        <h2 className="text-center text-base font-bold text-[var(--primary-text)]/60 mb-4">
          你是⋯⋯
        </h2>
        <img
          src={resultData.image}
          alt={resultData.title}
          className="w-[200px] h-auto object-contain mb-4"
        />
        <p className="text-2xl font-bold text-[var(--primary-text)] mb-3">
          {resultData.title}
        </p>
        <p className="text-center text-sm text-[var(--primary-text)]/80 font-medium leading-relaxed px-2">
          {resultData.description}
        </p>
      </div>

      {/* 按鈕區（不會被截進圖裡） */}
      <div className="flex flex-row justify-center gap-4 mt-6">
        <button
          onClick={resetQuiz}
          className="mochi-btn flex-1 max-w-[140px] py-5 bg-[var(--mochi-green)] text-[var(--primary-text)] shadow-[0_5px_0_rgba(0,0,0,0.08)] active:shadow-[0_0px_0_rgba(0,0,0,0.08)]"
        >
          再測一次
        </button>
        <button
          onClick={handleDownload}
          className="mochi-btn flex-1 max-w-[140px] py-5 bg-[var(--mochi-blue)] text-[var(--primary-text)] shadow-[0_5px_0_rgba(0,0,0,0.08)] active:shadow-[0_0px_0_rgba(0,0,0,0.08)]"
        >
          下載結果
        </button>
      </div>
    </div>
  );
}