import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
type authStore={
    isLoggedIn:boolean,
    setIsLoggedIn: (isLoggedIn:boolean) => void
}

const useAuthStore = create(
    persist<authStore>(
      (set, get) => ({
        isLoggedIn:false,
        actions:()=>{
            const loggedIn= get().isLoggedIn
        },
        setIsLoggedIn: (input:boolean) => set((state: authStore) => ({isLoggedIn:input })),
        
      }),
      {
        name: 'auth-storage', // unique name
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
export default useAuthStore