import { z } from 'zod';

export const AirportSchema = z
  .object({
    code: z.string(),
    city: z.string(),
    country: z.string(),
    name: z.string()
  })
  .required();

export const JourneySchema = z
  .object({
    from: AirportSchema,
    to: AirportSchema,
    departDate: z.date(),
    returnDate: z.date()
  })
  .required();

export const FlightSchema = z
  .object({
    id: z.string(),
    airline: z.string(),
    airlineIcon: z.string().url(),
    class: z.string(),
    classid: z.string(),
    from: z.string().length(3),
    to: z.string().length(3),
    departure: z.date(),
    arrival: z.date()
  })
  .required();

export const ItinerarySchema = z
  .object({
    outgoingFlights: z.array(FlightSchema),
    returnFlights: z.array(FlightSchema),
    price: z.number()
  })
  .required();
