'use client';
import { ExtendedFC, TItinerary } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getFormattedTime, getStops, getTimeDiff } from '@/lib/utils';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { useAppState } from '@/hooks';
import FlightDrawerContent from './flight-drawer-content';

const FlightCard: ExtendedFC<TItinerary> = ({
  price,
  outgoingFlights,
  returnFlights
}) => {
  const {
    isFlightDrawerOpen,
    toggleFlightDrawer,
    flightDrawerContent,
    setFlightDrawerContent
  } = useAppState();
  return (
    <>
      <Drawer
        direction="right"
        open={isFlightDrawerOpen}
        onClose={toggleFlightDrawer}
      >
        <DrawerContent className="fixed bottom-0 right-0 top-0 z-10">
          <FlightDrawerContent />
        </DrawerContent>
      </Drawer>
      <div
        className="flex cursor-pointer rounded-lg border border-border bg-transparent hover:bg-card"
        onClick={() => {
          toggleFlightDrawer();
          setFlightDrawerContent({ price, outgoingFlights, returnFlights });
        }}
      >
        <div className="flex flex-grow flex-col gap-7 pb-4 pl-8 pr-5 pt-6">
          <div>
            <div className="text-small-tertiary mb-2">
              {outgoingFlights[0].departure.toLocaleString('en', {
                weekday: 'short',
                day: 'numeric',
                month: 'short'
              })}
            </div>
            <div className="flex justify-between">
              <div className="flex w-1/2 gap-6">
                <div className="relative size-[44px]">
                  <Image
                    src={outgoingFlights[0].airlineIcon}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-small-tertiary">
                    {outgoingFlights[0].airline} • {outgoingFlights[0].id}
                  </div>
                  <div className="text-large">
                    {getFormattedTime(outgoingFlights[0].departure)} -{' '}
                    {getFormattedTime(outgoingFlights[0].arrival)}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-small-tertiary">
                  {outgoingFlights[0].from} -{' '}
                  {outgoingFlights[outgoingFlights.length - 1].to}
                </div>
                <div className="text-large">
                  {getTimeDiff(
                    outgoingFlights[outgoingFlights.length - 1].arrival,
                    outgoingFlights[0].departure
                  )}
                </div>
              </div>
              <div className="text-large w-[140px] self-end">
                {getStops(outgoingFlights.length)}
              </div>
            </div>
          </div>
          <div>
            <div className="text-small-tertiary mb-2">
              {returnFlights[0].departure.toLocaleString('en', {
                weekday: 'short',
                day: 'numeric',
                month: 'short'
              })}
            </div>
            <div className="flex justify-between">
              <div className="flex w-1/2 gap-6">
                <div className="relative size-[44px]">
                  <Image
                    src={returnFlights[0].airlineIcon}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-small-tertiary">
                    {returnFlights[0].airline} • {returnFlights[0].id}
                  </div>
                  <div className="text-large">
                    {getFormattedTime(returnFlights[0].departure)} -{' '}
                    {getFormattedTime(returnFlights[0].arrival)}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-small-tertiary">
                  {returnFlights[0].from} -{' '}
                  {returnFlights[returnFlights.length - 1].to}
                </div>
                <div className="text-large">
                  {getTimeDiff(
                    returnFlights[returnFlights.length - 1].arrival,
                    returnFlights[0].departure
                  )}
                </div>
              </div>
              <div className="text-large w-[140px] self-end">
                {getStops(returnFlights.length)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end border-l border-border">
          <div className="flex-shrink self-end px-4 pb-4 pt-14">
            <div className="text-small-tertiary">from</div>
            <div className="text-xlarge mb-2">AED {price.toFixed(2)}</div>
            <Button size="lg" className="mt-2">
              Select
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
