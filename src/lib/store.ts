import { create } from 'zustand'

export type Module = 'feed' | 'blog' | 'store' | 'photos' | 'school' | 'games' | 'dating' | 'classifieds'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: string
}

interface CartItem {
  id: string
  productId: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    images: string
  }
}

interface AppState {
  // Module navigation
  currentModule: Module
  setCurrentModule: (module: Module) => void
  
  // User state
  user: User | null
  setUser: (user: User | null) => void
  
  // Cart state
  cartItems: CartItem[]
  setCartItems: (items: CartItem[]) => void
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  
  // Search
  searchQuery: string
  setSearchQuery: (query: string) => void
  
  // Notifications
  notifications: Array<{
    id: string
    type: string
    title: string
    read: boolean
  }>
  setNotifications: (notifications: Array<{id: string; type: string; title: string; read: boolean}>) => void
  
  // UI state
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
  rightSidebarVisible: boolean
  setRightSidebarVisible: (visible: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  // Module navigation
  currentModule: 'feed',
  setCurrentModule: (module) => set({ currentModule: module }),
  
  // User state
  user: {
    id: 'user_1',
    name: 'John Doe',
    email: 'john@cysecbook.com',
    avatar: '/images/profiles/male-profile.png',
    role: 'admin'
  },
  setUser: (user) => set({ user }),
  
  // Cart state
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),
  addToCart: (item) => set((state) => {
    const existing = state.cartItems.find(i => i.productId === item.productId)
    if (existing) {
      return {
        cartItems: state.cartItems.map(i => 
          i.productId === item.productId 
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
    }
    return { cartItems: [...state.cartItems, item] }
  }),
  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(i => i.id !== id)
  })),
  clearCart: () => set({ cartItems: [] }),
  
  // Search
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // Notifications
  notifications: [
    { id: '1', type: 'comment', title: 'New comment on your post', read: false },
    { id: '2', type: 'like', title: 'Someone liked your photo', read: false },
    { id: '3', type: 'match', title: 'You have a new match!', read: false },
    { id: '4', type: 'order', title: 'Your order has been shipped', read: true },
  ],
  setNotifications: (notifications) => set({ notifications }),
  
  // UI state
  sidebarCollapsed: false,
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  rightSidebarVisible: true,
  setRightSidebarVisible: (visible) => set({ rightSidebarVisible: visible }),
}))
