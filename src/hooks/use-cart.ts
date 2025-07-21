import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }]
      });
    }
  },
  
  removeItem: (id) => {
    set({
      items: get().items.filter(item => item.id !== id)
    });
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  openCart: () => {
    set({ isOpen: true });
  },
  
  closeCart: () => {
    set({ isOpen: false });
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.priceNumber * item.quantity), 0);
  }
}));