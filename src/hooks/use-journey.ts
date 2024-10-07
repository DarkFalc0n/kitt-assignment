import { useJourneyStore } from '@/store/journey';

const useJourney = () => {
  const { journey, setJourney, swapAirports } = useJourneyStore();
  return { journey, setJourney, swapAirports };
};

export { useJourney };
