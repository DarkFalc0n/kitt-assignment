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
