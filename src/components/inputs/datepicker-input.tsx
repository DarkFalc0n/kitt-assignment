import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { ExtendedFC } from '@/lib/types';
import { SelectSingleEventHandler } from 'react-day-picker';
import { FormControl } from '../ui/form';

const DatePickerInput: ExtendedFC<{
  placeholderText: string;
  value: Date | null;
  onDateChange: SelectSingleEventHandler;
  defaultValue?: Date;
}> = ({ value, onDateChange, placeholderText, className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'h-16 min-w-[176px] justify-start p-3',
              value && 'text-regular',
              className
            )}
          >
            <CalendarIcon className="h-5 w-5 text-muted-foreground opacity-50" />
            <span className="flex flex-col justify-center">
              {value ? (
                format(value, 'PP')
              ) : (
                <span className="text-regular flex flex-col justify-center">
                  {placeholderText}
                </span>
              )}
            </span>
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          onSelect={onDateChange}
          disabled={(date) => date < new Date(Date.now() - 86400000)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerInput;
