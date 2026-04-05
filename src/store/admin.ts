import { create } from 'zustand';
import { Restaurant } from '@/types';

interface AdminState {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: string | null;
  fetchRestaurants: () => Promise<void>;
  updateRestaurantStatus: (id: string, status: 'approved' | 'rejected') => Promise<void>;
}

// Example mock data for development
const mockRestaurants: Restaurant[] = [
  { id: '1', name: 'Pasta Palace', ownerName: 'Luigi Mario', email: 'luigi@pasta.com', status: 'pending', createdAt: '2023-10-01' },
  { id: '2', name: 'Burger Barn', ownerName: 'Bob Belcher', email: 'bob@burgerbarn.com', status: 'approved', createdAt: '2023-09-15' },
  { id: '3', name: 'Sushi Station', ownerName: 'Jiro Ono', email: 'jiro@sushi.com', status: 'rejected', createdAt: '2023-09-28' },
];

export const useAdminStore = create<AdminState>((set) => ({
  restaurants: mockRestaurants, // Initialize with mock data for prototype
  isLoading: false,
  error: null,
  
  fetchRestaurants: async () => {
    set({ isLoading: true, error: null });
    try {
      // Mock API call
      // const response = await api.get('/admin/restaurants');
      // set({ restaurants: response.data.data });
      
      // Using mock data timeout to simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      set({ restaurants: mockRestaurants });
    } catch (error: unknown) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch restaurants',
      });
    } finally {
      set({ isLoading: false });
    }
  },

  updateRestaurantStatus: async (id: string, status: 'approved' | 'rejected') => {
    set({ isLoading: true, error: null });
    try {
      // await api.patch(`/admin/restaurants/${id}/status`, { status });
      await new Promise(resolve => setTimeout(resolve, 500));
      set((state) => ({
        restaurants: state.restaurants.map((rest) =>
          rest.id === id ? { ...rest, status } : rest
        ),
      }));
    } catch (error: unknown) {
      set({
        error: error instanceof Error ? error.message : 'Failed to update status',
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
