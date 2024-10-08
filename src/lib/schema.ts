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
    class: z.string(),
    from: AirportSchema,
    to: AirportSchema,
    departure: z.date(),
    arrival: z.date(),
    price: z.number()
  })
  .required();

export const ItinerarySchema = z
  .object({
    journey: JourneySchema,
    outgoingFlights: z.array(FlightSchema),
    returnFlights: z.array(FlightSchema),
    price: z.number()
  })
  .required();
