import { ExtendedFC, TItinerary } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getFormattedTime, getStops, getTimeDiff } from '@/lib/utils';

const FlightCard: ExtendedFC<TItinerary> = ({
  price,
  outgoingFlights,
  returnFlights
}) => {
  return (
    <div className="flex cursor-pointer rounded border border-border bg-background hover:bg-card">
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
      <div className="self-end border-l border-border px-4 pb-4 pt-14">
        <div className="text-small-tertiary">from</div>
        <div className="text-xlarge mb-2">AED {price.toFixed(2)}</div>
        <Button size="lg" className="mt-2">
          Select
        </Button>
      </div>
    </div>
  );
};

export default FlightCard;
