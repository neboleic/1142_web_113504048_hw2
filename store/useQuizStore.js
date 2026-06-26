import { create } from 'zustand';

const initialScores = { A: 0, B: 0, C: 0, D: 0 };

export const useQuizStore = create((set) => ({
  stage: 'start',
  setStage: (stage) => set({ stage }),

  scores: { ...initialScores },
  addScore: (type) =>
    set((state) => ({
      scores: { ...state.scores, [type]: state.scores[type] + 1 },
    })),

  resultData: null,
  setResultData: (data) => set({ resultData: data }),

  resetQuiz: () =>
    set({
      stage: 'start',
      scores: { ...initialScores },
      resultData: null,
    }),
}));