'use client';
import { useAppState, useJourney } from '@/hooks';
import { ExtendedFC, TAirPort } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Drawer, DrawerContent } from './ui/drawer';
import JourneyForm from './journey-form';

const AirportDisplay: ExtendedFC<{
  airport: TAirPort | null;
}> = ({ airport, className }) => {
  return (
    <div className={cn('my-4 flex w-[200px]', className)}>
      <span className="flex flex-col justify-center text-card">
        {airport ? airport.code : ''}
      </span>
      &nbsp;
      <span className="text-regular flex flex-col justify-center truncate">
        {airport ? airport.name : ''}
      </span>
    </div>
  );
};
const JourneyDisplay: ExtendedFC = () => {
  const { journey } = useJourney();
  const { isSearchDrawerOpen, toggleSearchDrawer } = useAppState();
  return (
    <div className="h-50 flex justify-start gap-4 rounded-full border border-border pl-6 pr-2">
      <AirportDisplay airport={journey.from} />
      <div className="my-4 h-8 w-0 border border-border"></div>
      <AirportDisplay airport={journey.to} />
      <div className="my-4 h-8 w-0 border border-border"></div>
      <div className="flex min-w-24 flex-col justify-center text-card">
        {`${
          journey.departDate
            ? journey.departDate?.toLocaleString('en', {
                month: 'short',
                year: '2-digit'
              })
            : ' '
        }-${
          journey.returnDate
            ? journey.returnDate?.toLocaleString('en', {
                month: 'short',
                year: '2-digit'
              })
            : ' '
        }`}
      </div>
      <div className="my-4 h-8 w-0 border border-border"></div>
      <Drawer
        direction="top"
        open={isSearchDrawerOpen}
        onClose={toggleSearchDrawer}
        shouldScaleBackground={false}
      >
        <DrawerContent className="inset-x-0 top-0 max-h-[233px]">
          <div className="mx-auto w-[1057px] self-start px-7 pb-6 pt-16">
            <JourneyForm onFormSubmit={toggleSearchDrawer} />
          </div>
        </DrawerContent>
      </Drawer>

      <Button
        variant={'secondary'}
        size="icon"
        className="my-2"
        onClick={toggleSearchDrawer}
      >
        <Search size={16} className="font-weight text-cta" strokeWidth={3} />
      </Button>
    </div>
  );
};

export default JourneyDisplay;
