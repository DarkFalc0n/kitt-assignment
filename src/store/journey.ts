import { PartiallyNullable, TJourney } from '@/lib/types';
import { create } from 'zustand';

type JourneyStore = {
  journey: PartiallyNullable<TJourney>;
  setJourney: (journey: PartiallyNullable<TJourney>) => void;
};

const useJourneyStore = create<JourneyStore>((set) => ({
  journey: {
    to: null,
    from: null,
    startDate: null,
    endDate: null
  },
  setJourney: (journey) =>
    set((state) => ({ journey: { ...state.journey, ...journey } }))
}));

export { useJourneyStore };
