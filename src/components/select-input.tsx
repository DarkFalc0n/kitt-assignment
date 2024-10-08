import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { TAirPort } from '@/lib/types';
import React, { ReactNode } from 'react';
import { Skeleton } from './ui/skeleton';

type SelectInputProps = {
  placeholderIcon: ReactNode;
  placeholderText: string;
  valueLabel: string;
  value: TAirPort | null;
  options: TAirPort[];
  onValueChange: (value: string) => void;
  name: string;
};

const SelectInput = React.forwardRef<HTMLButtonElement, SelectInputProps>(
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ref
  ) => (
    <Select onValueChange={onValueChange} name={name}>
      <SelectTrigger className="h-16 w-[267.5px]" ref={_ref}>
        <SelectValue
          placeholder={
            <div className="text-regular flex justify-start gap-2">
              {placeholderIcon}
              <span className="flex flex-col justify-center">
                {placeholderText}
              </span>
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
        {options.length !== 0 ? (
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
        ) : (
          Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="my-2 h-12 w-[260px]" />
          ))
        )}
      </SelectContent>
    </Select>
  )
);
SelectInput.displayName = 'SelectInput';

export default SelectInput;
