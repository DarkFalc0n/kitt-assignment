import { TJourney } from '@/lib/types';
import { create } from 'zustand';

type JourneyStore = {
  journey: Partial<TJourney>;
  setJourney: (journey: Partial<TJourney>) => void;
};

const useJourneyStore = create<JourneyStore>((set) => ({
  journey: {},
  setJourney: (journey) =>
    set((state) => ({ journey: { ...state.journey, ...journey } }))
}));

export { useJourneyStore };
