import JourneyDisplay from '@/components/journey-display';
import { TLayout } from '@/lib/types';
import { X } from 'lucide-react';
import { Suspense } from 'react';

const FightsLayout: TLayout = ({ children }) => {
  return (
    <div className="px-[72px]">
      <Suspense>
        <header className="flex justify-between px-[120px] py-7">
          <JourneyDisplay />
          <div className="flex flex-col justify-center">
            <button className="rounded-full border border-border p-3">
              <X size={20} />
            </button>
          </div>
        </header>
        {children}
      </Suspense>
    </div>
  );
};

export default FightsLayout;
