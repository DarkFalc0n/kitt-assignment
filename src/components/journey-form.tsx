'use client';
import { Button } from './ui/button';
import { LocateFixed } from 'lucide-react';
import { airports } from '@/public/constants/airports';
import { useJourney } from '@/hooks';
import { z } from 'zod';
import { ExtendedFC, TAirPort } from '@/lib/types';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectInput from './select-input';
import DatePickerInput from './datepicker-input';
import { JourneySchema } from '@/lib/schema';

const filterAirports = (query?: string) => {
  if (!query) return airports;
  return airports.filter(
    (airport) => !airport.code.toLowerCase().includes(query.toLowerCase())
  );
};

const JourneyForm: ExtendedFC = () => {
  const form = useForm<z.infer<typeof JourneySchema>>({
    resolver: zodResolver(JourneySchema)
  });
  const onSubmit = (data: any) => {
    console.log('SUCCESS', data);
  };

  const { journey, setJourney } = useJourney();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          name="from"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <SelectInput
                options={filterAirports(journey?.to?.code)}
                placeholderIcon={<LocateFixed />}
                placeholderText="Where from"
                value={field.value}
                valueLabel="Where from"
                name="from"
                onValueChange={(code) => {
                  const airport = JSON.parse(code) as TAirPort;
                  setJourney({
                    ...journey,
                    from: airport
                  });
                  field.onChange(airport);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="to"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <SelectInput
                options={filterAirports(journey?.from?.code)}
                placeholderIcon={<LocateFixed />}
                placeholderText="Where to"
                value={field.value}
                valueLabel="Where to"
                onValueChange={(code) => {
                  const airport = JSON.parse(code) as TAirPort;
                  setJourney({
                    ...journey,
                    to: airport
                  });
                  field.onChange(airport);
                }}
                name="to"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="startDate"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <DatePickerInput
                  value={field.value}
                  onDateChange={(value) => {
                    setJourney({
                      ...journey,
                      startDate: value!
                    });
                    field.onChange(value);
                  }}
                  placeholderText="Departure"
                />
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="endDate"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <DatePickerInput
                  value={field.value}
                  onDateChange={(value) => {
                    setJourney({
                      ...journey,
                      endDate: value!
                    });
                    field.onChange(value);
                  }}
                  placeholderText="Return"
                />
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default JourneyForm;
