import JourneyForm from '@/components/journey-form';
import { Button } from '@/components/ui/button';
import { TPage } from '@/lib/types';

const Home: TPage = () => {
  return (
    <div className="mx-auto h-[433px] w-[1057px]">
      <div className="text-heading pb-8 pt-[106px] text-center">
        Good Afternoon, Brian
      </div>
      <div className="flex w-full flex-col gap-6 rounded-md border border-border px-7 py-6">
        <Button variant="secondary" size="sm" className="self-start">
          Flights
        </Button>
        <JourneyForm />
      </div>
    </div>
  );
};

export default Home;
