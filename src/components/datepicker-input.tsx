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
import { FormControl } from './ui/form';

const DatePickerInput: ExtendedFC<{
  placeholderText: string;
  value: Date | null;
  onDateChange: SelectSingleEventHandler;
  defaultValue?: Date;
}> = ({
  value,
  onDateChange,
  placeholderText,
  className,
  defaultValue = new Date()
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'h-full min-w-[176px] justify-start p-3',
              value && 'text-muted-foreground',
              className
            )}
          >
            {value ? format(value, 'PPP') : <span>{placeholderText}</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={defaultValue}
          onSelect={onDateChange}
          disabled={(date) => date < new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerInput;
