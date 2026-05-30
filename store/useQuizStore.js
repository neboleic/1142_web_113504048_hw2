import { create } from 'zustand';

export const useQuizStore = create((set) => ({
  stage: 'start',
  answers: { A: 0, B: 0, C: 0, D: 0 },
  resultData: null, // 新增：用來儲存 API 回傳的測驗結果
  setStage: (stage) => set({ stage }),
  setResultData: (data) => set({ resultData: data }), // 新增：設定結果的 action
  addScore: (type) => set((state) => ({
    answers: { ...state.answers, [type]: state.answers[type] + 1 }
  })),
  resetQuiz: () => set({ stage: 'start', answers: { A: 0, B: 0, C: 0, D: 0 }, resultData: null }),
}));