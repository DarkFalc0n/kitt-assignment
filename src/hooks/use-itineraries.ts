import { TItinerary } from '@/lib/types';
import { getItineraries } from '@/public/constants/itineraries';
import { useItinerariesStore } from '@/store';

const useItineraries = () => {
  const { itineraries, setItineraries } = useItinerariesStore();
  if (itineraries.length === 0) {
    getItineraries().then((itineraries: TItinerary[]) =>
      setItineraries(itineraries)
    );
  }
  return { itineraries, setItineraries };
};

export { useItineraries };
