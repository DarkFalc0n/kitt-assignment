'use client';
import LoadingCard from '@/components/loading-card';
import { useJourney, useAirports } from '@/hooks';
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
    <div>
      <LoadingCard loadedItems={0} />
    </div>
  );
};

export default Flights;
