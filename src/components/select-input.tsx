import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ExtendedFC, TAirPort, TJourney } from '@/lib/types';
import { ReactNode } from 'react';

const SelectInput: ExtendedFC<{
  onValueChange: (e: string) => void;
  placeholderIcon: ReactNode;
  placeholderText: string;
  valueLabel: string;
  value: string;
  options: TAirPort[];
}> = ({
  onValueChange,
  placeholderIcon,
  placeholderText,
  valueLabel,
  value,
  options
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="h-16 w-[267.5px]">
        <SelectValue
          placeholder={
            <div className="flex justify-start gap-2">
              {placeholderIcon}
              {placeholderText}
            </div>
          }
          className="w-3"
        >
          {value && (
            <div className="flex flex-col">
              <div className="text-left text-muted-foreground">
                {valueLabel}
              </div>
              <div className="truncate">{value}</div>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((airport) => (
            <SelectItem key={airport.code} value={JSON.stringify(airport)}>
              <div className="flex flex-col">
                {airport.city}
                <div className="text-muted-foreground">{airport.country}</div>
                <div className="absolute right-8 top-4">{airport.code}</div>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
