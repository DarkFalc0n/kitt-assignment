import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TAirPort } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getAirportByCode = (code: string, airports: TAirPort[]) => {
  return airports.find((airport) => airport.code === code);
};

export const getFormattedTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const getTimeDiff = (date1: Date, date2: Date) => {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m`;
};

export const getStops = (flights: number) => {
  return flights > 1 ? `${flights - 1} stops` : 'No stops';
};
