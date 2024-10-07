import type { FC, ReactNode } from 'react';
import {
  AirportSchema,
  FlightSchema,
  ItinerarySchema,
  JourneySchema
} from './schema';
import { z } from 'zod';

interface DefaultFCProps {
  children: ReactNode;
  className: string;
}
export type FCProps<T = unknown> = Partial<DefaultFCProps> & T;
export type ExtendedFC<T = unknown> = FC<FCProps<T>>;

export type TLayout = FC<Pick<DefaultFCProps, 'children'>>;

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export type TPage = FC<Partial<PageProps>>;

export type TAirPort = z.infer<typeof AirportSchema>;
export type TJourney = z.infer<typeof JourneySchema>;
export type TFlight = z.infer<typeof FlightSchema>;
export type TItinerary = z.infer<typeof ItinerarySchema>;

export type PartiallyNullable<T> = {
  [P in keyof T]: T[P] | null;
};
