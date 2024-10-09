'use client';
import { ExtendedFC, TAirPort, TItinerary } from '@/lib/types';
import { cn, getAirportByCode, getTimeDiff } from '@/lib/utils';
import { ArrowLeft, Circle, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { useAirports, useAppState } from '@/hooks';
import { ReactNode } from 'react';
import Image from 'next/image';

const timelineList = (
  flightDrawerContent: TItinerary,
  airports: TAirPort[]
) => {
  const result = [] as ReactNode[];
  const { outgoingFlights } = flightDrawerContent;

  for (let i = 0; i < outgoingFlights.length; i++) {
    const flight = outgoingFlights[i];
    result.push(
      <div className="flex flex-col gap-2">
        <div className="flex h-3 gap-3">
          <Circle size={12} className="text-foreground" strokeWidth={3} />{' '}
          <span className="text-xsmall-tertiary flex h-full flex-col justify-center">
            {flight.departure.toLocaleString('en', {
              weekday: 'short',
              day: 'numeric',
              month: 'short'
            })}{' '}
            •{' '}
            {flight.departure.toLocaleString('en', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false
            })}
          </span>
        </div>
        <div className="ml-1.5 flex h-16 w-full justify-between border-l border-foreground px-5">
          <span className="text-small-heavy">
            {flight.from} • {getAirportByCode(flight.from, airports)!.name}
          </span>
          <div className="flex">
            <div className="relative size-7 border border-border">
              <Image
                src={flight.airlineIcon}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="text-xsmall-tertiary ml-4">
              {flight.airline} Airlines • {flight.id}
              <br />
              {flight.class} • {flight.classid}
              <br />
              {getTimeDiff(flight.departure, flight.arrival)}
            </div>
          </div>
        </div>
        <div className="flex h-3 gap-3">
          <Circle size={12} className="text-foreground" strokeWidth={3} />{' '}
          <span className="text-xsmall-tertiary flex h-full flex-col justify-center">
            {flight.arrival.toLocaleString('en', {
              weekday: 'short',
              day: 'numeric',
              month: 'short'
            })}{' '}
            •{' '}
            {flight.arrival.toLocaleString('en', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false
            })}
          </span>
        </div>
        <div
          className={cn('ml-1.5 flex h-16 w-full flex-col px-5', {
            'dashed-left-border h-40': i !== outgoingFlights.length - 1
          })}
        >
          <span className="text-small-heavy">
            {flight.to} • {getAirportByCode(flight.to, airports)!.name}
          </span>
          {i < outgoingFlights.length - 1 && (
            <div className="text-xsmall-tertiary flex-grow">
              <span className="flex h-full w-[200px] flex-col justify-center text-center">
                <div className="flex w-full justify-center gap-2">
                  <Clock
                    size={14}
                    className="flex h-full flex-col justify-center"
                  />
                  Layover{' '}
                  {i < outgoingFlights.length - 1 &&
                    getTimeDiff(
                      flight.arrival,
                      outgoingFlights[i + 1].departure
                    )}
                </div>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return result;
};

const FlightDrawerContent: ExtendedFC = ({ className }) => {
  const { flightDrawerContent } = useAppState();
  const { airports } = useAirports();
  return (
    <div className={cn('flex flex-col gap-6 px-7 py-7', className)}>
      <Button variant="secondary" size="icon" className="self-start">
        <ArrowLeft size={16} />
      </Button>
      <div className="text-xlarge-heavy py-6">Flight Details</div>
      <div className="h-0 w-[600px] border border-border" />
      <div className="flex flex-col gap-2">
        {timelineList(flightDrawerContent!, airports)}
      </div>
    </div>
  );
};

export default FlightDrawerContent;
