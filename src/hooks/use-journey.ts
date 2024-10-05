import { useJourneyStore } from '@/store/journey';
import { TJourney } from '@/lib/types';

const useJourney = () => {
  const { journey, setJourney } = useJourneyStore();
  const handleChange = (journey: Partial<TJourney>) => setJourney(journey);
  const swapAirports = (journey: Partial<TJourney>) =>
    setJourney({ from: journey.to, to: journey.from });
  return { journey, handleChange, swapAirports };
};

export { useJourney };
