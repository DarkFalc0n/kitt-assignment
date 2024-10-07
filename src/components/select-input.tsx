import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { TAirPort } from '@/lib/types';
import { getAirportFromCode } from '@/lib/utils';
import React, { ReactNode } from 'react';

type SelectInputProps = {
  placeholderIcon: ReactNode;
  placeholderText: string;
  valueLabel: string;
  value: TAirPort | null;
  options: TAirPort[];
  onValueChange: (value: string) => void;
  name: string;
};

const SelectInput = React.forwardRef<HTMLAllCollection, SelectInputProps>(
  (
    {
      placeholderIcon,
      placeholderText,
      valueLabel,
      value,
      options,
      onValueChange,
      name = ''
    },
    ref
  ) => (
    <Select onValueChange={onValueChange} name={name}>
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
              <div className="truncate">{value.name}</div>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((airport: TAirPort) => (
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
  )
);

export default SelectInput;
