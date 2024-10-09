import { TItinerary } from '@/lib/types';
import { create } from 'zustand';

type ItinerariesStore = {
  itineraries: TItinerary[];
  progress: number;
  setItineraries: (itineraries: TItinerary[]) => void;
  setProgress: (progress: number) => void;
};

const useItinerariesStore = create<ItinerariesStore>((set) => ({
  itineraries: [],
  progress: 0,
  setItineraries: (itineraries) => set(() => ({ itineraries })),
  setProgress: (progress) => {
    set(() => ({ progress }));
  }
}));

export { useItinerariesStore };
