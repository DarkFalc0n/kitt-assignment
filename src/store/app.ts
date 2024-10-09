import { TItinerary } from '@/lib/types';
import { create } from 'zustand';

type TAppStateStore = {
  isSearchDrawerOpen: boolean;
  isFlightDrawerOpen: boolean;
  flightDrawerContent: TItinerary | null;
  toggleSearchDrawer: () => void;
  toggleFlightDrawer: () => void;
  setFlightDrawerContent: (content: TItinerary) => void;
};

const useAppStateStore = create<TAppStateStore>((set) => ({
  isSearchDrawerOpen: false,
  isFlightDrawerOpen: false,
  flightDrawerContent: null,
  toggleSearchDrawer: () =>
    set((state) => ({ isSearchDrawerOpen: !state.isSearchDrawerOpen })),
  toggleFlightDrawer: () =>
    set((state) => ({ isFlightDrawerOpen: !state.isFlightDrawerOpen })),
  setFlightDrawerContent: (content) =>
    set(() => ({ flightDrawerContent: content }))
}));

export { useAppStateStore };
