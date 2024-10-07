import { airports } from '@/public/constants/airports';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAirportFromCode = (code: string) => {
  return airports.filter((airport) =>
    airport.code.toLowerCase().includes(code.toLowerCase())
  );
};
