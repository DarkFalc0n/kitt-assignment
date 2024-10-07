import { PartiallyNullable, TJourney } from '@/lib/types';
import { create } from 'zustand';

type JourneyStore = {
  journey: PartiallyNullable<TJourney>;
  setJourney: (journey: PartiallyNullable<TJourney>) => void;
  swapAirports: () => void;
};

const useJourneyStore = create<JourneyStore>((set) => ({
  journey: {
    to: null,
    from: null,
    startDate: null,
    endDate: null
  },
  setJourney: (journey) =>
    set((state) => ({ journey: { ...state.journey, ...journey } })),
  swapAirports: () =>
    set((state) => {
      const { from, to } = state.journey;
      return { journey: { ...state.journey, from: to, to: from } };
    })
}));

export { useJourneyStore };
