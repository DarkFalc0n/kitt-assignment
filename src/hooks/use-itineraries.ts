import { TItinerary } from '@/lib/types';
import { sleep } from '@/lib/utils';
import { getItineraries } from '@/public/constants/itineraries';
import { useItinerariesStore } from '@/store';

const useItineraries = () => {
  const { itineraries, progress, setItineraries, setProgress } =
    useItinerariesStore();
  if (progress === 0) {
    sleep(200)
      .then(() => {
        setProgress(1);
      })
      .then(() => {
        sleep(700).then(() => {
          setProgress(2);
        });
      })
      .then(() => {
        if (itineraries.length === 0) {
          getItineraries().then((itineraries: TItinerary[]) => {
            setItineraries(itineraries);
            setProgress(3);
          });
        }
      });
  }

  return { itineraries, progress, setItineraries };
};

export { useItineraries };
