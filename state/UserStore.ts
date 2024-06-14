import { create } from "zustand";
import TestData from '../TestData.json'
interface UserState {
    user: User | null,
    setUser: (user: User) => void
}
export const useUserStore = create<UserState>()((set) => ({
    user: TestData.TestUser,
    setUser: (user) => set(() => ({ user: user }))
}));