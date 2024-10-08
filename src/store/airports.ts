import { TAirPort } from '@/lib/types';
import { create } from 'zustand';

type AirportStore = {
  airports: TAirPort[];
  setAirports: (airports: TAirPort[]) => void;
};

const useAirportsStore = create<AirportStore>((set) => ({
  airports: [],
  setAirports: (airports) => set(() => ({ airports }))
}));

export { useAirportsStore };
