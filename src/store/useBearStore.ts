import { create } from 'zustand'

// 谈谈复杂应用的状态管理 https://juejin.cn/post/7177216308843380797
type BearStore = {
  bears: number
  increasePopulation: (by: number) => void
  removeAllBears: () => void
}
export const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
}))
