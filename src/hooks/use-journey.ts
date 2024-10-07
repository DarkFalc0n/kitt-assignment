import { useJourneyStore } from '@/store/journey';
import { TJourney } from '@/lib/types';

const useJourney = () => {
  const { journey, setJourney } = useJourneyStore();
  return { journey, setJourney };
};

export { useJourney };
