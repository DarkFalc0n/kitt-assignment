import { ExtendedFC } from '@/lib/types';
import { Skeleton } from '../ui/skeleton';

const FlightCardSkeleton: ExtendedFC = () => {
  return (
    <div className="flex bg-background">
      <div className="flex flex-grow flex-col gap-7 pb-4 pl-8 pr-5 pt-6">
        <div>
          <div className="flex justify-between">
            <div className="flex w-1/2 gap-6">
              <Skeleton className="relative size-[44px]" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-[115px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-[72px]" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
            <Skeleton className="h-6 w-[140px] self-end" />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex w-1/2 gap-6">
              <Skeleton className="relative size-[44px]" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-[115px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-[72px]" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
            <Skeleton className="h-6 w-[140px] self-end" />
          </div>
        </div>
      </div>
      <div className="w-[212px] self-end px-4 pb-4 pt-14"></div>
    </div>
  );
};

export default FlightCardSkeleton;
