import { getAirports } from '@/public/constants/airports';
import { useAirportsStore } from '@/store';

const useAirports = () => {
  const { airports, setAirports } = useAirportsStore();

  if (airports.length === 0) {
    getAirports().then((airports) => setAirports(airports));
  }
  return { airports, setAirports };
};

export { useAirports };
