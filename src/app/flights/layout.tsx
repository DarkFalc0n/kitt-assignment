import JourneyDisplay from '@/components/journey-display';
import ProgressBar from '@/components/ui/progress-bar';
import { TLayout } from '@/lib/types';
import { X } from 'lucide-react';

const FightsLayout: TLayout = ({ children }) => {
  return (
    <div className="px-[72px]">
      <header className="flex justify-between py-7">
        <JourneyDisplay />
        <div className="flex flex-col justify-center">
          <button className="rounded-full border border-border p-3">
            <X size={20} />
          </button>
        </div>
      </header>
      <ProgressBar />
      {children}
    </div>
  );
};

export default FightsLayout;
