import { useQueryState } from 'nuqs';
import { TJourney } from '@/lib/types';

const useJourneyParams = () => {
  const [from, setFrom] = useQueryState('from');
  const [to, setTo] = useQueryState('to');
  const [startDate, setStartDate] = useQueryState('start');
  const [endDate, setEndDate] = useQueryState('end');
  const queryParams = { from, to, startDate, endDate };
  //TODO: get rid of the partial
  const setQueryParams = (journey: Partial<TJourney>) => {
    setFrom(journey.from!.code);
    setTo(journey.to!.code);
    setStartDate(journey.startDate!.toISOString());
    setEndDate(journey.endDate!.toISOString());
  };
  return { queryParams, setQueryParams };
};

export { useJourneyParams };
