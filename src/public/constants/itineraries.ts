import { TItinerary } from '@/lib/types';
import { sleep } from '@/lib/utils';
import { flightIcons } from './flights';
export const twoWayJourneys: TItinerary[] = [
  {
    outgoingFlights: [
      {
        id: 'SV553',
        airline: 'Emirates',
        airlineIcon: flightIcons.Emirates,
        class: 'Economy',
        classid: 'A330',
        from: 'DXB',
        to: 'JFK',
        departure: new Date('2024-08-01T09:00:00Z'),
        arrival: new Date('2024-08-01T14:00:00Z')
      },
      {
        id: 'HF533',
        airline: 'Emirates',
        airlineIcon: flightIcons.Emirates,
        class: 'Economy',
        classid: 'A331',
        from: 'JFK',
        to: 'DEL',
        departure: new Date('2024-08-01T16:45:00Z'),
        arrival: new Date('2024-08-02T20:50:00Z')
      }
    ],
    returnFlights: [
      {
        id: 'SV554',
        airline: 'Lufthansa',
        airlineIcon: flightIcons.Lufthansa,
        class: 'Economy',
        classid: 'A330',
        from: 'DEL',
        to: 'DXB',
        departure: new Date('2024-08-02T09:45:00Z'),
        arrival: new Date('2024-08-02T14:00:00Z')
      }
    ],
    price: 3240.4
  }
];

export const getItineraries = async () => {
  await sleep(1000);
  return twoWayJourneys;
};
