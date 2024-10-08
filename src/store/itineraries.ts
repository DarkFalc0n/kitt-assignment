import { TItinerary } from '@/lib/types';
import { create } from 'zustand';

type ItinerariesStore = {
  itineraries: TItinerary[];
  setItineraries: (itineraries: TItinerary[]) => void;
};

const useItinerariesStore = create<ItinerariesStore>((set) => ({
  itineraries: [],
  setItineraries: (itineraries) => set(() => ({ itineraries }))
}));

export { useItinerariesStore };
