'use client';
import FlightCard from '@/components/cards/flight-card';
import LoadingCard from '@/components/cards/loading-card';
import FlightCardSkeleton from '@/components/skeleton/flight-card.skeleton';
import ProgressBar from '@/components/ui/progress-bar';
import { useJourney, useAirports, useItineraries } from '@/hooks';
import { TJourney } from '@/lib/types';
import { getAirportByCode } from '@/lib/utils';
import { parseAsTimestamp, useQueryState } from 'nuqs';
import { useEffect } from 'react';

const Flights = () => {
  //Query state is used to facilitate sharing of links with the journey details
  const [from] = useQueryState('from');
  const [to] = useQueryState('to');
  const [departDate] = useQueryState('depart', parseAsTimestamp);
  const [returnDate] = useQueryState('return', parseAsTimestamp);
  const { setJourney } = useJourney();
  const { airports } = useAirports();
  const { itineraries } = useItineraries();

  useEffect(() => {
    console.log('from', from);
    console.log('to', to);
    console.log('departDate', departDate);
    console.log('returnDate', returnDate);
    console.log('airports', airports);
    if (from && to && departDate && returnDate) {
      setJourney({
        from: getAirportByCode(from, airports)!,
        to: getAirportByCode(to, airports)!,
        departDate,
        returnDate
      } as TJourney);
    }
  }, [airports]);
  return (
    <>
      {itineraries.length <= 0 ? (
        <div>
          <ProgressBar />
          <div className="px-[120px]">
            <div className="flex flex-col gap-5">
              {Array.from({ length: 4 }, (_, index) => (
                <FlightCardSkeleton key={index} />
              ))}
            </div>
          </div>
          <div className="absolute left-1/2 top-[200px] -translate-x-1/2">
            <LoadingCard loadedItems={0} />
          </div>
        </div>
      ) : (
        itineraries.map((journey, index) => (
          <FlightCard key={index} {...journey} />
        ))
      )}
    </>
  );
};

export default Flights;
