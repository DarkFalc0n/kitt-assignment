import { TItinerary } from '@/lib/types';
import { sleep } from '@/lib/utils';
import { getItineraries } from '@/public/constants/itineraries';
import { useItinerariesStore } from '@/store';

const useItineraries = () => {
  const { itineraries, progress, setItineraries, setProgress } =
    useItinerariesStore();
  sleep(200).then(() => {
    setProgress(1);
  });
  sleep(700).then(() => {
    setProgress(2);
  });
  if (itineraries.length === 0) {
    getItineraries().then((itineraries: TItinerary[]) => {
      setItineraries(itineraries);
      setProgress(3);
    });
  }
  return { itineraries, progress, setItineraries };
};

export { useItineraries };
